<template>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">User</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col" class="text-center bg-success">Patients Attended</th>
        <th scope="col" class="text-center bg-danger">Patients Unattended</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(user, id) in items" :key="id">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role_name}}</td> 
        <td>{{user.attended_to}}</td>
        <td>{{user.unattended_to}}</td>
        </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
export default {
    name: "AttendanceList",
    props: {
        items: {
            type: Array
        }
    }
}
</script>