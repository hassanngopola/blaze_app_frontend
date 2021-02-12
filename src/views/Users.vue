<template>
    <div> 
         <nav-bar current-page="users"></nav-bar> <p/>
        <router-link :to="{path:`/users/add`}"><div class="btn btn-primary btn-sm">Add new</div></router-link>
        <p/>
        <users-table :items="users"></users-table>
    </div>
</template>

<script>
import UsersTable from "@/components/tables/users";
import modelFactory from "@/services/resources/resourceFactory";
import nav from "@/components/layout/UserNavbar";

export default {
     name: "Users",
     components: {
        'users-table' : UsersTable,
        'nav-bar' : nav
     },
     data(){
         return {
             users: []
         }
     },
     methods: {
         getUsers(){
             const users = modelFactory.get('users');
             users.index().then(response => {
                 this.users = response.data.data;
             });
         }
     },
     mounted(){
         this.getUsers()
     }
}
</script>