const Router = require("koa-router");
const router = new Router();
const comment = require("../controllers/comment/comment");
const routers = router.post("/", comment.add).get("/:id", comment.get);

module.exports = routers;
