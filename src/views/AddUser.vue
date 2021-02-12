<template>
    <div>
         <nav-bar current-page="users"></nav-bar> <p/>
        <user-form></user-form>
    </div>
</template>
<script>
import UserRegistrationForm from "@/components/forms/UserForm";
import nav from "@/components/layout/UserNavbar";
export default {
    name : "NewUser",
    components:{
       'user-form' : UserRegistrationForm,
       'nav-bar': nav
    }    
}
</script>