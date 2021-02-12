<template>
    <div>
        <nav-bar current-page="allocations"></nav-bar> <p/>
        <router-link :to="{path:`/allocations/add`}"><div class="btn btn-primary btn-sm">Add new</div></router-link>
        <p/>
        <allocations-table :items="allocations"></allocations-table>
        
    </div>
</template>
<script>
import modelFactory from "@/services/resources/resourceFactory";
import Allocation from "@/components/tables/allocations";
import nav from "@/components/layout/UserNavbar";
export default {
    name: "Allocations",
    components: {
        'nav-bar': nav,
        'allocations-table' : Allocation
    },
    data(){
         return {
             allocations: []
         }
     },
     methods: {
         getAllocations(){
             const allocations = modelFactory.get('allocations');
             allocations.index().then(response => {
                 this.allocations = response.data.data;
             });
         }
     },
     mounted(){
         this.getAllocations()
     }
}
</script>