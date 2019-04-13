<template>
<div>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    >

    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
  </head>

  <header class="simple_header">
    <section class="simple_row">
      <div class="simple_logo">
        <NuxtLink to="/">
          <img src="/icons/logo.png">
        </NuxtLink>
      </div>
      <div class="simple_comment">Best Gaming Deals
        <br>
        <p style="text-decoration: underline orange; ">Everyday</p>
      </div>

      <div>
        <a href="/">
          <button class="simple_back_button">
            <i style="font-size:27px; margin-top: 6px; margin-left: -30px;" class="fas">&#xf359;</i> &nbsp;&nbsp;&nbsp;&nbsp; Back
          </button>
        </a>
      </div>
    </section>
  </header>
  <div class="simple_main">
  <Nuxt/>
  </div>
</div>
</template>

<style scoped>
.simple_header {
  font-family: "Teko", sans-serif;

  background: -moz-linear-gradient(
    left,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
  background: -webkit-linear-gradient(
    left,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
  background: linear-gradient(
    to right,
    #7c0072 0%,
    #ff0047 33%,
    #ff642f 67%,
    #ffd458 100%
  );
}
.simple_logo {
  margin-left: 21px;
}
.simple_row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.simple_comment {
  margin-left: 18px;
  margin-top: 17px;
  font-size: 18px;
  color: white;
}
.simple_back_button {
  position: absolute;
  right: 15px;
  margin-top: 20px;
  width: 139px;
  top: 0px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  margin-right: 20px;
  border: 1px solid white;
  border-color: white;
  background-color: white;
  font-size: 24px;
  color: #748298;
  text-transform: none;
}

.simple_login_comment {
  text-align: left;
  font-size: 15px;
  color: #495465;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
simple_table.table td {
  text-align: left;
  padding-left: 10px;
}
simple_table.table th {
  text-align: right;
  padding-right: 10px;
}
.simple_main {
  height: 2000px;
  vertical-align: center;
  background-color: #EDF0F5;
  align-items: center;
}
.simple_title_login {
  font-size: 42px;
  font-family: "Teko", sans-serif;
  color: #748298;
}
.simple_input {
  margin: 5px;
  width: 250px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  background-color: white;
  box-shadow: 1px 1px 1px -1px #666, 0px 1px 10px 2px rgba(0, 0, 0, 0.3);
}
.simple_input_form {
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #748298;
  text-transform: none;
}
.simple_input_price {
  width: 125px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  margin: 5px;
  box-shadow: 2px;
  color: #666;
  background-color: white;
  box-shadow: 1px 1px 1px -1px #666, 0px 1px 10px 2px rgba(0, 0, 0, 0.3);
}
.simple_button_orange {
  margin: 5px;
  width: 250px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #ffffff;
  background-color: #f28608;
}
.simple_button_transparent {
  margin: 5px;
  width: 250px;
  border-radius: 5px 5px 5px 5px;
 border: 2px solid #f28608;
  border-color: #f28608;
  height: 40px;
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #f28608;
  text-decoration: none;
  background-color: transparent;
}
.login_space {
  width: 400px
}
</style>

