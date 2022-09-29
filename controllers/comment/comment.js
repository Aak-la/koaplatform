const comment = require("../../model/comment");

module.exports = {
  add: async (ctx) => {
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
  },
  get: async (ctx) => {
    let { id } = ctx.params;
    const data = await comment.findAll({ where: { blogId: id } });
    ctx.body = {
      data,
    };
  },
};
