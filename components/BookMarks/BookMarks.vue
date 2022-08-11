<template>
  <div>BookMarks</div>
  <div class="marks-card--wrapper">
    <div
      class="marks-card--content"
      v-for="(item, index) in bookmarks"
      :key="index"
    >
      <div>{{ item.category }}</div>
      <BookMarksItem :marks="item.marks"></BookMarksItem>
    </div>
  </div>
</template>

<script setup>
import bookmarks from "../../bookmarks.json";
import BookMarksItem from "./BookMarksItem.vue";
</script>

<style lang="scss" scoped></style>
