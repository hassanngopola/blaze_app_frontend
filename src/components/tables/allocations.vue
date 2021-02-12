<template>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Patient</th>
        <th scope="col">Doctor</th>
        <th scope="col">Priority</th>
        <th scope="col">Date</th>
        <th scope="col">Options</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(allocation, id) in items" :key="id">
        <td>{{allocation.first_name}} {{allocation.family_name}}</td>
        <td>{{allocation.user_assigned_to}}</td>
        <td>{{allocation.priority}}</td> 
        <td> {{allocation.allocation_date}}</td>
        <td>
         <button @click="setNewEncounter(
                allocation.id, allocation.patient_id, allocation.first_name, 
                allocation.family_name
                )" 
                class="btn btn-outline-primary btn-sm">
                New Encounter
            </button>
        </td>
        </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
export default {
    name: "Allocations",
    props: {
        items: {
            type: Array
        }
    }, 
    methods: {
        setNewEncounter(allocation_id, patient_id, patient_first_name, patient_last_name){
            this.$store.commit('startPatientEncounter', {
                allocation_id:allocation_id, 
                patient_id: patient_id,
                patient_first_name: patient_first_name,
                patient_last_name: patient_last_name,               
            });
            this.$router.push({path:"/encounters/add"});
        }
    }
}
</script>