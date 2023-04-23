const Router = require("koa-router");
const router = new Router();
const order = require("../controllers/order/order");
const routers = router
    .post("/add", order.add)
    .get("/get", order.get)
    .post("/delete", order.delete);

module.exports = routers;
