const Router = require("koa-router");
const router = new Router({
  prefix: "/api",
});

const banner = require("./banner");
router.use("/banner", banner.routes(), banner.allowedMethods());

const login = require("./login");
router.use("/login", login.routes(), login.allowedMethods());

const register = require("./register");
router.use("/register", register.routes(), register.allowedMethods());

const setting = require("./setting");
router.use("/setting", setting.routes(), setting.allowedMethods());

const blog = require("./blog");
router.use("/blog", blog.routes(), blog.allowedMethods());

const comment = require("./comment");
router.use("/comment", comment.routes(), comment.allowedMethods());

const project = require("./project");
router.use("/project", project.routes(), project.allowedMethods());

const about = require("./about");
router.use("/about", about.routes(), about.allowedMethods());

module.exports = router;
