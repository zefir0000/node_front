<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title"></h1>
      <div class="post-details">{{ market.name }}</div>
      <table>
        <tr>
          <th>support: {{ market.support }}</th>
        </tr>
        <tr>
          <th>Description: {{ market.description }}</th>
        </tr>
        <tr>
          <th>{{ market.logo }}</th>
        </tr>
        <tr>
          <th>Raiting: {{ market.raiting }}</th>
        </tr>
        <tr>
          <th>Adress: {{ market.adress }}</th>
        </tr>
      </table>
    </section>
    <section class="post-feedback"></section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData(context) {
    let { data } = await axios.get(
      "http://localhost:8080/market?name=" + context.route.params.shop
    );

    return {
      market: data[0]
    };
  },
  created() {},
  layout: "default"
};
</script>


<style scoped>
.post-thumbnail {
  width: 230px;
  height: 336px;
  background-position: center;
  background-size: cover;
}

.single-post-page {
  color: white;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 700px;
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

.post-price {
  border-radius: 0px 23px 0px 23px;
  background-color: green;
  box-shadow: 10px 10px 10px black;
  padding: 10px;
  font-size: 16px;
  color: white;
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
.btn-buy {
  margin-left: 30px;
  -moz-box-shadow: inset 0px 1px 0px 0px #f5978e;
  -webkit-box-shadow: inset 0px 1px 0px 0px #f5978e;
  box-shadow: inset 0px 1px 0px 0px #f5978e;
  background: -moz-linear-gradient(center top, #f24537 5%, #c62d1f 100%);
  background-color: #f24537;
  -webkit-border-top-left-radius: 21px;
  -moz-border-radius-topleft: 21px;
  border-top-left-radius: 21px;
  -webkit-border-top-right-radius: 21px;
  -moz-border-radius-topright: 21px;
  border-top-right-radius: 21px;
  -webkit-border-bottom-right-radius: 21px;
  -moz-border-radius-bottomright: 21px;
  border-bottom-right-radius: 21px;
  -webkit-border-bottom-left-radius: 21px;
  -moz-border-radius-bottomleft: 21px;
  border-bottom-left-radius: 21px;
  text-indent: 0px;
  border: 1px solid #d02718;
  display: inline-block;
  color: #ffbb00;
  font-family: Arial;
  font-size: 19px;
  font-weight: bold;
  font-style: normal;
  height: 50px;
  line-height: 50px;
  width: 150px;
  text-decoration: none;
  text-align: center;
  text-shadow: 1px 1px 0px #810e05;
}
.btn-buy:hover {
  background: -moz-linear-gradient(center top, #c62d1f 5%, #f24537 100%);
  background-color: #c62d1f;
}
.btn-buy:active {
  position: relative;
  top: 1px;
}
</style>
