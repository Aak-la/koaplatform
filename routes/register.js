const Router = require("koa-router");
const router = new Router();
const user = require("../controllers/user/user");
const routers = router.post("/", user.register);
module.exports = routers;