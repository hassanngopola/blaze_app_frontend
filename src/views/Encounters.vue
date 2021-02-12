<template>
    <div> 
         <nav-bar currentPage="encounters"></nav-bar> <p/>
        <router-link :to="{path:`/encounters/add`}"><div class="btn btn-primary btn-sm">Add new</div></router-link>
        <p/>
        <encounters-table :items="encounters"></encounters-table>
    </div>
</template>

<script>
import EncountersTable from "@/components/tables/encounters";
import modelFactory from "@/services/resources/resourceFactory";
import nav from "@/components/layout/UserNavbar";

export default {
     name: "Encounters",
     components: {
        'encounters-table' : EncountersTable,
        'nav-bar' : nav
     },
     data(){
         return {
             encounters: []
         }
     },
     methods: {
         getEncounters(){
             const encounters = modelFactory.get('encounters');
             encounters.index().then(response => {
                 this.encounters = response.data.data;
             });
         }
     },
     mounted(){
         this.getEncounters()
     }
}
</script>