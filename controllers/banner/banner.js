module.exports = {
  data: async (ctx) => {
    ctx.body = {
      data: {
        code: 0,
        data: [
          {
            id: "1",
            midImg:
              "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
            bigImg:
              "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
            title: "城市书店",
            description: "时间会慢慢沉淀下那些值得的人",
          },
          {
            id: "2",
            midImg:
              "https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
            bigImg:
              "https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
            title: "凛冬将至",
            description: "人间至味是清欢",
          },
          {
            id: "3",
            midImg:
              "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
            bigImg:
              "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
            title: "深秋",
            description: "星河滚烫，你是人间理想",
          },
        ],
      },
    };
  },
};
