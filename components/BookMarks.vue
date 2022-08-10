<template>
  <div>BookMarks</div>
  <div class="marks-card--wrapper">
    <div
      class="marks-card--content"
      v-for="(item, index) in marks"
      :key="index"
      @click="openMarks(item.link)"
    >
      <img class="web-logo" :src="generateSrc(item.imgSrc)" alt="" />
      <div @click="openMarks(item.link)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
const GET_LOGP_URL = "https://api.iowen.cn/favicon/";
const PNG_SUFFIX = ".png";
const marks = [
  {
    name: "Chrome 调试",
    link: "https://juejin.cn/book/6844733783166418958/section/6844733783187390477",
    imgSrc: "juejin.cn",
  },
  {
    name: "HTML 标准",
    link: "https://html.spec.whatwg.org/",
    imgSrc: "html.spec.whatwg.org",
  },
  {
    name: "MDN 资源网",
    link: "https://developer.mozilla.org/zh-CN/",
    imgSrc: "developer.mozilla.org",
  },
];

const generateSrc = (src) => {
  return `${GET_LOGP_URL}${src}${PNG_SUFFIX}`;
};
const openMarks = (link) => {
  window.open(link);
};
</script>

<style lang="scss" scoped>
.marks-card--wrapper {
  display: flex;
}

.marks-card--content {
  width: 200px;
  height: 100px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.web-logo {
  width: 30px;
  height: 30px;
}
</style>
