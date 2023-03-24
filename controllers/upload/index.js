const path = require("path");
const fse = require("fs-extra");

module.exports = {
  upload: async (ctx) => {
    const { newFilename, filepath, size, type } = ctx.request.files.file;
    let src = `${newFilename}newFileName.png`;
    const dest = path.join(__dirname, "../upload", src);
    await fse.move(filepath, dest);
    ctx.body = {
      src,
      filepath,
      size,
      type,
    };
  },
};
