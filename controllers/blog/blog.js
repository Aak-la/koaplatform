const blog = require("../../model/blogList");
const classification = require("../../model/classification");

module.exports = {
  types: async (ctx) => {
    const res = await blog.findAll();
    let getGroup = (data) => {
      let groups = {};
      data.forEach((c) => {
        let value = c.category;
        groups[value] = groups[value] || [];
        groups[value].push(c);
      });
      return groups;
    };
    let getGroups = getGroup(res);
    console.log(getGroups);
    const data = await classification.findAll();
    ctx.body = {
      data,
    };
  },
  list: async (ctx) => {
    const data = await blog.findAll();
    ctx.body = {
      data,
      total: data.length,
    };
  },
  add: async (ctx) => {
    const data = await blog.create({
      title: "聊聊什么是CommonJs和Es Module及它们的区别",
      description:
        "我们都知道在早期JavaScript模块这一概念，都是通过script标签引入js文件代码。当然这写基本简单需求没有什么问题，但当我们的项目越来越庞大时，我们引入的js文件就会越多，这时就会出现以下问题：",
      category: "模块化",
    });
    if (data) {
      ctx.body = {
        data: {
          msg: "添加成功",
        },
      };
    }
  },
  classifications: async (ctx) => {
    const data = await blog.create({
      class: "",
      total: "",
    });
    if (data) {
      ctx.body = {
        data: {
          msg: "添加成功",
        },
      };
    }
  },
  getBlog: async (ctx) => {
    const data = await blog.findAll();
    let { id } = ctx.params;
    let res = data[--id];
    ctx.body = {
      data: res,
    };
  },
};
