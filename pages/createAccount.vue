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
    <div v-if="loginError">
      <Message :error="error"/>
    </div>
    <div class="login_space">
      <form class="simple_input_form" method="POST" @submit.prevent="create()">
        <p class="simple_title_login">Create account</p>
        <br>
        <input
          class="simple_input"
          placeholder=" User name"
          type="text"
          name="user"
          v-model="createUser.user"
          v-validate="'required'"
        >
        <br>
        <span id="validate">{{ errors.first('user') }}</span>
        <br>
        <input
          class="simple_input"
          placeholder=" Email address"
          type="text"
          name="email"
          v-model="createUser.email"
          v-validate="'required|email'"
        >
        <br>
        <span id="validate">{{ errors.first('email') }}</span>

        <br>
        <input
          class="simple_input"
          placeholder=" Password "
          type="password"
          name="password"
          v-model="createUser.password"
          ref="password"
          v-validate="'required'"
        >
        <br>
        <span id="validate">{{ errors.first('password') }}</span>

        <br>
        <input
          class="simple_input"
          type="password"
          name="repassword"
          v-model="createUser.repassword"
          v-validate="'required|confirmed:password'"
          placeholder="Password, Again"
          data-vv-as="password"
        >
        <br>
        <span id="validate">{{ errors.first('repassword') }}</span>
        <br>
      </form>
      <button class="simple_button_transparent" @click="create">Create account</button>

      <p class="little_text">…or log in with</p>
    </div>
    <div>
      <a src="/auth/facebook">
        <button class="facebook_button">FACEBOOK</button>
      </a>
      <a href="/auth/google">
        <button class="google_button">GOOGLE</button>
      </a>
    </div>
  </center>
</div>
</template>

<script>
import { createAccount } from "../api";
import axios from "axios";

export default {
  data() {
    return {
      error: "",
      createUser: this.newUser
        ? { ...this.newUser }
        : {
            user: "",
            email: "",
            password: "",
            repassword: ""
          }
    };
  },
  methods: {
    async create() {
      const isFormValid = await this.$validator.validateAll();
      if (isFormValid) {
        let createUser = this.createUser;
        let data = await createAccount(createUser);
        if ((data = 204)) {
          this.$router.push("/login");
        } else {
          console.log("something went wrong");
        }
      }
    }
  },
  layout: "simpleLayout"
};
</script>

<style>
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
  -webkit-box-shadow: 0px 2px 4px black 16%;
  -moz-box-shadow: 0px 2px 4px black 16%;
  box-shadow: 0px 2px 4px black, 16%;
}
.simple_input_form {
  font-size: 20px;
  font-family: "Teko", sans-serif;
  color: #748298;
  text-transform: none;
}
.simple_button_transparent {
  margin: 20px 5px;
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
  -webkit-box-shadow: 0px 2px 4px black 16%;
  -moz-box-shadow: 0px 2px 4px black 16%;
  box-shadow: 0px 2px 4px black, 16%;
}
.login_space {
  width: 300px;
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
  -webkit-box-shadow: 0px 4px 8px black 16%;
  -moz-box-shadow: 0px 4px 8px black 16%;
  box-shadow: 0px 4px 8px black, 16%;
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
  -webkit-box-shadow: 0px 4px 8px black 16%;
  -moz-box-shadow: 0px 4px 8px black 16%;
  box-shadow: 0px 4px 8px black, 16%;
}
#validate {
  color: red;
}
</style>