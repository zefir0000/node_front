<template>
  <section>
    <div v-if="message" class="message">
     {{ message }}  <p style="color: red"> {{ error }}</p>
      <p>
        <button class="ok_button" @click="ok">OK</button>
      </p>
    </div>
    <div v-if="error" class="message">
     <p style="color: red"> {{ error }}</p>
      <p>
        <button class="ok_button" @click="ok">OK</button>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    ok() {
      this.message = null;
      this.error = null;
    }
  },
  props: {
    message: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
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

