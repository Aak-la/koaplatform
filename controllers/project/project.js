const project = require("../../model/project");
module.exports = {
  add: async (ctx) => {
    const data = await project.findAll();
    ctx.body = {
      data,
    };
  },
};
