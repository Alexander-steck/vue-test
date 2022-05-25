<template>
    <div class="wrapper">
        <table class="table-user">
            <thead>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>gender</th>
                <th>status</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{userId}}</td>
                <td>{{nameInfo}}</td>
                <td>{{emailInfo}}</td>
                <td>{{genderInfo}}</td>
                <td>{{statusInfo}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";
    import config  from "@/configuration/config.js";
   
    export default {
        
         data() {
            return {
                Url: config.config.url,
                userInfo: null,
                userId: config.config.userId,
                nameInfo: null,
                emailInfo: null,
                genderInfo: null,
                statusInfo: null,
                responseStatus: null
            };
            
        },

        methods: {
            userResponse(respons){
            if(this.responseStatus === 200 || this.responseStatus === 201) { 
                this.userInfo = respons.data;
                this.userId = this.userInfo.id;
                this.nameInfo = this.userInfo.name;
                this.emailInfo = this.userInfo.email;
                this.genderInfo = this.userInfo.gender;
                this.statusInfo = this.userInfo.status;
                
                } else {
                    alert('ERROR');
                }   
            },

            RequestMethod(){
                axios
                .get(this.Url + this.userId)
                .then(response => (
                    this.responseStatus = response.status,
                    this.userResponse(response)
                ))
                .catch(function (error) {
                    console.log(error);
                    alert(error);
                
                }); 
            }
        },
        
        mounted() {
            this.RequestMethod()
        },
        
    }
</script>