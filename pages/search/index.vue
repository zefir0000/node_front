<template>
  <div>
    <div>
    <section class="search">
    <div>
      <center>
    <form class="search__form" action="" method="GET">
          <input
            class="search__input"
            placeholder="What games you want buy"
            type="text"
            name="name"
            v-model="queryfinal"
            v-on:keyup="keymonitor"
          >
          <select name="currency">
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
	        </select>
        <button class="btn__search" >SEARCH</button>
        </form>
        </center>
        </div>
            <PostList :posts="products" />

  </section>
  </div>
    <nuxt-child />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import axios from 'axios';
var products;
var queryfinal;

export default {
  data() {
    return {
      products: [],
      queryfinal: ""
      }
    },
  methods: {
  	 async keymonitor(event) {

      let { data } = await axios.get("http://localhost:8080/getProductBase?name=" + this.queryfinal + '&currency=USD')

      this.products = data;   

      return { products: data };       
    }
  },
  components: {
    PostList
  }
  }
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

.btn__search {
	-moz-box-shadow:inset 0px 0px 0px 0px #fce2c1;
	-webkit-box-shadow:inset 0px 0px 0px 0px #fce2c1;
	box-shadow:inset 0px 0px 0px 0px #fce2c1;
	background:-moz-linear-gradient( center top, #ffc477 5%, #fb9e25 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25');
	background-color:#ffc477;
	-webkit-border-top-left-radius:20px;
	-moz-border-radius-topleft:20px;
	border-top-left-radius:20px;
	-webkit-border-top-right-radius:20px;
	-moz-border-radius-topright:20px;
	border-top-right-radius:20px;
	-webkit-border-bottom-right-radius:20px;
	-moz-border-radius-bottomright:20px;
	border-bottom-right-radius:20px;
	-webkit-border-bottom-left-radius:20px;
	-moz-border-radius-bottomleft:20px;
	border-bottom-left-radius:20px;
	text-indent:0;
	border:2px solid #eeb44f;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	font-style:normal;
	height:51px;
	line-height:51px;
	width:86px;
	text-decoration:none;
	text-align:center;
	text-shadow:1px 1px 0px #cc9f52;
}
.btn__search:hover {
	background:-moz-linear-gradient( center top, #fb9e25 5%, #ffc477 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fb9e25', endColorstr='#ffc477');
	background-color:#fb9e25;
}.btn__search:active {
	position:relative;
	top:1px;
}
.search__input { transition: .2s all ease-in-out; width: 50%; border: 3px solid grey; padding: 10px; font-size: 16px; font-weight: 500; text-transform: none; font-family: 'Montserrat', sans-serif; }


</style>
