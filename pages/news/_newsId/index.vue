<template>
  <div>
    <div class="news-view">
    <article class = "view">
      <h1 class="title"> {{ news.title }}</h1>
        <hr>
        <div class="news-thumbnail" :style="{ backgroundImage: 'url(' + news.imageLink + ')'}"/>
        <hr>
        fb twit inst google likes {{ news.likes }} unlike {{ news.unlikes }}
        <hr>
        <div class="content" v-html="news.news"></div>
    </article>
  </div>
    <nuxt-child />
  </div>
</template>

<script>
import News from "@/components/News/NewsList";

import axios from 'axios'
export default {
  components: {
    News
  },
  
    asyncData(context) {
      return axios.get('http://localhost:8080/getNewsById/'+ context.route.params.newsId)
        .then(res => {
          console.log(res.data)
          return {
            news: res.data
          }
        })
        .catch(e => context.error(e))
    }
};
</script>

<style scoped>
.title {
  padding-top: 20px;
  color: black;
  text-align: center;
}
.content {
  color: black;
  font-size: 12px;
  text-align: justify;
  margin: 20px;  }

.news-view {
  position: ;
  color: black;
  box-shadow: 0 2px 2px #ccc;
  background-color: #ddd;
  width: 90%;
  -webkit-border-top-left-radius:30px;
	-moz-border-radius-topleft:30px;
	border-top-left-radius:30px;
	-webkit-border-top-right-radius:30px;
	-moz-border-radius-topright:30px;
	border-top-right-radius:30px;
	-webkit-border-bottom-right-radius:30px;
	-moz-border-radius-bottomright:30px;
	border-bottom-right-radius:30px;
	-webkit-border-bottom-left-radius:30px;
	-moz-border-radius-bottomleft:30px;
	border-bottom-left-radius:30px;
}

@media (min-width: 50px) {
  .news-view {
    width: 100%;
    margin: 10px;
  }
}

.news-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.news-content {
  padding: 10px;
}

a:hover .news-content,
a:active .news-content {
  background-color: #ccc;
}
</style>