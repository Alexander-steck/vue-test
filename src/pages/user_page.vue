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
                userInfo: null,
                userId: null,
                nameInfo: null,
                emailInfo: null,
                genderInfo: null,
                statusInfo: null
            };
            
        },
        
        mounted() {
            axios
                .get(config.config.url + config.config.userId)
                .then(response => (
                    this.userInfo = response.data,
                    this.userId = this.userInfo.id,
                    this.nameInfo = this.userInfo.name,
                    this.emailInfo = this.userInfo.email,
                    this.genderInfo = this.userInfo.gender,
                    this.statusInfo = this.userInfo.status
                ));
        },
        
    }
</script>