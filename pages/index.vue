<template>
<div>
  <body>
    <div class="main">
      <div class="left" >
        <div class="section_title">TOP 25 Games</div>
        <TopList :games="topGames"/>
      </div>
      <div class="center" >
        <div class="section_title">BEST DEALS</div>
        <DealList :deals="deals" />
      </div>
      <div class="right">
        <div class="mems" >
          <div class="section_title">Mem Of The Day</div>
          <Mem :file="patchMem"/>
          <!-- <img class="mem" v-bind:src="patchMem"> -->
        </div>
        <div class="topUser">
          <div class="section_title">TOP 10 Users </div>
          <UsersList :users="users"/>
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import { getTopTen, getMems, getDeals, getUsers } from "../api";
import TopList from "@/components/TopGames/TopList";
import Mem from "@/components/Mem";
import DealList from "@/components/Deals/DealList";
import UsersList from "@/components/Users/UsersList";

let topGames
let patchMem
let deals
let users

export default {
  components: {
    TopList,
    Mem,
    DealList,
    UsersList
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged
    }
  },
  async asyncData(context) {
    const topGameRequest = await getTopTen();
    const memRequest = await getMems();
    const dealRequest = await getDeals();
    const usersRequest = await getUsers();

    return {
      topGames: topGameRequest,
      patchMem: memRequest,
      deals: dealRequest,
      users: usersRequest
    };
  },

  layout: "main"
};
</script>

<style>
* {
  box-sizing: border-box;
}
.section_title {
  font-family: "Teko", sans-serif;
  font-size: 20px;
  color: #748298;
}
.main {
  background-color: #edf0f5;
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
/* Clear floats after the columns */
.main:after {
  content: "";
  display: table;
  clear: both;
}
</style>
