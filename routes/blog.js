const Router = require("koa-router");
const router = new Router();
const blog = require("../controllers/blog/blog");
const routers = router
  .get("/type", blog.types)
  .get("/list", blog.list)
  .get("/add", blog.add)
  .get("/classification", blog.classifications)
  .get("/:id", blog.getBlog);

module.exports = routers;
