<template>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(user, id) in items" :key="id">
        <th scope="row">{{id}}</th>
        <td>{{user.username}}</td>
        <td>{{user.role_name}}</td>
        <td>{{user.email}}</td> 
        <td>{{user.status}}</td>
        </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
export default {
    name: "UserList",
    props: {
        items: {
            type: Array
        }
    }
}
</script>