<template>
  <div class="App">
    <div class="container">
      <div className="title">MAQE Forum</div>
      <div className="current-timezone">
        Your Current Timezone is: {{ userTimezone }}
      </div>
      <div v-for="(post, index) in posts" :key="post.id">
        <ForumPost
          :index="index"
          :author="post.author"
          :title="post.title"
          :image_url="post.image_url"
          :body="post.body"
          :created_at="post.created_at"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import data_posts from "./jsons/posts";
import data_authors from "./jsons/authors";
import ForumPost from "./components/Post.vue";

export default {
  name: "App",
  components: {
    ForumPost,
  },
  setup() {
    const posts = ref([]);
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    onMounted(() => {
      const authorsObject = data_authors.reduce((acc, author) => {
        acc[author.id] = author;
        return acc;
      }, {});

      const mapping_authors_post = data_posts.map((post) => ({
        ...post,
        author: authorsObject[post.author_id],
      }));

      posts.value = mapping_authors_post;
    });
    return { posts, userTimezone };
  },
};
</script>

<style scoped>
@import "./assets/main.css";
</style>
