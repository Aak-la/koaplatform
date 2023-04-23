const path = require("path");
const fse = require("fs-extra");
const fs = require('fs')
const folderPath = __dirname;
module.exports = {
  /*  upload: async (ctx) => {
     const { newFilename, filepath, size, type } = ctx.request.files.file;
 
     let src = `${newFilename.substring(0, 21)}newFileName.png`;
     ifCreate(src)
     function ifCreate(src) {
       fs.readdir(folderPath, async (err, files) => {
         if (err) {
           console.error(err);
           return;
         }
         const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
         const images = files.filter(file => {
           const ext = path.extname(file);
           return imageExtensions.includes(ext);
         });
         if (images.includes(str)) {
           return
         } else {
           const dest = path.join(__dirname, "../upload", src);
           await fse.move(filepath, dest);
           ctx.body = {
             src,
             filepath,
             size,
             type,
           };
         }
       });
 
     }
 
 
   }, */
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
