<template>
  <div>
    <div class="news-view">
    <article class = "view">
      <h1 class="title"> {{ news.title }}</h1>
        <hr>
        <div class="news-thumbnail" :style="{ backgroundImage: 'url(' + news.imageLink + ')'}"/>
        <hr>
          <button @click="like" class="btn_like"><img class="like" src="/ikons/Like.png" />{{ news.likes }}</button>
          <button @click="unLike" class="btn_like"><img class="like" src="/ikons/unlike.png" />{{ news.unlikes }}</button>

        fb twit inst google 
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
var likes;
var unlikes;

export default {
  components: {
    News
  },
  methods: {
    like() {
      likes = (++this.news.likes )
      axios.post('http://localhost:8080/addLike/' + this.news.newsId, { likes })
        .catch(e => context.error(e))
    },
    unLike() {
      unlikes = (++this.news.unlikes )
      axios.post('http://localhost:8080/addUnlike/' + this.news.newsId, { unlikes })
         .catch(e => context.error(e))
    }
  },
  
    asyncData(context) {
      return axios.get('http://localhost:8080/getNewsById/'+ context.route.params.newsId)
        .then(res => {
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
.like {
  padding-right: 5px;
  font-size: 28px;
  padding-top: 4px;
  height: 30px;
}
.btn_like {
  margin-left: 10px;
  font-size:20px;
  font-weight: bold
}
</style>