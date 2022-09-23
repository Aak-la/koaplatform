const Router = require("koa-router");
const router = new Router();
const about = require("../controllers/about/about");
const routers = router.get("/", about.get);
module.exports = routers;
