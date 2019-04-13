<template>
<div>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>

  <body>
    <div v-on:mouseleave="categoryClose()">
      <div class="tab">
        <button class="tablinks" v-on:mouseover="openCategory('gaming')">Gaming</button>
        <button class="tablinks" v-on:mouseover="openCategory('merchandise')">Merchandise</button>
        <button class="tablinks" v-on:mouseover="openCategory('electronics')">Electronics</button>
        <button class="tablinks" v-on:mouseover="openCategory('giftcards')">Giftcards</button>
        <button class="tablinks" v-on:mouseover="openCategory('subscriptions')">Subscriptions</button>
        <button class="tablinks" v-on:mouseover="openCategory('more')">More</button>
        <hr>
      </div>

      <div id="gaming" class="tabcontent">
        <h3>Gaming</h3>
      </div>
      <div id="merchandise" class="tabcontent">
        <h3>merchandise</h3>
      </div>
      <div id="electronics" class="tabcontent">
        <h3>electronics</h3>
      </div>
      <div id="giftcards" class="tabcontent">
        <h3>giftcards</h3>
      </div>
      <div id="subscriptions" class="tabcontent">
        <h3>subscriptions</h3>
      </div>

      <div id="more" class="tabcontent">
        <h3>more</h3>
      </div>
    </div>
  </body>
</div>
</template>

<script>
var category;
var i, tabcontent, tablinks;

export default {
  methods: {
    openCategory(categoryName) {
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      if (category != categoryName) {
        document.getElementById(categoryName).style.display = "block";
        category = categoryName;
      }
    },
    categoryClose() {
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      category = null;
    }
  }
};
</script>

<style>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 2px 6px gray ;
  -moz-box-shadow: 0px 2px 6px gray ;
  box-shadow: 0px 2px 6px gray ;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 2px 16px;
  transition: 0.3s;
  font-family: "Teko", sans-serif ;
  font-size: 24px;
  color: #748298;
  text-transform: uppercase;
}

/* Change background color of buttons on hover */
.tab button:hover {
      color: #F28608;
}

/* Create an active/current tablink class */
.tab button.active { 
  background-color: #ffffff;
}

/* Style the tab content */
.tabcontent {
  display: none;
  position: fixed;
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  font-family: "Teko", sans-serif ;
  font-size: 18px;
  color: #A4B0C1;
  text-transform: capitalize;
}
</style>
   
