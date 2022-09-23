const comment = require("../../model/comment");

module.exports = {
  add: async (ctx) => {
    let { params } = ctx.request.body;
    await comment
      .create({
        comment: params.content,
        blogId: params.blogId,
      })
      .then(
        () => {
          ctx.body = {
            data: {
              msg: "添加评论成功",
            },
          };
        },
        () => {
          ctx.body = {
            data: {
              msg: "添加失败成功",
            },
          };
        }
      );
  },
  get: async (ctx) => {
    let { id } = ctx.params;

    const data = await comment.findAll({ where: { blogId: id } });
    ctx.body = {
      data,
    };
  },
};
