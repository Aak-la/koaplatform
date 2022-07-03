const express = require("express");
const app = express();
app.use(express.json());
require("./app/controller/connectSql");
require("./app/models/sync");
app.use(express.urlencoded({ extended: true }));
app.use("/api/about", require("./app/route/about.js"));
app.use("/api/banner",require("./app/route/banner"));
app.use("/api/blog",require("./app/route/blog"));
app.use(require("./app/route/ErrorMiddleware.js"));
app.use("/api/message",require("./app/route/message"));
app.use("/api/project",require("./app/route/project"));
app.use("/api/comment",require("./app/route/comment"));
app.use("/api/setting",require("./app/route/setting"));
app.use("/api/login",require("./app/route/logIn"));
app.use("/api/register",require("./app/route/register"));
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`服务器正在运行，端口为： ${PORT}.`);
});

