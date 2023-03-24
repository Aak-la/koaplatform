const Router = require("koa-router");
const router = new Router();
const user = require("../controllers/user/user");
const routers = router
  .post("/register", user.register)
  .post("/logout", user.logout)
  .post("/login", user.logIn)
  .post("/updateTheUserData", user.updateTheUserData)
  .get("/getAllUserData", user.getAllUserData)
  .post("/deleteTheUserData", user.deleteTheUserData);

module.exports = routers;
