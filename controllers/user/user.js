const user = require("../../model/user");

const {
  verifyPwd,
  encrypted,
  createToken,
  verifyToken,
} = require("../../utils/utils");

module.exports = {
  logIn: async (ctx) => {
    let { name, password } = ctx.request.body;
    if (!name || !password) {
      ctx.body = {
        status: "error",
        msg: "用户名与密码不能为空",
      };
      return;
    }
    await user
      .findAll({
        where: {
          username: name,
        },
      })
      .then((res) => {
        if (res.length > 0) {
          const VerifyPwd = res[0].dataValues.password;
          const userInfo = {
            id: res[0].dataValues.id,
            name: res[0].dataValues.username,
            avatar: res[0].dataValues.avatar,
          };
          const flag = verifyPwd(password, VerifyPwd);
          const token = createToken(userInfo);
          if (flag) {
            ctx.body = {
              status: 200,
              msg: "登录成功",
              token: token,
              type: "success",
              avatar: res[0].dataValues.avatar,
            };
          } else {
            ctx.status = 400;
            ctx.body = {
              status: "error",
              msg: "密码错误",
              type: "error",
            };
          }
        } else {
          ctx.body = {
            status: "error",
            msg: "请检查账户名",
            type: "warning",
          };
        }
      });
  },
  register: async (ctx) => {
    let userInfo = ctx.request.body;
    const res = await user.findAll({ where: { username: userInfo.username } });
    if (res.length > 1) {
      ctx.body = {
        status: "error",
        msg: "当前用户名已存在",
      };
    } else {
      userInfo.password = await encrypted(userInfo.password);
      let result = await user.create(userInfo);
      if (result) {
        ctx.body = {
          status: "success",
          msg: "注册成功",
        };
      } else {
        ctx.body = {
          status: "error",
          msg: "注册失败",
        };
      }
    }
  },
  logout: async (ctx) => {
    ctx.body = {
      status: "success",
      msg: "退出成功",
    };
  },
};
