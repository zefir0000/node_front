<template>
  <section class="user-list">
    <UsersListPreview
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :coins="user.coins"
      :createdDate="user.createdDate"
    />
  </section>
</template>

<script>
import UsersListPreview from "@/components/Users/UsersListPreview";

export default {
  components: {
    UsersListPreview
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>

