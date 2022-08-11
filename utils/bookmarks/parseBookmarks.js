const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
var minify = require("html-minifier").minify;

function getContent() {
  const origin = fs
    .readFileSync(path.resolve(__dirname, "./bookmarks.html"))
    .toString();
  return minify(origin, {
    collapseWhitespace: true, // uglify html 文件
    removeEmptyElements: true, // 移出空白 p 标签
  });
}

const bookmarks = getContent();
const $ = cheerio.load(bookmarks);

function getTargetDt() {
  const outerDl = $("dl").html();
  const allH3Tags = $(outerDl).find("h3");
  let targetDlTag;
  allH3Tags.each(function (i, el) {
    const text = $(this).text();
    if (text.includes("JTP-FE Bookmar")) {
      targetDlTag = $(this).next();
      return false;
    }
  });
  return targetDlTag.children();
}

const targetDtTag = getTargetDt();

function generateMarkItems(targetDtTag) {
  const itemsList = [];
  targetDtTag.map(function (i, el) {
    const children = $(el).children();
    if (children.length > 0) {
      itemsList.push({
        name: $(children[0]).text(),
        href: $(children[0]).attr("href"),
        imgSrc: "juejin.cn",
      });
    }
  });
  return itemsList;
}

function generateMarks(targetDtTag) {
  const bookmarkList = [];
  targetDtTag.map(function (i, el) {
    const children = $(el).children();
    if (children.length > 0) {
      bookmarkList.push({
        category: $(children[0]).text(),
        marks: generateMarkItems($(children[1]).children()),
      });
    }
  });
  return bookmarkList;
}

function writeFile() {
  const myMarks = generateMarks(targetDtTag);
  const data = JSON.stringify(myMarks, null, 2);
  try {
    fs.writeFileSync("bookmarks.json", data);
  } catch (error) {
    console.log(error);
  }
}

// todo 生成 imgSrc
writeFile();
