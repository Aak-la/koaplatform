const path = require("path");
const fs = require('fs')
//http://localhost:8080/images/ca79715e027f6a57e2e394e00.jpg
module.exports = {
  upload: async (ctx) => {
    let imgList = []
    const file = ctx.request.files;
    try {
      if (file.length == 0) {
        ctx.body = {
          state: 400,
        };
      } else {
        for (const item of Object.values(file)) {
          imgList.push(`${ctx.origin}` + "/images/" + item.newFilename)
        }
        let data = JSON.stringify(imgList)
        ctx.body = {
          state: 200,
          data
        };
      }

    } catch (error) {
      ctx.body = {
        state: 400,
      };
    }

  },
};
