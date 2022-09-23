const user = require("../../model/user");
const jwt = require("jsonwebtoken");

module.exports = {
  logIn: async (ctx) => {
    let { name, password } = ctx.request.body;
    let data = await user.findAll({
      where: {
        username: name,
      },
    });
    if (data.length !== 0 && data[0].password === password) {
      let name = data[0].name;
      let token = jwt.sign({ name }, "Bear", {
        expiresIn: 1440,
      });
      ctx.body = {
        data: {
          code: 200,
          msg: "登录成功",
          type: "success",
          token: token,
        },
      };
    } else {
      ctx.body = {
        data: {
          code: 500,
          msg: "未注册账号或密码不正确",
        },
      };
    }
  },
  register: async (ctx) => {
    let { name, password } = ctx.request.body;
    let data = await user.findAll({
      where: {
        username: name,
      },
    });
    if (data.length !== 0) {
      ctx.body = {
        data: {
          code: 200,
          msg: "该账号已被注册",
        },
      };
    } else {
      await user.create({ username: name, password: password }).then(
        () => {
          ctx.body = {
            data: {
              code: 200,
              msg: "账号注册成功",
              type: "success",
            },
          };
        },
        () => {
          ctx.body = {
            data: {
              code: 200,
              msg: "账号注册失败",
            },
          };
        }
      );
    }
  },
};
