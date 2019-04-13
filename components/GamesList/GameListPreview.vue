<template>
<div>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>

  <nuxt-link :to="gameLink" class="game-list-preview">
    <article>
      <table id="games_list_table" :availability="availability">
        <tbody>
          <tr>
            <td class="game-thumbnail" rowspan="2">
              <img v-bind:src="thumbnail" class="game_image">
            </td>
            <td colspan="2" id="title">{{ title }}</td>
          </tr>
          <tr>
            <td id="price">
              <div id="game_comment">From &nbsp;</div>
              {{ price }} {{ currency }}
            </td>
            <!-- <td id="game_comment">offer</td> -->
          </tr>
        </tbody>
      </table>
    </article>
  </nuxt-link>
</div>
</template>

<script>
export default {
  name: "GameListPreview",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
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
    brand: {
      type: String,
      required: true
    }
  },
  computed: {
    gameLink() {
      return "/products/" + this.id;
    }
  }
};
</script>

<style scoped>
.game_image {
  margin: 4px 5px 0px 5px;
  height: 62px;
  width: 42px;
}
.game-list-preview {
  text-decoration: none;
}
#games_list_table[availability~="1"] {
  width: 340px;
  margin: 4px 0px 4px 0px;
  background-color: white;
  border-radius: 4px 4px 4px 4px;
  font-family: "Teko", sans-serif;
}
#games_list_table[availability~="0"] {
  width: 340px;
  margin: 4px 0px 4px 0px;
  font-family: "Teko", sans-serif;
  background-color: red;
  opacity: 0.5;
}
#games_list_table:hover {
  background-color: #fff8e4;
}
#title {
  width: 100%;
  font-size: 13px;
  color: #748298;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: left;
}
#price {
  display: flex;
  font-size: 22px;
  color: #f28608;
}
#game_comment {
  font-size: 16px;
  color: #748298;
  opacity: 50%;
}
</style>
