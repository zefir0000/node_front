<template>
<article>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>
  <table id="table" :title="availability">
    <tr>
      <td id="trustpilot" :style="{ color: 'rgb('+ (100 - TPraiting) + '%' + TPraiting + '% 0%)'}">
        <p>{{ TPraiting/10 }}</p>
        <p id="raiting">{{ TPreviewCount }} Raitings</p>
      </td>
      <td id="offer_shop">
        <p>{{ shop }}</p>
        <p>link</p>
      </td>
      <td id="offer_price">
        <tr>
          <td>
            <div>{{ price }} {{ currency }}</div>
          </td>
          <td>
            <div id="offer_buy_button">
              <a v-bind:href="link" style="text-decoration: none; color: white">
                <div id="buy_text">
                  BUY NOW
                  <img src="/icons/open-in-new.svg">
                </div>
              </a>
            </div>
          </td>
        </tr>
      </td>
    </tr>
  </table>
</article>
</template>

<script>
export default {
  name: "ProductRelatedPreview",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    availability: {
      type: Number,
      required: true
    },
    shop: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    TPraiting: {
      type: Number,
      required: true
    },
    TPreviewCount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
#table[title~="1"] {
  margin: 2px 4px 4px 2px;
  border-radius: 3px 3px 3px 3px;
  background-color: white;
  font-family: "Teko", sans-serif;
  width: 100%;
}
#table[title~="0"] {
  font-family: "Teko", sans-serif;
  border-radius: 3px 3px 3px 3px;
  background-color: red;
  width: 100%;
  opacity: 0.3;
}
#trustpilot {
  text-align: center;
  font-size: 52px;
  width: 15%;
}
#raiting {
  font-size: 14px;
  color: #748298;
}
#offer_shop {
  width: 50%;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #db7620;
}
#offer_price {
  width: 35%;
  font-size: 38px;
  color: #f28608;
}
#offer_buy_button {
  width: 100px;
  border-radius: 22px 22px 22px 22px;
  height: 34px;
  margin-left: 20px;
  background-color: #f28608;
  color: white;
  text-align: center;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 2px 6px gray;
}
#buy_text {
  padding-top: 5px;
  font-size: 18px;
  text-transform: none;
  text-decoration: none;
}
</style>
