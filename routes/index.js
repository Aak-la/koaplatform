const Router = require("koa-router");
const router = new Router({
  prefix: "/api",
});

const logout = require("./user");
router.use("/user", logout.routes(), logout.allowedMethods());

const goods = require("./goods");
router.use("/goods", goods.routes(), goods.allowedMethods());

const upload = require("./upload");
router.use("/upload", upload.routes(), upload.allowedMethods());

const classify = require("./classify");
router.use("/classify", classify.routes(), upload.allowedMethods());

const order = require("./order");
router.use("/order", order.routes(), order.allowedMethods());
module.exports = router;
