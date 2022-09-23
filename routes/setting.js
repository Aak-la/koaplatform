const Router = require("koa-router");
const router = new Router();
const setting = require("../controllers/setting");
const routers = router.get("/", setting.data);
module.exports = routers;
