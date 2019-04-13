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
            <td id="game-thumbnail" rowspan="2">
              <div style="position:relative">
                <img v-bind:src="thumbnail" id="game_image">
                <div id="top_badge">
                  <img src="/icons/top_badge.svg">
                </div>
                <div id="topnumber">{{ topTen }}</div>
              </div>
            </td>
            <td colspan="2" id="title">{{ title }}</td>
          </tr>
          <tr>
            <td id="price">
              <div id="game_comment">From &nbsp;</div>
              {{ price }} {{ currency }}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </nuxt-link>
</div>
</template>

<script>
export default {
  name: "TopListPreview",
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
    },
    topTen: {
      type: Number,
      required: false
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
#topnumber {
  font-size: 20px;
  position: absolute;
  color: white;
  top: -3px;
  left: 5px;
}
#top_badge {
  position: absolute;

  top: -8px;
  left: -10px;
}
#game_image {
  position: relative;
  margin: 4px 5px 0px 5px;
  height: 62px;
  width: 42px;
}
.game-list-preview {
  text-decoration: none;
}
#games_list_table[availability~="1"] {
  width: 100%;
  margin: 4px 4px 4px 4px;
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  font-family: "Teko", sans-serif;
  padding-right: 5px;
}
#games_list_table[availability~="0"] {
  width: 310px;
  font-family: "Teko", sans-serif;
  background-color: red;
  padding-right: 5px;
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
.game-list-preview {
  text-decoration: none;
}
</style>
