const Mock = require("mockjs");
const result = Mock.mock( {
    code: 0,
    msg: "",
    data: {
      avatar: "",
      siteTitle: "bearDesign",
      github: "https://github.com/Aak-la",
      qq: "486910173",
      qqQrCode:"",
      weixin: "Eonmatar2",
      weixinQrCode:"",
      mail: "486910173@qq.com",
      icp: "贵19294",
      githubName: "Aak-la",
      favicon: "./../assets/me.png",
    },
  });
module.exports = result;