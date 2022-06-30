const qs = require("query-string");
const Mock=require("mockjs");
const result1 = Mock.mock({
    code: 0,
    msg: "",
    data: {
      id: "@guid",
      nickname: "@cname",
      content: "@cparagraph(1, 10)",
      createDate: Date.now(),
      "avatar|1": [
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
      ],
    },
  });
const result2 = Mock.mock(function(options) {
    const query = qs.parse(options);
    return Mock.mock({
      code: 0,
      msg: "",
      data: {
        total: 52,
        [`rows|${query.limit || 10}`]: [
          {
            id: "@guid",
            nickname: "@cname",
            content: "@cparagraph(1, 10)",
            createDate: Date.now(),
            "avatar|1": [
              "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
              "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
              "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
              "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
            ],
          },
        ],
      },
    });
  });
module.exports = { result1, result2 };
