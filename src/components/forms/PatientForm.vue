<template>
    <div>
        <div class="card">
            <div class="card-header">Register Patient </div>
            <div class="card-body">
                <form v-on:submit.prevent v-on:submit="register()">
                    <div class="form-group" :class="{ 'form-group--error': $v.form.first_name.$error }">
                    <label for="first_name">Firstname:</label>
                    <input type="text" v-model.trim="$v.form.first_name.$model" class="form__input form-control" id="first_name" placeholder="Enter First name">
                    <small class="error" v-if="!$v.form.first_name.required">Field is required</small> <br/>
                    <small class="error" v-if="!$v.form.first_name.minLength">First name must have at least {{$v.form.first_name.$params.minLength.min}} letters.</small>
                    </div>

                    <div class="form-group" :class="{ 'form-group--error': $v.form.family_name.$error }">
                    <label for="family_name">Family name:</label>
                    <input type="text" v-model.trim="$v.form.family_name.$model" class="form__input form-control" id="first_name" placeholder="Enter Family">
                    <small class="error" v-if="!$v.form.family_name.required">Field is required</small> <br/>
                    <small class="error" v-if="!$v.form.family_name.minLength">Family name must have at least {{$v.form.family_name.$params.minLength.min}} letters.</small>
                    </div>

                    <div class="form-group">
                    <label for="gender">Gender:</label>
                    <select class="form-control" v-model="form.gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>

                    <div class="form-group" :class="{'form-group--error': $v.form.email.$error }">
                    <label for="email">Email:</label>
                    <input type="email" v-model.trim="$v.form.email.$model" class="form__input form-control" id="email" placeholder="Enter email">
                    <small class="error" v-if="!$v.form.email.email">Invalid Email</small> <br/>
                    <small class="error" v-if="!$v.form.email.required">Field is required</small>
                    </div>

                    <div class="form-group" :class="{'form-group--error': $v.form.phone_number.$error }">
                    <label for="phone">Phone:</label>
                    <input type="text" v-model.trim="$v.form.phone_number.$model" class="form__input form-control" id="phone" placeholder="Enter Phone">
                    <small class="error" v-if="!$v.form.phone_number.numeric">Please enter a numerical phone number!</small> <br/>
                    <small class="error" v-if="!$v.form.phone_number.required">Field is required</small>
                    <small class="error" v-if="!$v.form.phone_number.minLength">Phone number must be a minimum of {{$v.form.phone_number.$params.minLength.min}} </small><br/>
                    <small class="error" v-if="!$v.form.phone_number.maxLength">Phone number must be greater than {{$v.form.phone_number.$params.maxLength.max}} </small>
                    </div>

                    <div class="form-group" :class="{'form-group--error': $v.form.address.$error }">
                    <label for="address">Address:</label>
                    <input type="text" v-model.trim="$v.form.address.$model" class="form__input form-control" id="address" placeholder="Enter Address">
                    <small class="error" v-if="!$v.form.address.required">Field is required</small>
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>    
</template>
<script>
import modelFactory from "@/services/resources/resourceFactory.js";
import { email, required, maxLength, minLength, numeric } from 'vuelidate/lib/validators';
export default {
    name: "PatientForm",
    data(){
        return {
            form: {
                first_name: "",
                family_name: "",
                middle_name: "",
                gender: "Male",
                email: "",
                phone_number: "",
                address: ""
            }
        }
    },
    validations:{        
        form:{
            email: {
                required,
                email
            },
            phone_number: {
                required,
                numeric,
                minLength: minLength(8),
                maxLength: maxLength(15)
            },
            first_name: {
                required,
                minLength: minLength(4)
            },
            family_name: {
                required,
                minLength: minLength(4)
            },
            address: {
                required
            }
        }
    },
    methods:{
        register(){
            this.$v.$touch()
            if (this.$v.$invalid) { 
                this.$dialogs.alert("Please correct errors!",{title:'Error', size:"sm"})
                            .then(res => console.log(res))
                return 
            }
            
            const register = modelFactory.get('patients');
            register.add(this.form)
                    .then(response => {
                        const patientName = `${this.form.first_name} ${this.form.family_name}`;
                        this.$dialogs.alert(`${patientName} has been registered!`)
                            .then(res => console.log(res))
                        console.log(response);
                    }).catch(err => {
                        const status = err.response.status;
                        const message = err.response.data.data;
                        this.$dialogs.alert(message,{title:status, size:"sm"})
                            .then(res => console.log(res))
                    })
        }
    }
}
</script>