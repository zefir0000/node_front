<template>
    <div>

        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" />
        </head>

        <Header />
          

        <template>
            <div class="productList" @click="clear">
                <PostList :posts="products" />
            </div>
            <div class="header">
                <img src="/troll.jpg" class="logo"/>

            </div>
            <section class="search">
                <center>
                    <div class="search">
                      
                        <form class="search__form" action="">
                                                  <a href="/" class="active">Home</a>

                            <input class="search__input" placeholder="What games you want buy" type="text" name="name" v-model="queryfinal" v-on:keyup="keymonitor">
                            <!-- <select name="currency">
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
	        </select>
        <button class="btn__search" >SEARCH</button> -->
                            <button class="btn__search" @click="clear">X</button>
                        </form>

    
                    </div>
                </center>
            </section>

            <div class="row">
                <div class="main" id="main">
                    <body class="home">
    </body>
    <nuxt/>


                </div>
                <div class="side">
                    <div class="image" :style="{ backgroundImage: 'url(' + loadedMem + ')'}"></div>

                    <h3>Top 10</h3>
                    <p>
                        <PostList :posts="loadedPosts" />
                    </p>
                </div>
            </div>

            <div class="footer">
                <h2>Footer</h2>
            </div>
            </body>
        </template>
    </div>
</template>

<script>
import News from "@/components/News/NewsList";
import PostList from "@/components/Posts/PostList";

import axios from "axios";

var products;
var queryfinal;
export default {
  components: {
    PostList,
    News
  },
  computed: {
    
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
    loadedNews() {
      return this.$store.getters.loadedNews;
    },
    loadedMem() {
      let baseurl = 'http://localhost:8080/';
      let imageurl = baseurl + this.$store.getters.loadedMem.patchFile
      return imageurl;
    }
  },
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
    },
    clear() {
      this.products = [];
      return products
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

/* Style the body */
.logo {
  float: right;
  padding-top: 10px;
  padding-right: 10px;
  width:170px;

}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

/* Header/logo Title */
.header {
  height: 200px;
  padding: 5px;
  text-align: center;
  background: gray;
  color: whitesmoke;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

/* Sticky navbar - toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). The sticky value is not supported in IE or Edge 15 and earlier versions. However, for these versions the navbar will inherit default position */
.search {
  overflow: hidden;
  background-color: #333;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Active/current link */
.navbar a.active {
  background-color: #666;
  color: white;
}

/* Column container */
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: slategrey;
  padding: 20px;
}

/* Main column */
.main {
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: grey;
  padding: 20px;
}
.productList {
  position: absolute;
  width: 50%;
  top: 253px;
  right:27%;
  left:23%;
}

/* image, just for this example */
.image {
  background-color: #666;
  background-position: center;
  background-size: cover;
  height: 400px;
  padding: 10px;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
.btn__search {
	-moz-box-shadow:inset 0px 0px 0px 0px #fce2c1;
	-webkit-box-shadow:inset 0px 0px 0px 0px #fce2c1;
	box-shadow:inset 0px 0px 0px 0px #fce2c1;
	background:-moz-linear-gradient( center top, #ffc477 5%, #fb9e25 100% );
	background-color: red;
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
	text-indent:0;
	border:2px solid #eeb44f;
	display:inline-block;
	color: black;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	font-style:normal;
	height:51px;
	line-height:51px;
	width:51px;
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
.search__input { transition: .2s all ease-in-out; width: 50%; border: 3px solid grey; padding: 5px; font-size: 14px; font-weight: 500; text-transform: none; font-family: 'Montserrat', sans-serif; }

</style>

