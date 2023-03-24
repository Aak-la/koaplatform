const Koa = require("koa");
const path = require("path");

const cors = require("koa2-cors");
require("./model/index");
const routers = require("./routes/index");
const app = new Koa();
const Port = process.env.PORT || 8080;
const bodyParser = require("koa-bodyparser");
const jurisdiction = require("./middleware/index");
const { koaBody } = require("koa-body");
const koaStatic = require("koa-static");
app.use(koaStatic(path.join(__dirname, "./controllers/upload")));





app.use(
  cors({
    origin: function (ctx) {
      //设置允许来自指定域名请求
      if (ctx.url === "/test") {
        return "*"; // 允许来自所有域名请求
      }
      return "http://localhost:8081"; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  })
);
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});
app.use(
  koaBody({
    multipart: true,
  })
);
app.use(jurisdiction());
app.use(bodyParser());

app.use(routers.routes()).use(routers.allowedMethods());
app.listen(Port);
console.log("starting at port" + Port);
