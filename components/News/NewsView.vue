<template>
  <nuxt-link :to="postLink" class="news-view" >
    <article>
      <table id="table">
        <tr>
          <th class="news-thumbnail" :style="{ backgroundImage: 'url(' + imageLink + ')'}"></th>

          <th class="news-content" >
            <center>
              <p id="title">
                {{ title }}
                <br>
              </p>
              <table id="details">
                <th>{{ news }}</th>
              </table>
            </center>
          </th>
          <td id="price">{{ likes }} {{ unlikes }} </td>
        </tr>
      </table>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewsView",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: false
    },
    news: {
      type: String,
      required: true
    },
    updatedDate: {
      type: String,
      required: false
    },
    likes: {
      type: Number,
      required: false
    },
    unlikes: {
      type: Number,
      required: false
    }
  },
  computed: {
    postLink() {
      return "/news/" + this.id;
    }
  }
};
</script>


<style scoped>
#table[title~="1"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#table[title~="0"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  background-color: red;
  opacity: 0.3;
  width: 100%;
}

#price {
  width: 10%;
  color: white;
}
#details {
  font-size: 12px;
}
#title {
  text-align: center;
}

#table td,
#table th {
  text-align: center;
  border: 0px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even) {
  background-color: #353535;
}

#a {
  text-decoration: none;
  color: black;
}

#table tr:hover {
  background-color: #353535;
}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: transparent;
  color: white;
}
.news-view {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: transparent;
  width: 90%;
}


@media (min-width: 50px) {
  .news-view {
    width: 100%;
    margin: 10px;
  }
}

.news-thumbnail {
  width: 250px;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.news-content {
  padding: 10px;
}

a:hover .news-content,
a:active .news-content {
  background-color: #ccc;
}

</style>
