const Router = require("koa-router");
const router = new Router();
const project = require("../controllers/project/project");
const routers = router.get("/", project.add);

module.exports = routers;
