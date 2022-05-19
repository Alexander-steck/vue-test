<template>
      <div class="wrapper">
        <table class="table-user">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="item in info" :key="item.id">
              <td><router-link to="/user" @click="information" class="table-user__btn-id">{{item.id}}</router-link></td>
              <td :key="item.name">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import config  from "@/configuration/config.js";
import axios from "axios";

export default ({
   
  data() {
    return {
      info: null,
      counter: null,
      userId: null
    };
  },

  mounted() {
    axios
      .get(config.config.url)
      .then(response => (this.info = response.data));
  },

  methods: {
    information(event){
        this.userId = event.target.textContent;
        config.config.userId = this.userId;
    }
  }
  
});
 
</script>

<style>
  .wrapper {
    width: 80%;
    margin: 20px auto;
    position: relative;
    z-index: 1;
    background-color: white;

  }

  .table-user {
    width: 100%;
    font-size: 18px;
    text-align: center;
    background-color: white;
  }

  .table-user th {
    background-color: #F2F4F4;
  }

  .table-user, .table-user td {
    padding: 20px 10px;
  }

  .table-user tr:nth-child(odd) {
    background-color: #A3E4D7;
  }

   .table-user tr:nth-child(even) {
    background-color: white;
  }

  .table-user__btn-id {
    width: 70%;
    padding: 5px 0;
    font-size: 18px;
    text-decoration: underline;
    color: blue;
    display: inline-block;
  }

  .table-user__btn-id:hover {
    cursor: pointer;
  }
</style>