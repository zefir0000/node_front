<template>
<div>
  <body>
    <Header/>

    <!-- <Categories/> -->
    <no-ssr>
      <cookie-law theme="blood-orange--rounded"></cookie-law>
    </no-ssr>
  </body>
  <Nuxt/>
</div>
</template>

<script>
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    Header,
    Categories,
    CookieLaw
  }
};
</script>
