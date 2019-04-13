<template>
  <section class="product-list">
    <TopListPreview
      v-for="game in games"
      :key="game.id"
      :id="game.productBaseId"
      :thumbnail="game.image"
      :title="game.title"
      :price="game.price"
      :brand="game.platform"
      :availability="game.availability"
      :currency="game.currency"
      :topTen="game.topTen"
    />
  </section>
</template>

<script>
import TopListPreview from "@/components/TopGames/TopListPreview";

export default {
  components: {
    TopListPreview
  },
  props: {
    games: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

</style>

