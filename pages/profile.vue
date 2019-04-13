<template>
<div class="main">
  <body>
    <div class="profile_left">
      <div class="section_title">My Wallet</div>
      <img src="/icons/gcoin.svg">
      <p id="profile_amount" v-show="user">{{ user.coins }}</p>
      <p>
        <button @click="logout()" id="profile_logout">Logout</button>
      </p>
    </div>
    <div class="profile_center">
      <div class="section_title" v-show="deals">My deals history</div>
      <DealList :deals="deals"/>
    </div>
    <div class="profile_right">
      <div class="profile_details" v-show="user">
        <div class="section_title">Profile details</div>
        <p>Name: {{user.name}}</p>
        <p v-show="user.email">E-mail: {{ user.email }}</p>
        <center>
          <img v-bind:src="user.image" style="width: 200px">
        </center>
        <!-- <img class="mem" v-bind:src="patchMem"> -->
      </div>
    </div>
  </body>
</div>
</template>

<script>
import { getUserDeals } from "../api";
import axios from "axios";

import DealList from "@/components/Deals/DealList";

var deals;
var user;

export default {
  layout: "main",
  components: {
    DealList
  },
  computed: {
    user() {
      user = this.$store.getters.user;
      return this.$store.getters.user;
    }
  },
  methods: {
    async logout() {
      console.log("first step logout");
      this.$store.commit("userData", null);
      this.$store.commit("authUser", false);
      const { data } = await axios.post("/auth/logout");

      this.$router.push("/");
    }
  },

  async asyncData({ store, redirect }) {
    const dealRequest = await getUserDeals(store.getters.user.id);
    return {
      deals: dealRequest
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
#profile_logout {
  color: #f28608;
  font-family: "Teko", sans-serif;
  font-size: 18px;
}
.section_title {
  padding-bottom: 20px;
  color: #748298;
}
.main {
  height: 700px;
  background-color: #edf0f5;
  font-size: 14px;
  color: rgb(100, 115, 140);
}
/* Create three equal columns that floats next to each other */
.profile_left {
  text-align: center;
  float: left;
  width: 25%;
  padding: 10px;
}
.profile_center {
  float: left;
  width: 50%;
  padding: 10px;
}
.profile_right {
  float: left;
  text-align: center;
  width: 25%;
  padding: 10px;
}
.profile_details {
  font-family: "Teko", sans-serif;
  font-size: 20px;
  padding-bottom: 20px;
}

#profile_amount {
  font-family: "Teko", sans-serif;
  font-size: 74px;
  color: #f3006c;
}

/* Clear floats after the columns */
.main:after {
  content: "";
  display: table;
  clear: both;
}
</style>

