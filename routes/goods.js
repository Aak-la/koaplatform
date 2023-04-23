const Router = require("koa-router");
const router = new Router();
const goods = require("../controllers/goods/goods");
const routers = router
  .post("/add", goods.add)
  .get("/get", goods.get)
  .get("/delete/:id", goods.delete);
module.exports = routers;
