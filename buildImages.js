const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  await imagemin(["src/static/images*.{jpg,png}"], "build/images", {
    use: [imageminWebp({ quality: 50 })]
  });
  console.log("Images optimized");
})();