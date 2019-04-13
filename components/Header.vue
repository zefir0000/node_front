<template >
<div @click="clear">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    >
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>

  <header class="header">
    <section class="header_row">
      <div class="productList" @click="clear" v-if="products">
        <GameList :games="products"/>
      </div>

      <div class="header_logo">
        <NuxtLink to="/">
          <img src="/icons/logo.png">
        </NuxtLink>
      </div>
      <div class="header_comment">
        Best Gaming Deals
        <br>
        <p style="text-decoration: underline orange; ">Everyday</p>
      </div>

      <div class="search">
        <form action>
          <input
            class="search_form"
            placeholder=" Search for nice gaming deal.."
            type="text"
            name="name"
            v-model="queryfinal"
            v-on:keyup="keymonitor"
          >
        </form>
      </div>
      <template v-if="$store.state.isLogged ">
        <NuxtLink to="/addDeal">
          <button class="header_deal_button">
            <div style="margin-top:4px;">
              <i style="font-size:24px" class="fas">&#xf055;</i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add deal&nbsp;&nbsp;
            </div>
          </button>
        </NuxtLink>
        <div class="header_wallet_amount">
          <table>
            <tr>
              <td>My wallet:</td>
              <td>
                <img src="/icons/gcoin.svg" id="header_coin_icon">
              </td>
              <td id="header_coins">{{user.coins}}</td>
            </tr>
          </table>
        </div>
        <div class="header_my_amount">
          <NuxtLink to="/profile">
            <button class="header_account_button">
              <div style="margin-top:4px;">
                <i style="font-size:24px" class="fas">&#xf2bd;</i>
                &nbsp;My Account
              </div>
            </button>
          </NuxtLink>
        </div>
      </template>
      <template v-else>
        <NuxtLink to="/addDealLogin">
          <button class="header_deal_button">
            <div style="margin-top:4px;">
              <i style="font-size:24px" class="fas">&#xf055;</i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add deal&nbsp;&nbsp;
            </div>
          </button>
        </NuxtLink>
        <NuxtLink to="/login">
          <button class="header_account_button">
            <div style="margin-top:4px;">
              <i style="font-size:24px" class="fas">&#xf2bd;</i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;
            </div>
          </button>
        </NuxtLink>
      </template>
    </section>
  </header>
</div>
</template>
<script>
import GameList from "@/components/GamesList/GameList";
import { searchProducts } from "../api";

var products;
var queryfinal;

export default {
  components: {
    GameList
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  data() {
    return {
      products: [],
      queryfinal: ""
    };
  },
  methods: {
    async keymonitor(event) {
      const findProducts = await searchProducts(this.queryfinal);
      let productsResponse;

      productsResponse = await Promise.all(findProducts);

      this.products = productsResponse;
      return products;
    },
    clear() {
      this.products = null;
      return products;
    }
  }
};
</script>

<style scoped>
.productList {
  position: absolute;
  width: 340px;
  height: 72px;
  top: 75px;
  left: 330px;
}
.header {
  font-family: "Teko", sans-serif;
  background: -moz-linear-gradient(
    left,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
  background: -webkit-linear-gradient(
    left,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
  background: linear-gradient(
    to right,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
}
.header_row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header_logo {
  margin-left: 21px;
}
.header_comment {
  margin-left: 18px;
  margin-top: 17px;
  font-size: 18px;
  color: white;
}
.search {
  width: 340px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  margin-left: 20px;
  background-color: white;
  padding: 6px;
}
.search_form {
  margin-left: 10px;
  margin-top: 3px;
  font-size: 20px;
  color: #748298;
  text-transform: none;
}
.header_deal_button {
  width: 139px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  margin-left: 20px;
  background-color: #f28608;
  font-size: 24px;
  color: white;
  text-transform: none;
  text-decoration: none;
}
.header_wallet_amount {
  position: absolute;
  right: 300px;
  font-size: 22px;
  color: white;
}
#header_coin_icon {
  padding-left: 10px;
  padding-right: 8px;
}
#header_coins {
  color: #f3006c;
}
.header_account_button {
  position: absolute;
  right: 15px;
  margin-top: 20px;
  width: 139px;
  top: 0px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  margin-right: 20px;
  border: 1px solid white;
  border-color: white;
  background-color: white;
  font-size: 24px;
  color: #748298;
  text-transform: none;
}
</style>

