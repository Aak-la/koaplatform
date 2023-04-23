const goods = require("../../model/goods");
module.exports = {
  add: async (ctx) => {
    const { pragma } = ctx.request.body;
    const res = await goods.create({ data: pragma });
    ctx.body = {
      state: 200,
      msg: "添加成功",
    };
  },
  get: async (ctx) => {
    let res = await goods.findAll();
    ctx.body = {
      state: 200,
      msg: "获取成功",
      res,
    };
  },
  update: async (ctx) => {
    const { id } = ctx.request.body;
    const some = await goods.findOne({
      where: {
        id: id,
      },
    });
  },
  delete: async (ctx) => {
    let id = ctx.params.id;
    try {
      const good = await goods.findOne({
        where: {
          id: id
        }
      });
      await good.destroy();
      ctx.body = {
        state: 200,
        msg: "删除成功",
      };
    } catch (error) {
      ctx.body = {
        state: 200,
        msg: "删除失败",
      };
    }
    try {
      await goods.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {

    }
  },
};
