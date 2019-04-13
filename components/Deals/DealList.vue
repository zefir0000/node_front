<template>
  <section class="deal-list">
    <DealListPreview
      v-for="deal in deals"
      :key="deal.dealId"
            :dealId="deal.dealId"

      :user="deal.user"
      :title="deal.title"
      :price="deal.price"
      :currency="deal.currency"
      :link="deal.link"
      :image="deal.image"
      :upVote="deal.upVote"
      :createdDate="deal.createdDate"
      :updatedDate="deal.updatedDate"
    />
  </section>
</template>

<script>
import DealListPreview from "@/components/Deals/DealListPreview";

export default {
  components: {
    DealListPreview
  },
  props: {
    deals: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
</style>

