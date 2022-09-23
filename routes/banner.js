const Router = require("koa-router");
const router = new Router();
const banner = require("../controllers/banner/banner");
const routers = router.get("/", banner.data);
module.exports = routers;
