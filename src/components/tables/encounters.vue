<template>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Patient</th>
        <th scope="col">Weight</th>
        <th scope="col">Height</th>
        <th scope="col">Temp Reading</th>
        <th scope="col">Date</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(encounter, id) in items" :key="id">
        <td>{{encounter.patient_id}}</td>
        <td>{{encounter.weight}}</td>
        <td>{{encounter.height}}</td>
        <td>{{encounter.Temprature}}</td> 
        <td>{{encounter.date}}</td>
        </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
export default {
    name: "Encounters",
    props: {
        items: {
            type: Array
        }
    }
}
</script>