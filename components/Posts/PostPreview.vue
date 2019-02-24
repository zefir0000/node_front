<template>
  <nuxt-link :to="postLink" class="post-preview" >
    <article>
      <table id="table" :title="availability">
        <tr>
          <th class="post-thumbnail" :style="{ backgroundImage: 'url(' + thumbnail + ')'}"></th>

          <th class="post-content" >
            <center>
              <p id="title">
                {{ title }}
                <br>
              </p>
              <table id="details">
                <th>{{ brand }}</th>
              </table>
            </center>
          </th>
          <td id="price">{{ price }} {{ currency }} </td>
        </tr>
      </table>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
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
    postLink() {
      return "/products/" + this.id;
    }
  }
};
</script>


<style scoped>
#table[title~="1"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  background-color: #353535;
  width: 100%;
}
#table[title~="0"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  background-color: red;
  opacity: 0.5;
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
  padding: 8px;
}

#table tr:nth-child(even) {
  background-color: #grey;
}

#a {
  text-decoration: none;
  color: black;
}

#table tr:hover {
  background-color: grey;
}

#table th {
  text-align: left;
  color: white;
}
.post-preview {
  text-decoration: none;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  width: 90%;
}


@media (min-width: 50px) {
  .post-preview {
    width: 100%;
    margin: 0px;
  }
}

.post-thumbnail {
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
}

a:hover .post-content,
a:active .post-content {
}

</style>
