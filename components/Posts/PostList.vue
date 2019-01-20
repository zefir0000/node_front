<template>
  <section class="product-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.productBaseId"
      :thumbnail="post.image"
      :title="post.title"
      :price="post.price"
      :brand="post.platform"
      :availability="post.availability"
      :currency="post.currency"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
.product-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>

