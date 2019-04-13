<template>
<article>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>
  <table id="table">
    <tr>
      <td id="profile_avatar">
        <i style="font-size:48px; margin-left: 10px; margin-right: 10px" class="fas">&#xf2bd;</i>
      </td>
      <td id="deal_title">
        <p>{{ name }}</p>
        <p id="deal_info">{{ createdDate }} Days</p>
      </td>
      <td>
        <img src="/icons/gcoin.svg">
      </td>
      <td id="user_coins">
        <div>{{ coins }}</div>
      </td>
    </tr>
  </table>
</article>
</template>

<script>
export default {
  name: "UsersListPreview",
  props: {
    name: {
      type: String,
      required: true
    },
    coins: {
      type: Number,
      required: true
    },
    createdDate: {
      type: Number,
      required: false
    }
  }
};
</script>

<style scoped>
#table {
  margin: 4px 0px 4px 6px;
  border-radius: 3px 3px 3px 3px;
  background-color: white;
  font-family: "Teko", sans-serif;
  width: 100%;
}
#profile_avatar {
  text-align: center;
  font-size: 52px;
  width: 15%;
}
#deal_info {
  padding-right: 20px;
  font-family: "Teko", sans-serif;
  font-size: 18px;
  color: #abb2bd;
}
#deal_title {
  width: 70%;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #495465;
}
#user_coins {
  text-align: right;
  width: 30%;
  padding-right: 10px;
  font-family: "Teko", sans-serif;
  font-size: 22px;
  color: #21c7ba;
}
</style>
