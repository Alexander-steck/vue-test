<template>
    <CreatedUser v-if="success==true">{{msg}}</CreatedUser>
     <div class="wrapper">
        <Form class="form-register" @submit="onSubmit">
            <div class="form-register__box">
                <label for="name">Name: </label>
                <Field name="name" type="text" class="input-register" :rules="validateName" v-model="name"  />
                <ErrorMessage name="name" class="error-message" />
            </div>
            <div class="form-register__box">
                <label for="email">Email: </label>
                <Field name="email" type="email" class="input-register" :rules="validateEmail" v-model="email" />
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
            success: false
        }
       
    },
    methods: {
        onSubmit(){
            
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                Name: this.name,
                Email: this.email,
                Gender: this.gender,
                Status: this.status 
            })
            .then(response => (
                this.success = true,
                console.log(response),
                setTimeout(() => this.success = false, 5000)
            ))
            .catch(function (error) {
                console.log(error);
                
            });
            return [
                this.name = '',
                this.email = '',
            ];
        },

        validateName(value){

            if (!value) {
                return 'This field is required';
            }
            const regexName = /^[A-Z]{1}[a-z]{1,15}$/;

            if (!regexName.test(value)) {
                return 'This field must be a valid name';
            }
            return true;
        },

        validateEmail(value){
            
            if (!value) {
                return 'This field is required';
            }
            const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

            if (!regexEmail.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        },
    }
}
</script>

<style>
    .form-register {
        width: 400px;
        margin: 0 auto;
        overflow: hidden;
        border: 2px solid #00bfa5;
        padding: 100px 50px;
        border-radius: 10px;
        background-color: white;
    }

    .form-register__box {
        width: 100%;
        margin: 20px 0px;
        overflow: hidden;
    }

    .form-register__box label {
        float: left;
        display: inline-block;
        width: 25%;
        text-align: left;
    }

    .input-register {
        width: 70%;
        height: 20px;
        float: right;
        font-size: 16px;
        border-left: none;
        border-right: none;
        border-top: none;
        outline: none ;
    }

    .input-register:invalid {
       background-color: rgba(236, 112, 99, 0.2);
    }

    .form-register__submit {
        padding: 5px 40px;
        background-color: rgba(0,191,165, 0.8);
        border: none;
        border-radius: 5px;
        float: right;
        color: white;
        font-weight: bold;
        font-size: 18px;
    }

    .form-register__submit:hover {
        background-color: #00BFA5;
        cursor: pointer;
    }

    .error-message {
        display: inline-block;
        float: right;
        background-color: red;
        color: white;
        padding: 5px;
    }

</style>