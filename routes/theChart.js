const Router = require("koa-router");
const router = new Router();
const theChart = require("../controllers/theChart/theChart");
const routers = router.get("/", theChart.get);

module.exports = routers;
