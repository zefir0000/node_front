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
.product-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>

