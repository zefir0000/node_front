<template>
  <section class="product-list">
    <ProductRelatedPreview
      v-for="productRelated in productsRelated"
      :key="productRelated.id"
      :id="productRelated.productVariantId"
      :title="productRelated.title"
      :price="productRelated.price"
      :link="productRelated.link"
      :availability="productRelated.availability"
      :currency="productRelated.currency"
      :shop="productRelated.shop"
      :TPraiting="productRelated.TPraiting"
      :TPreviewCount="productRelated.TPreviewCount"
    />
  </section>
</template>

<script>
import ProductRelatedPreview from "@/components/ProductRelated/ProductRelatedPreview";

export default {
  components: {
    ProductRelatedPreview
  },
  props: {
    productsRelated: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>

