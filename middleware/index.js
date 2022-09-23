const { checkToken } = require("../utils/toolFn");

module.exports = function () {
  return async (ctx, next) => {
    const url = ctx.path;
    const URL = [
      "/api/setting",
      "/api/banner",
      "/api/blog/list",
      "/api/blog/type",
      "/api/project",
      "/api/about",
    ];
    let result = URL.includes(url);
    if (result) {
      await next();
    } else {
      if (ctx.headers && ctx.headers.authorization === undefined) {
        ctx.status = 401;
        ctx.body = {
          status: 401,
          msg: "无效token，没有访问权限",
        };
      } else {
        try {
          const token = ctx.headers.authorization;
          const payload = await checkToken(token);
          if (payload) {
            await next();
          } else {
            ctx.status = 401;
            ctx.body = {
              status: 401,
              msg: "未登录无权评论",
            };
          }
        } catch (err) {
          if (err.message === "jwt expired") {
            ctx.status = 50014;
            ctx.body = {
              code: 50014,
              msg: "token 过期",
            };
          } else if (err.message === "jwt malformed") {
            ctx.status = 50008;
            ctx.body = {
              code: 50008,
              msg: "token 无效",
            };
          } else {
            ctx.status = 500;
            ctx.body = {
              code: 500,
              msg: err.message,
            };
          }
        }
      }
    }
  };
};
