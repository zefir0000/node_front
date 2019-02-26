<template>
  <nuxt-link :to="postLink" class="news-view" >
    <article class = "view">
      <h1 class="title"> {{ title }}</h1>
        <hr>
        <div class="news-thumbnail" :style="{ backgroundImage: 'url(' + imageLink + ')'}"/>
        <hr>
        <button class="btn_like"><img class="like" src="/icons/Like.png" />{{ likes }}</button>
        <button class="btn_like"><img class="like" src="/icons/unlike.png" />{{ unlikes }}</button>
        fb twit inst google 
        <br><br>
        <!-- <div class="content" v-html="news"></div> -->
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewsView",
  
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: false
    },
    news: {
      type: String,
      required: true
    },
    updatedDate: {
      type: String,
      required: false
    },
    likes: {
      type: Number,
      required: false
    },
    unlikes: {
      type: Number,
      required: false
    }
  },
  computed: {
    postLink() {
      return "/news/" + this.id;
    }
  }
};
</script>


<style scoped>

.title {
  font-size: 24px;
  color: black;
  text-align: center;
}
.content {
  color: black;
  font-size: 12px;
  text-align: justify;
  margin: 20px;  }

.view {
  /* height:410px; */
  overflow:hidden;
}

.news-view {
  text-decoration: none;
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
