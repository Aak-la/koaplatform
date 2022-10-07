module.exports = function () {
  return async (ctx, next) => {
    await next();
    /*  const url = ctx.path;
    console.log(url);
    const URL = [
      "/api/setting",
      "/api/banner",
      "/api/blog/list",
      "/api/blog/type",
      "/api/project",
      "/api/about",
      "api/backgroundManagement",
    ];
    let result = URL.includes(url);
    if (true) {
      await next();
    } else {
      if (ctx.headers && ctx.headers.authorization === undefined) {
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
            ctx.body = {
              status: 401,
              msg: "未登录无权评论",
            };
          }
        } catch (err) {
          if (err.message === "jwt expired") {
            ctx.body = {
              code: 50014,
              msg: "token 过期",
            };
          } else if (err.message === "jwt malformed") {
            ctx.body = {
              code: 50008,
              msg: "token 无效",
            };
          } else {
            ctx.body = {
              code: 500,
              msg: err.message,
            };
          }
        }
      }
    } */
  };
};
