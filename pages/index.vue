
<template>
<body>
  <div class="header">
    <h1>TRORLOROORO</h1>
  </div>

  <div class="navbar">
    <a href="#" class="active">Home</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="right">Link</a>
  </div>

  <div class="row">
    <div class="main">
      <News :newss="loadedNews"/>
    </div>
    <div class="side">
      <h2>MEM on this day</h2>
    <div class="image" :style="{ backgroundImage: 'url(' + loadedMem + ')'}"></div>

      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Top 10</h3>
      <p>
        <PostList :posts="loadedPosts"/>
      </p>
    </div>
  </div>

  <div class="footer">
    <h2>Footer</h2>
  </div>
</body>
</template>
  

<script>
import News from "@/components/News/NewsList";
import PostList from "@/components/Posts/PostList";

import axios from "axios";

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
      console.log('get', this.$store.getters.loadedMem, 'image', imageurl)
      return imageurl;
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

/* Header/logo Title */
.header {
  height: 80px;
  padding: 10px;
  text-align: center;
  background: gray;
  color: whitesmoke;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

/* Sticky navbar - toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). The sticky value is not supported in IE or Edge 15 and earlier versions. However, for these versions the navbar will inherit default position */
.navbar {
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
</style>

