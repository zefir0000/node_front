<template>
  <img class="mem" v-bind:src="file">
</template>

<script>
export default {
  props: {
    file: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.mem {
  padding-top: 20px;

  background-position: center;
  background-size: cover;
  width: 360px;
  height: 100%;
  padding-right: 20px;
}
</style>
