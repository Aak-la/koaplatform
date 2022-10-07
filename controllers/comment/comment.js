const comment = require("../../model/comment");

module.exports = {
  add: async (ctx) => {
    if (ctx.headers && ctx.headers.authorization === undefined) {
      ctx.body = {
        status: 401,
        msg: "无效token，没有访问权限",
      };
    } else {
      let { params } = ctx.request.body;
      let result = await comment.create(params);
      if (result) {
        ctx.body = {
          status: "success",
          msg: "添加评论成功",
        };
      } else {
        ctx.body = {
          status: "error",
          msg: "评论失败",
        };
      }
    }
  },
  get: async (ctx) => {
    let { id } = ctx.params;
    const data = await comment.findAll({ where: { blogId: id } });
    if (data.length > 0) {
      ctx.body = {
        data,
      };
    } else {
      ctx.body = {
        status: "error",
        msg: "获取失败",
      };
    }
  },
};
