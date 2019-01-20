<template>
  <article>
    <table id="table" :title="availability">
      <tr>
        <th class="post-content">
          <center>
          <p id="title">
            {{ title }}
            <br>
          </p>
          <table id="details">
            <th>{{ brand }}</th>
            <th>{{ shop }}</th>
            <th>
              <a class="btn-buy" target="_blank" rel="noopener noreferrer" :href="link">BUY ME NOW</a>
            </th>

          </table>
          </center>
        </th>
        <td id="price">{{ price }} {{ currency }}</td>
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
    }
  }
};
</script>
<style scoped>
#table[title~="1"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ccc;
  width: 700px;
}
#table[title~="0"] {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ccc;
  background-color: red;
  opacity: 0.3;
  width: 700px;
}

#price {
  width: 20%;
  color: white;
}
#details {
  width: 100%;
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

/* @media (min-width: 50px) {
  .post-preview {
    width: 100%;
    margin: 10px;
  }
} */

.post-content {
  padding: 10px;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
