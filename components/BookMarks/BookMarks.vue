<template>
  <div class="wrapper">
    <div class="marks-title">BookMarks</div>
    <div
      class="marks-category--wrapper"
      v-for="(item, index) in bookmarks"
      :key="index"
    >
      <div class="marks-category">{{ item.category }}</div>
      <BookMarksItem :marks="item.marks"></BookMarksItem>
    </div>
  </div>
</template>

<script setup>
import bookmarks from "../../bookmarks.json";
import BookMarksItem from "./BookMarksItem.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
}
.marks-title {
  font-size: 32px;
  margin-bottom: 16px;
}

.marks-category--wrapper {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px dashed #b1acb3;
}
.marks-category {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
