<template>
  <div class="marks-card--wrapper">
    <div
      class="marks-card--content"
      v-for="(item, index) in props.marks"
      :key="index"
      @click="openMarks(item.href)"
    >
      <img class="web-logo" :src="generateSrc(item.imgSrc)" alt="" />
      <div class="name" @click="openMarks(item.href)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  marks: {
    type: Object,
    required: true,
    default: () => [],
  },
});

const GET_LOGP_URL = "https://api.iowen.cn/favicon/";
const PNG_SUFFIX = ".png";
// const marks = [
//   {
//     name: "Chrome 调试",
//     link: "https://juejin.cn/book/6844733783166418958/section/6844733783187390477",
//     imgSrc: "juejin.cn",
//   },
//   {
//     name: "HTML 标准",
//     link: "https://html.spec.whatwg.org/",
//     imgSrc: "html.spec.whatwg.org",
//   },
//   {
//     name: "MDN 资源网",
//     link: "https://developer.mozilla.org/zh-CN/",
//     imgSrc: "developer.mozilla.org",
//   },
// ];

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
  flex-wrap: wrap;
}

.marks-card--content {
  width: 210px;
  height: 280px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.web-logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50px;
}

.name {
  margin: 0px 12px;
  position: absolute;
  top: 120px;
}
</style>
