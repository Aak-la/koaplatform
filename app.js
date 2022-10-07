const Koa = require("koa");
const Logger = require("koa-logger"); // 日志中间件
const path = require("path");
const moment = require("moment"); // 时间格式化插件
const cors = require("koa2-cors");
require("./model/index");
const routers = require("./routes/index");
const app = new Koa();
const Port = process.env.PORT || 8080;
const bodyParser = require("koa-bodyparser");
const jurisdiction = require("./middleware/index");
app.use(jurisdiction());
app.use(bodyParser());
const allowOrigins = [
  "http://localhost:8081", // 需要跨域的端口，与本服务器端口不一样，请注意。
];
app.use(
  cors({
    origin: function (ctx) {
      if (allowOrigins.includes(ctx.header.origin)) {
        return ctx.header.origin;
      }
      return false;
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    withCredentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(Port);
console.log("starting at port 3000");
