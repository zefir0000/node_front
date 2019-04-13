<template>
  <section class="product-list">
    <GameListPreview
      v-for="game in games"
      :key="game.id"
      :id="game.productBaseId"
      :thumbnail="game.image"
      :title="game.title"
      :price="game.price"
      :brand="game.platform"
      :availability="game.availability"
      :currency="game.currency"
    />
  </section>
</template>

<script>
import GameListPreview from "@/components/GamesList/GameListPreview";

export default {
  components: {
    GameListPreview
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

