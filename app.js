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
/* const jurisdiction = require("./middleware/index");
app.use(jurisdiction()); */
app.use(bodyParser());
app.use(
  cors({
    origin: function (ctx) {
      if (ctx.url === "/test") {
        return "*"; // 允许来自所有域名请求
      }
      return "http://localhost:8081";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(Port);
console.log("[demo] start-quick is starting at port 3000");
