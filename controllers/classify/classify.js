const classify = require("../../model/classify");
const goods = require("../goods/goods");

module.exports = {
  add: async (ctx) => {
    try {
      const { pragma } = ctx.request.body;
      let res = await classify.create({ ...pragma });
      ctx.body = {
        state: 200,
        msg: "添加成功",
        res,
      };
    } catch (error) {
      ctx.body = {
        state: 500,
        msg: "操作失败",
      };
    }
  },
  get: async (ctx) => {
    try {
      let res = await classify.findAll();
      ctx.body = {
        res,
        state: 200,
        msg: "查询成功",
      };
    } catch (error) {
      ctx.body = {
        state: 500,
        msg: "操作失败",
      };
    }
  },
  delete: async (ctx) => {
    try {
      const { pragma } = ctx.request.body;
      let res = await classify.destroy({ where: { id: pragma } });
      ctx.body = {
        pragma,
        state: 200,
        msg: "删除成功",
        res,
      };
    } catch (error) {
      ctx.body = {
        res,
        state: 500,
        msg: "操作失败",
      };
    }
  },
};
