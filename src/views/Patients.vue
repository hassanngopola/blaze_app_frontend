<template>
    <div> 
         <nav-bar currentPage="patients"></nav-bar> <p/>
        <router-link :to="{path:`/patients/add`}"><div class="btn btn-primary btn-sm">Add new</div></router-link>
        <p/>
        <patients-table :items="patients"></patients-table>
    </div>
</template>

<script>
import PatientsTable from "@/components/tables/patients";
import modelFactory from "@/services/resources/resourceFactory";
import nav from "@/components/layout/UserNavbar";

export default {
     name: "Patients",
     components: {
        'patients-table' : PatientsTable,
        'nav-bar' : nav
     },
     data(){
         return {
             patients: []
         }
     },
     methods: {
         getPatients(){
             const patientsModel = modelFactory.get('patients');
             patientsModel.index().then(response => {
                 this.patients = response.data.data;
             });
         }
     },
     mounted(){
         this.getPatients()
     }
}
</script>