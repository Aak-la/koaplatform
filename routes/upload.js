const Router = require("koa-router");
const router = new Router();
const upload = require("../controllers/upload");
const routers =router.post("/", upload.upload);

module.exports = routers;
