<template>
    <CreatedUser v-if="success==true">{{msg}}</CreatedUser>
     <div class="wrapper">
        <Form class="form-register" @submit="onSubmit">
            <div class="form-register__box">
                <label for="name">Name: </label>
                <Field name="name" type="text" class="input-register" :rules="nameY" v-model="name"  />
                <ErrorMessage name="name" class="error-message" />
            </div>
            <div class="form-register__box">
                <label for="email">Email: </label>
                <Field name="email" type="email" class="input-register" :rules="emailY" v-model="email" />
                <ErrorMessage name="email" class="error-message" />
            </div>
            <div class="form-register__box">
               <label for="gender">Gender: </label>
                <select name="gender" id="registGender" class="input-register" v-model="gender">
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
            </div>
            <div class="form-register__box">
               <label for="status">Status: </label>
                <select name="status" id="registStatus" class="input-register" v-model="status">
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
            </div>
            <input type="submit" value="create user" class="form-register__submit">
        </Form>
     </div>
</template>

<script>
import axios from "axios";
import { Form, Field, ErrorMessage } from 'vee-validate';
import CreatedUser from "@/components/created_user.vue";
import * as Yup from "yup";
export default {
    components:{
        CreatedUser,
        Form,
        Field,
        ErrorMessage
    },

    data() {
        return {
            name: '',
            email: '',
            gender: 'female',
            status: 'active',
            success: false,
            responseStatus: null,
            nameY: Yup.string().min(2).max(15).required(),
            emailY: Yup.string().email().required(),
        }
       
    },
    methods: {
        newForm(){
            this.name = '';
            this.email = '';
        },
        auditResponse(){
            if(this.responseStatus === 200 || this.responseStatus === 201) { 
                this.success = true
                this.newForm();
                setTimeout(() => this.success = false, 2000);
                 
                } else {
                    alert('ERROR');
                }
            
        },

        onSubmit(){
            
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                Name: this.name,
                Email: this.email,
                Gender: this.gender,
                Status: this.status 
            })
            .then(response => (
                this.responseStatus = response.status,
                this.auditResponse()
                   
            ))
            .catch(function (error) {
                console.log(error);
                
            });
            
            
        }
        
       
    }
}
</script>
