<template>
<div class="main">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>
  <div class="left">
    <div class="single-post-page">
      <table>
        <tr>
          <td rowspan="3" id="single_product_image">
            <img v-bind:src="productBase.image" style="width:140px; height: 175px;">
          </td>
          <td id="single_product_title">{{ productBase.title }}</td>
        </tr>
        <tr>
          <td id="single_product_platform">
            <div id="product_value">Platform:</div>
            <img
              src="/icons/steam@2x.png"
              style="width: 22px; height: 22px; margin: 0px 3px 0px 3px"
            >
            <div id="product_platform">{{ productBase.platform }}</div>+ category;
          </td>
        </tr>
        <tr>
          <td id="single_product_price">
            <div id="product_value">From:</div>
            {{ productOffer[0].price }} {{ productOffer[0].currency }}
            <div id="product_buy_button">
              <a v-bind:href="productOffer[0].link" style="text-decoration: none; color: white">
                <div id="buy_text">
                  BUY NOW
                  <img src="/icons/open-in-new.svg">
                </div>
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td id="single_product_description">{{ productBase.description }}</td>
        </tr>
        <tr>
          <td colspan="2" id="single_product_images">images</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="right">
    <table style="width:100%">
      <tr>
        <td style="width:15%">Trustpilot raiting</td>
        <td style="width:50%">Store</td>
        <td>Price</td>
      </tr>
    </table>
    <ProductRelated :productsRelated="productOffer"/>
  </div>
</div>
</template>

<script>
import ProductRelated from "@/components/ProductRelated/ProductRelated";
import { getProduct } from "../../../api";

var productBase;
var productOffer;

export default {
  components: {
    ProductRelated
  },
  async asyncData(context) {
    const data = await getProduct(context.route.params.id);
    return {
      productBase: data.productBaseData[0],
      productOffer: data.productOfferData
    };
  },
  layout: "main"
};
</script>


<style scoped>
.main {
  font-family: "Teko", sans-serif;
  background-color: #edf0f5;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
#single_product_title {
  padding-left: 10px;
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: left;
  color: #495465;
}
#single_product_platform {
  padding-left: 10px;
  font-size: 18px;
  display: flex;
}
#product_platform {
  text-transform: uppercase;
  color: #495465;
}
#single_product_price {
  padding-left: 10px;
  display: flex;
  font-size: 56px;
  color: #f28608;
}
#product_buy_button {
  width: 140px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  margin-left: 20px;
  margin-top: 14px;
  background-color: #f28608;
  font-size: 24px;
  color: white;
  text-align: center;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 2px 6px gray;
}
#buy_text {
  margin-top: 4px;
  text-transform: none;
  text-decoration: none;
}
#product_value {
  font-size: 18px;
  color: #748298;
}
#single_product_description {
  padding-left: 10px;
  font-size: 18px;
}
#single_product_images {
  padding-left: 10px;
}
</style>
