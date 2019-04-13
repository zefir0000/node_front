<template>
<article>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600|Teko" rel="stylesheet">
  </head>
  <div v-if="error" class="message">
    <p style="color: red">{{ error }}</p>
    <p>
      <button class="ok_button" @click="error=null">OK</button>
    </p>
  </div>
  <table id="table">
    <tr>
      <td id="upVote">
        <button @click="addUpVote(dealId)">
          <img src="/icons/arrow-up-bold.svg">
        </button>
        <p style="margin-top: -20px">{{ upVote }}</p>
      </td>
      <td id="deal_title">
        <p>{{ title }}</p>
        <p id="deal_info">
          {{ createdDate }}
          <a
            v-bind:href="link"
            style="text-decoration: none; color: #748298; margin-left: 20px;"
            target="_blank"
          >{{ link }}</a>

          <i style="font-size:18px; margin-left: 20px" class="fas">&#xf2bd;</i>
          {{ user }}
        </p>
      </td>
      <td id="deal_price">
        <div>{{ price }} {{ currency }}</div>
      </td>
    </tr>
  </table>
</article>
</template>

<script>
import Message from "@/components/MessageComponent";
import { upVoteDeal } from "../../api";

export default {
  data() {
    return {
      error: ""
    };
  },
  components: {
    Message
  },
  methods: {
    async addUpVote(dealId) {
      const upVoteResponse = await upVoteDeal(dealId);
      if (upVoteResponse.hours > 0) {
        this.error =
          "You have already upVoted. try after " +
          upVoteResponse.hours +
          " hours";
      } else {
        this.upVote++;
      }
    }
  },
  name: "ProductDealListPreview",
  props: {
    dealId: {
      type: Number,
      required: true
    },
    user: {
      required: true
    },
    title: {
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
    link: {
      type: String,
      required: true
    },
    upVote: {
      type: Number,
      required: true
    },
    createdDate: {
      type: String,
      required: true
    },
    updatedDate: {
      type: String,
      required: false
    }
  }
};
</script>
<style scoped>
#table {
  border-radius: 3px 3px 3px 3px;
  margin: 4px 0px 4px 6px;
  background-color: white;
  font-family: "Teko", sans-serif;
  width: 100%;
}
#upVote {
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
  font-size: 18px;
  color: #495465;
}
#deal_price {
  text-align: center;
  width: 15%;
  font-size: 32px;
  color: #f28608;
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
