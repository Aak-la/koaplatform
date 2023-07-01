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
const WebSocket = require('ws');
const koaStatic = require("koa-static");
app.use(koaStatic(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: function (ctx) {
      if (ctx.url === "/test") {
        return "*";
      }
      return "http://localhost:8081";
    },
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
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
    formidable: {
      uploadDir: path.join(__dirname, "/public/images"),
      keepExtensions: true
    }
  })
);
app.use(jurisdiction());
app.use(bodyParser());
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(Port);
console.log("starting at port" + Port);


let { createClassifyData,
  createLienData,
  createOrderData } = require("./utils/randomData")
const ws = new WebSocket.Server({ port: 3001 });
ws.on('connection', ws => {
  console.log('server connection');
  ws.on('message', msg => {
    console.log('server receive msg：', msg);
  });
  setInterval(() => {
    let data1 = createClassifyData()
    let data2 = createLienData()
    let data3 = createOrderData()
    let arr = [data1, data2, data3]
    ws.send(JSON.stringify(arr));
  }, 2500)



});



