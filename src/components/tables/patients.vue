<template>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Phone</th>
        <th scope="col">Gender</th>
        <th scope="col">Options</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(patient, id) in items" :key="id">
        <td>{{patient.first_name}}</td>
        <td>{{patient.family_name}}</td>
        <td>{{patient.phone_number}}</td> 
        <td>{{patient.gender}}</td>
        <td scope="col"> 
            <button @click="setPatientAllocation(patient.id, patient.first_name, patient.family_name)" class="btn btn-primary btn-sm">
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
    name: "Patients",
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        setPatientAllocation(id, first_name, last_name){
            console.log("name:" + first_name)
            this.$store.commit('allocatePatient', {
                id:id, 
                first_name: first_name,
                last_name: last_name,                
            });
            this.$router.push({path:"/allocations/add"});
        }
    }
}
</script>