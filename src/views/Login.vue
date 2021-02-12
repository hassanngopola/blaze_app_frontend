<template>
    <div>
        <default-navbar></default-navbar> <p/>
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm';
import Navbar from '@/components/layout/DefaultNavbar.vue';

export default {
    name: 'Login',
    components: {
        'login-form': LoginForm,
        'default-navbar' : Navbar
    }
}
</script>