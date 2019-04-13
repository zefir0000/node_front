<template>
<div>
  <body>
    <Header/>
    <Categories/>
    <div class="main">
      <div class="left">TOP 25 Games</div>
      <div class="center">BEST DEALS</div>
      <div class="right">
        <div class="mems">Mem Of The Day
          <img 
            class="mem"
            src= 'https://starecat.com/content/wp-content/uploads/playing-multiplayer-on-one-screen-creative-split-screen-using-cardboard.jpg' />
        </div>
        <div class="topUser">TOP 10 Users</div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import Header from "@/components/Header";
import Categories from "@/components/Categories";

export default {
  components: {
    Header,
    Categories
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.main {
  background-color: rgb(230, 230, 240);
  font-size: 14px;
  color: rgb(100, 115, 140);
}
/* Create three equal columns that floats next to each other */
.left {
  float: left;
  width: 25%;
  padding: 10px;
}
.center {
  float: left;
  width: 50%;
  padding: 10px;
}
.right {
  float: left;
  width: 25%;
  padding: 10px;
}
.mems {
        padding-bottom: 20px; 

}

.mem {
  padding-top: 20px; 

  background-position: center;
  background-size: cover;
  /* width: 360px; */
  width: 360px;
  height: 100%;
  padding-right: 20px;
}
/* Clear floats after the columns */
.main:after {
  content: "";
  display: table;
  clear: both;
}
</style>

