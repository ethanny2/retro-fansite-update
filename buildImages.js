const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  await imagemin(["./src/static/images*.{jpg,png}"], "./src/static/images", {
    use: [imageminWebp({ quality: 50 })]
  });
  console.log("Images optimized");
})();
