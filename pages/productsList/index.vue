<template>
  <div>
    <div>
    <section class="search">
    <h1 class="search__header"></h1>
    <form class="search__form" action="asyncData" method="GET" role="search" type="search"> 
    <input class="search__input" placeholder="What games you want buy" type="text" name="name" v-model="name"/>
        <div class="actions_inline">
          </div>
     
    <PostList :posts="products" />
     </form> 
</section>
  </div>
    <nuxt-child />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

import axios from 'axios'
export default {
  components: {
    PostList
  },
    asyncData(context) {
      return axios.get('http://localhost:8080/getProd?name=')
        .then(res => {
          return {
            products: res.data
          }
        })
        .catch(e => context.error(e))
    },
    props: {
    posts: {
      type: Array,
      required: true
    }
  },

  layout: 'product'

};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 80px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
.post-thumbnail {
  width: 100%;
  height: 100px;
  background-position: center;
  background-size: cover;
}

</style>