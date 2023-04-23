const order = require("../../model/order");
module.exports = {
    add: async (ctx) => {
        const { pragma } = ctx.request.body;
        try {
            const res = await order.create(pragma);
            ctx.body = {
                state: 200,
                msg: "添加成功",
            };
        } catch (error) {
            ctx.body = {
                state: 400,
                msg: "添加成功",
            };
        }
    },
    get: async (ctx) => {
        try {
            let res = await order.findAll();
            ctx.body = {
                state: 200,
                msg: "获取成功",
                res,
            };
        } catch (error) {
            ctx.body = {
                state: 400,
                msg: "获取失败",
                res,
            };
        }

    },
    delete: async (ctx) => {
        const { pragma } = ctx.request.body;
        let idArr = JSON.parse(pragma)
        const promises = [];
        try {
            idArr.forEach(async (id) => {
                await order.destroy({
                    where: {
                        id: id
                    }
                });
                promises.push(Promise.resolve(`Promise ${id} resolved`));
            });
            Promise.all(promises)
                .then(() => {
                    ctx.body = {
                        state: 200,
                        msg: "删除成功",
                    };
                })
                .catch((error) => {
                    ctx.body = {
                        state: 500,
                        msg: "删除失败",
                    };
                });
        } catch (error) {
            ctx.body = {
                state: 500,
                msg: "删除失败",
            };
        }
    },
}