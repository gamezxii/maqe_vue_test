<template>
  <div
    id="forum-post"
    :class="{ 'forum-post': true, 'forum-post-even': index % 2 === 1 }"
  >
    <div class="post-header">
      <img class="avatar" :src="author.avatar_url" :alt="author.name" />
      <div class="post-author">{{ author.name }}</div>

      <span class="post-at">post on {{ $formatDate(created_at) }}</span>
    </div>
    <div class="post-content-wrapper">
      <div>
        <img class="post-image" :src="image_url" :alt="title" />
      </div>
      <div>
        <div class="post-title">{{ title }}</div>
        <div class="post-content">{{ body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";

export default {
  name: "ForumPost",
  props: {
    index: Number,
    author: Object,
    title: String,
    image_url: String,
    body: String,
    created_at: String,
  },
};
</script>

<style>
@import "../assets/post.css";
</style>
