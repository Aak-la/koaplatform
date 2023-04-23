const user = require("../../model/user");
const { verifyPwd, encrypted, createToken } = require("../../utils/utils");

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
    let res = await user.findAll({
      where: {
        username: name,
      },
    });
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
          username: res[0].dataValues.username,
          permissions: res[0].dataValues.permissions,
        };
      } else {
        ctx.body = {
          status: 400,
          msg: "密码错误",
          type: "error",
        };
      }
    } else {
      ctx.body = {
        status: 400,
        msg: "请检查账户名",
        type: "warning",
      };
    }
  },
  register: async (ctx) => {
    let { params } = ctx.request.body;
    const res = await user.findAll({ where: { username: params.username } });
    if (res.length != 0) {
      ctx.body = {
        status: 202,
        msg: "当前用户名已存在",
        type: "warning",
      };
    } else {
      params.password = await encrypted(params.password);
      let result = await user.create(params);
      if (result) {
        ctx.body = {
          status: 200,
          msg: "注册成功",
        };
      } else {
        ctx.body = {
          status: 403,
          msg: "注册失败",
          type: "warning",
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
  updateTheUserData: async (ctx) => {
    const res = await user.findOne({ where: { id: ctx.request.body.id } });
    if (res) {
      const callback = res.update(
        {
          username: ctx.request.body.name,
          phone: ctx.request.body.phone,
          email: ctx.request.body.email,
        },
        { where: { id: ctx.request.body.id } }
      );
      ctx.body = {
        status: "success",
        msg: "修改成功",
      };
    } else {
      ctx.body = {
        status: "success",
        msg: "修改失败",
      };
    }
  },
  getAllUserData: async (ctx) => {
    const res = await user.findAll();
    let data = [];
    res.map((v) => {
      data.push(
        Object.assign(
          {},
          {
            avatar: v.avatar,
            email: v.email,
            id: v.id,
            username: v.username,
            phone: v.phone,
            permissions: v.permissions
          }
        )
      );
    });
    ctx.body = {
      data,
    };
  },
  deleteTheUserData: async (ctx) => {
    const res = await user.findOne({ where: { id: ctx.request.body.id } });
    if (res) {
      const callback = res.destroy({ where: { id: ctx.request.body.id } });
      if (callback) {
        ctx.body = {
          status: "success",
          msg: "删除成功",
        };
      }
    } else {
      ctx.body = {
        status: "success",
        msg: "删除失败",
      };
    }
  },
};
