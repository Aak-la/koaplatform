const { verifyToken } = require("../utils/utils");

module.exports = function () {
  return async (ctx, next) => {
    let { userInfo } = await verifyToken(ctx.request.header.authorization);
    const url = ["/api/user/login", "/api/user/register"];
    if (url.includes(ctx.request.url)) {
      await next();
    } else {
      if (userInfo) {
        await next();
      } else {
        ctx.body = {
          state: "400",
          msg: "请登录账号",
        };
      }
    }
  };
};
