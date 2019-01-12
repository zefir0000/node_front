<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <table id="table">
        <tr>
          <th class="post-thumbnail" :style="{ backgroundImage: 'url(' + thumbnail + ')'}"></th>

          <th class="post-content">
            <center>
              <p id="title">
                {{ title }}
                <br>
              </p>
              <table id="details">
                <th>{{ brand }}</th>
                <th>{{ shop }}</th>
              </table>
            </center>
          </th>
          <td id="price">{{ price }} {{ currency }}</td>
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
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    shop: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>


<style scoped>
#table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
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
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: transparent;
  width: 90%;
}

@media (min-width: 50px) {
  .post-preview {
    width: 100%;
    margin: 10px;
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
  background-color: #ccc;
}
</style>
