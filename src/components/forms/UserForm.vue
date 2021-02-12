<template>
<div>
    <div class="card">
    <div class="card-header">
        Register User    
    </div>   
    <div class="card-body">
        <form v-on:submit.prevent v-on:submit="register()" >
        
        <div class="form-group" :class="{ 'form-group--error': $v.form.first_name.$error }">
        <label for="first_name">Firstname:</label>
         <input type="text" v-model.trim="$v.form.first_name.$model" class="form__input form-control" id="first_name" placeholder="Enter Firstname">
         <small class="error" v-if="!$v.form.first_name.required">Field is required</small>
         <small class="error" v-if="!$v.form.first_name.minLength">Firstname must have at least {{$v.form.first_name.$params.minLength.min}} letters.</small>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.last_name.$error }">
        <label for="last_name">Lastname:</label>
         <input type="text" v-model.trim="$v.form.last_name.$model" class="form__input form-control" id="first_name" placeholder="Enter Lastname">
         <small class="error" v-if="!$v.form.last_name.required">Field is required</small>
         <small class="error" v-if="!$v.form.last_name.minLength">Lastname must have at least {{$v.form.last_name.$params.minLength.min}} letters.</small>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.username.$error }">
        <label for="username">Username:</label>
         <input type="text" v-model.trim="$v.form.username.$model" class="form__input form-control" id="username" placeholder="Enter username">
         <small class="error" v-if="!$v.form.username.required">Field is required</small>
         <small class="error" v-if="!$v.form.username.minLength">Username must have at least {{$v.form.username.$params.minLength.min}} letters.</small>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.date_of_birth.$error }">
        <label for="date_of_birth">Date of birth:</label>
        <b-form-datepicker v-model.trim="$v.form.date_of_birth.$model" id="example-datepicker" class="mb-2"></b-form-datepicker>
        <small class="error" v-if="!$v.form.date_of_birth.required">Field is required</small>
        </div>
        
        <div class="form-group" :class="{'form-group--error': $v.form.email.$error }">
        <label for="email">Email:</label>
        <input type="email" v-model.trim="$v.form.email.$model" class="form__input form-control" id="email" placeholder="Enter email">
        <small class="error" v-if="!$v.form.email.email">Invalid Email</small>
        <small class="error" v-if="!$v.form.email.required">Field is required</small>
        </div>

        <div class="form-group">
        <label for="roles">Role:</label>
        <select id ="roles" v-model="form.role_id" class="form__input form-control" required> 
            <option v-for="role in form.roles" :key="role.id" :value="role.id"> {{role.role_name}}</option>
        </select>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.password.$error }">
        <label for="pwd">Password:</label>
        <input type="password" v-model.trim="$v.form.password.$model" class="form__input form-control" placeholder="*******" >
        <small class="error" v-if="!$v.form.password.required">Field is required</small>
        <small class="error" v-if="!$v.form.password.minLength">Password must have at least {{$v.form.password.$params.minLength.min}} letters.</small>
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
        </form>
        </div>
    </div>
</div>
</template>
<script>
import modelFactory from "@/services/resources/resourceFactory.js";
import { email, required, minLength } from 'vuelidate/lib/validators';
export default {
    name: "UserForm",
    data(){
        return {
            form: {
                first_name: "",
                last_name: "",
                username: "",
                password: "",
                date_of_birth:"",
                email: "",
                role_id: 0,
                roles: []
            },
            responseErrors:[]
        }
    },
    validations: {
        form: {
            first_name : {
                required,
                minLength: minLength(4)
            },
            last_name : {
                required,
                minLength: minLength(4)
            },
            date_of_birth: {
                required
            },
             email: {
                 required,
                 email
             },
             username: {
                 required,
                 minLength: minLength(4)
            },
            password: {
                required,
                minLength: minLength(8)
            }
        }    
    },
    methods: {
        register(){
            this.$v.$touch()
            if (this.$v.$invalid) { 
                this.$dialogs.alert("Please correct errors!",{title:'Error', size:"sm"})
                            .then(res => console.log(res))
                return 
            }
            const userModel = modelFactory.get('users');
            userModel.add(this.form)
                    .then(response => {
                        this.$dialogs.alert(`${this.form.username} has been registered!`)
                            .then(res => console.log(res))
                        console.log(response);
                    }).catch(err => {
                        const status = err.response.status;
                        const messages = err.response.data.data || {};
                        this.$dialogs.alert(messages,{title:status, size:"sm"})
                               .then(res => console.log(res));
                        
                    })
        }
    },
    mounted() {
        const roleModel = modelFactory.get('roles');
            roleModel.index().then(response => {
                 this.form.roles = response.data.data
        });
    }
}
</script>