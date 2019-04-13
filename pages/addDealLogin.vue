<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
    >
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    >
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,800|Teko" rel="stylesheet">
  </head>
  <center>

    <div v-if="error" class="message">
      <p style="color: red">{{ error }}</p>
      <p>
        <button class="ok_button" @click="error=null">OK</button>
      </p>
    </div>
    <div class="simple_input_form">
      <table class="simpleTable">
        <tr>
          <th>&nbsp;</th>
          <td>
            <p class="simple_title_login">Add deal</p>
            <p style="font-size: 24px">
              Add deal & you’ll get
              <font color="#F28608">10 GCoins</font>
            </p>
          </td>
          <td rowspan="7">
            <center>
              <div class="login_space">
                <form class="simple_input_form" @submit.prevent="loginForm()">
                  <p class="simple_title_login">Login</p>
                  <br>
                  <p
                    class="simple_login_comment"
                  >Add deal as a logged in user and start earning points to exchange them for FREE gift cards.</p>
                  <input
                    class="simple_input"
                    placeholder=" Email address"
                    type="text"
                    name="user"
                    v-model="email"
                    v-validate="'required|email'"
                  >
                  <br>
                  <span id="validate">{{ errors.first('user') }}</span>

                  <input
                    class="simple_input"
                    placeholder=" Password "
                    type="password"
                    name="password"
                    v-model="password"
                    v-validate="'required'"
                  >
                  <br>
                  <span id="validate">{{ errors.first('password') }}</span>

                  <button class="simple_button_orange">Log in</button>
                </form>
                <button class="simple_button_transparent">
                  <Nuxtlink src="/auth/google">Create account</Nuxtlink>
                </button>
                <p class="little_text">…or log in with</p>
              </div>
              <div>
                <button class="facebook_button">FACEBOOK</button>
                <button class="google_button">GOOGLE</button>
              </div>
            </center>
          </td>
        </tr>

        <tr>
          <th>Link</th>
          <td>
            <input
              class="simple_input"
              placeholder=" http:// "
              type="text"
              v-model="link"
              name="link"
              v-validate="{url: {require_protocol: true }}"
            >
            <br>
            <span id="validate">{{ errors.first('link') }}</span>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <br>
            <p class="simple_deal_comment">Paste the link with the deal or information about it.</p>
          </td>
        </tr>
        <tr>
          <th>Name of the game</th>
          <td>
            <input
              class="simple_input"
              placeholder=" title of the deal "
              type="text"
              v-model="title"
              name="title"
              v-validate="'required'"
            >
            <br>
            <span id="validate">{{ errors.first('title') }}</span>
          </td>
        </tr>
        <tr>
          <th>Currency</th>
          <td>
            <select class="simple_input" v-model="currency" name="currency" v-validate="'required'">
              <option>FREE</option>
              <option>EUR</option>
              <option>USD</option>
              <option>GPB</option>
            </select>
            <br>
            <span id="validate">{{ errors.first('currency') }}</span>
          </td>
        </tr>
        <tr>
          <th>Price</th>
          <td>
            <input class="simple_input_price" placeholder=" 0,00 " type="text" v-model="price">
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <button class="simple_button_orange" @click="addDeal">Add deal</button>
          </td>
        </tr>
      </table>
    </div>
  </center>
</div>
</template>

<script>
import { getUserByEmail, loginUser, addDealByGuest } from "../api";

export default {
  layout: "simpleLayout",
  
  data() {
    return {
      email: "",
      password: "",
      link: "",
      title: "",
      currency: "",
      price: "",
      error: ""
    };
  },
  methods: {
    async loginForm() {
      let isFormValid = await this.$validator.validate("user");
      isFormValid = await this.$validator.validate("password");

      if (isFormValid) {
        const result = await loginUser({
          email: this.email,
          password: this.password
        });

        if (result.status === 0) {
          this.error = "Login failed wrong user credentials";
        } else {
          const userData = await getUserByEmail(this.email);
          this.$store.commit("userData", userData);
          this.$store.commit("authUser", true);
          this.$router.push("/addDeal");
        }
      }
    },

    async addDeal() {
      let isDealValid = await this.$validator.validate("title");
      isDealValid = await this.$validator.validate("currency");
      isDealValid = await this.$validator.validate("link");

      if (isDealValid) {
        var link = this.link;
        var title = this.title;
        var currency = this.currency;
        var price = this.price;
        var user = this.user;

        const dealResponse = await addDealByGuest({
          link: link,
          title: title,
          currency: currency,
          price: price
        }) 

        if(dealResponse.hours){
          this.error = "You have already added a deal. try after " + dealResponse.hours + " hours"
        } else { this.$router.push("/") }
      }
    }
  }
};
</script>

<style>
.simple_deal_comment {
  padding-left: 5px;
  margin-top: -20px;
  text-align: left;
  font-size: 18px;
  color: #495465;
  font-family: "Teko", sans-serif;
}

table.simpleTable td {
  text-align: left;
  padding-left: 10px;
}
table.simpleTable th {
  text-align: right;
  padding-right: 10px;
}
.simple_title_login {
  text-align: left;
  padding-top: 90px;
  font-size: 42px;
  font-family: "Teko", sans-serif;
  color: #748298;
}
.simple_input {
  margin: 5px;
  width: 320px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
.simple_input_form {
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #748298;
  text-transform: none;
}
.simple_input_price {
  width: 160px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  margin: 5px;
  box-shadow: 2px;
  color: #666;
  background-color: white;
  margin: 33px 5px 33px;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}

.simple_button_orange {
  margin: 5px;
  width: 320px;
  border-radius: 5px 5px 5px 5px;
  height: 40px;
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #ffffff;
  background-color: #f28608;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
.simple_button_transparent {
  margin: 5px;
  width: 320px;
  border-radius: 5px 5px 5px 5px;
  border: 2px solid #f28608;
  border-color: #f28608;
  height: 40px;
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #f28608;
  text-decoration: none;
  background-color: transparent;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
.simple_login_comment {
  padding-left: 5px;
  margin-top: -20px;
  margin-bottom: 80px;
  text-align: left;
  font-size: 15px;
  color: #495465;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.login_space {
  width: 300px;
}
.little_text {
  text-align: center;
  font-size: 16px;
  font-family: "Teko", sans-serif;
  color: #748298;
}
.facebook_button {
  margin-left: 25px;
  margin-top: -20px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  width: 155px;
  background-color: #4e78ff;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #ffffff;
  font-size: 12px;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
.google_button {
  margin-left: 15px;
  margin-top: -20px;
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  width: 155px;
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #405e6c;
  font-size: 12px;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
#validate {
  color: red;
}
.message {
  padding-top: 20px;
  align-items: center;
  position: absolute;
  right: 30%;
  top: 40%;
  height: 20%;
  width: 40%;
  font-family: "Teko", sans-serif;
  text-align: center;
  font-size: 32px;
  border-radius: 8px 8px 8px 8px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 8px gray;
  -moz-box-shadow: 0px 2px 8px gray;
  box-shadow: 0px 1px 8px gray;
}
.ok_button {
  border-radius: 22px 22px 22px 22px;
  height: 42px;
  width: 100px;
  margin-right: 20px;
  border: 1px solid white;
  border-color: white;
  background-color: white;
  font-size: 24px;
  color: #748298;
  text-transform: none;
  -webkit-box-shadow: 0px 2px 6px gray;
  -moz-box-shadow: 0px 2px 6px gray;
  box-shadow: 0px 1px 6px gray;
}
</style>