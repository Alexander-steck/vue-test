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
              <td><router-link to="/user" @click="information(item.id)" class="table-user__btn-id">{{item.id}}</router-link></td>
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
      Url: config.config.url,
      info: null,
      counter: null,
      userId: null,
      responseStatus: null,
    };
  },

  methods: {
    information(event){
        this.userId = event;
        config.config.userId = this.userId;
        
    },

    homeResponse(respons){
            if(this.responseStatus === 200 || this.responseStatus === 201) { 
                this.info = respons.data;
                
                } else {
                    alert('ERROR');
                }   
        },

    RequestMethod(){
       axios
      .get(this.Url)
      .then(response => (
        this.responseStatus = response.status,
        this.homeResponse(response)
      ))
      .catch(function (error) {
          console.log(error);
                
      });
    }
    
  },
  mounted() {
    this.RequestMethod();
  },
  
});
 
</script>
