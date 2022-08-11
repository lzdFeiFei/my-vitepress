const fs = require("fs");
const path = require("path");
var minify = require("html-minifier").minify;
const cheerio = require("cheerio");

const originBookmarks = fs
  .readFileSync(path.resolve(__dirname, "./bookmarks.html"))
  .toString();

var bookmarks = minify(originBookmarks, {
  collapseWhitespace: true, // uglify html 文件
  removeEmptyElements: true, // 移出空白 p 标签
});

const $ = cheerio.load(bookmarks);

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

const newMarksItem = () => {
  return {
    link: "",
    name: "",
  };
};

const newMarksCategory = () => {
  return {
    marks: "",
    category: "",
  };
};

const targetDtTag = targetDlTag.children();
// const myDts = targetDtTag.map(function (i, el) {
//   const children = $(el).children();
//   if (children.length > 0) {
//     const category = $(children[0]).text();
//     if(category === undefined){

//     }else{

//     }
//     console.log(category);
//   }
// });

function generateMarkItems(targetDtTag) {
  const itemsList = [];
  targetDtTag.map(function (i, el) {
    const children = $(el).children();
    if (children.length > 0) {
      const name = $(children[0]).text();
      const href = $(children[0]).attr("href");
      const markItem = newMarksItem();
      markItem.link = href;
      markItem.name = name;
      itemsList.push(markItem);
    }
  });
  return itemsList;
}

function generateMarks(targetDtTag) {
  const bookmarkList = [];
  targetDtTag.map(function (i, el) {
    const children = $(el).children();
    if (children.length > 0) {
      const category = $(children[0]).text();
      const markCategory = newMarksCategory();
      markCategory.category = category;
      markCategory.marks = generateMarkItems($(children[1]).children());
      bookmarkList.push(markCategory);
    }
  });
  return bookmarkList;
}

const myMarks = generateMarks(targetDtTag);
console.log(myMarks);

// console.log(myDts);
