const Router = require("koa-router");
const router = new Router();
const classify = require("../controllers/classify/classify");
const routers = router
  .get("/get", classify.get)
  .post("/add", classify.add)
  .post("/delete", classify.delete);

module.exports = routers;
