var minify = require("html-minifier").minify;
const fs = require("fs");
const path = require("path");

const bookmarks = fs
  .readFileSync(path.resolve(__dirname, "./bookmarks.html"))
  .toString()
  .replace("\n", "");
var result = minify(bookmarks, {
  collapseWhitespace: true,
});
console.log(result);
