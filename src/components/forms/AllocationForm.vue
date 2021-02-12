<template>
    <div>
        <div class="card">
            <div class="card-header">Allocate patient: <b>{{patient_first_name}} {{patient_last_name}}</b></div>
            <div class="card-body">
                <form v-on:submit.prevent v-on:submit="allocate()">
                    <div class="form-group">
                        <label for="prioties">Priorities:</label>
                        <select id="priorities" class="form-control" v-model="form.priority">
                            <option v-for="(priority, id) in priorities" :key="id" :value="id">{{priority}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="example-datepicker">Appointment Date</label>
                        <b-form-datepicker id="example-datepicker" v-model="form.allocation_date" class="mb-2"></b-form-datepicker>
                    </div>
                    <p/>
                    <div class="selection_list">
                        <b>Select user:</b>
                        <p/>
                        <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Assign</th>
                            <th scope="col">Username</th>
                            <th scope="col">Phonenumber</th>
                            <th scope="col">Role</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, id) in users" :key="id">
                            <td> <input type="radio" name="user" @click="onPersonelChecked(user.id)"/> </td>   
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td> 
                            <td>{{user.role_name}}</td>
                            <td>{{user.status}}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Allocate</button>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
import modelFactory from "@/services/resources/resourceFactory.js";

export default {
    name: "AllocationForm",
    data(){
        return {
            form: {
                assigned_to: 0,
                priority: "Normal",
                allocation_date: "",
                patient_id: this.patient_id
            },
            priorities: {
                "Normal" : "Normal",
                "Emergency": "Emergency"
            },
            patients: [],
            users: []
        }
    },
    props: ['patient_id', 'patient_first_name', 'patient_last_name'],
    methods:{
        getUsers(){
            const users = modelFactory.get('users');
            users.index().then(response =>{
                this.users = response.data.data
            })
        },
        getPatients(){
            const patients = modelFactory.get('patients');
            patients.index().then(response => {
                this.patients = response.data.data
                console.log(this.patients);
            }) 
        },
        onPersonelChecked(id){
            this.form.assigned_to = id
        },
        allocate(){
            if (!this.form.assigned_to){
                this.$dialogs.alert(`Please select a medical personel`)
                    .then(res => console.log(res))
            }else{
                const allocation = modelFactory.get('allocations');
                allocation.add(this.form)
                        .then(response => {
                            this.$dialogs.alert(`Patient allocation successful`)
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
    },
    mounted(){
        this.getUsers();
        this.getPatients();
    }
}
</script>
<style scoped>
    .selection_list{
        height: 250px;
        overflow-y: scroll;
        align-content: center;
    }
</style>