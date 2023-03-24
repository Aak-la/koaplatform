const { verifyToken } = require("../utils/utils");

module.exports = function () {
  return async (ctx, next) => {
    /* let { userInfo } = await verifyToken(ctx.request.header.authorization);
    const url = ["/api/user/getAllUserData"];
    console.log(ctx.url == url);
    if (userInfo) {
     
    } else {
      ctx.body = {
        state: "400",
        msg: "请登录账号",
      };
    } */
    await next();
  };
};
