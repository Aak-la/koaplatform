const order = require("../../model/order");
module.exports = {
    add: async (ctx) => {
        const { pragma } = ctx.request.body;
        console.log(pragma);
        const res = await order.create(pragma);
        ctx.body = {
            state: 200,
            msg: "添加成功",
        };
    },
    get: async (ctx) => {
        let res = await order.findAll();
        ctx.body = {
            state: 200,
            msg: "获取成功",
            res,
        };
    },
    delete: async (ctx) => {
        let id = ctx.params.id;
        console.log(id);
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
}