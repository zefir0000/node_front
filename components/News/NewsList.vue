<template>
  <section class="news-list">
    <NewsView
      v-for="news in newss"
      :key="news.id"
      :id="news.newsId"
      :imageLink="news.imageLink"
      :title="news.title"
      :news="news.news"
      :likes="news.likes"
      :unlikes="news.unlikes"
    />
  </section>
</template>

<script>
import NewsView from "@/components/News/NewsView";

export default {
  components: {
    NewsView
  },
  props: {
    newss: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
.news-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>

