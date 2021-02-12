<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Blaze</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        <li :class="[currentPage===`dashboard` ? 'nav-item active' : 'nav-item']">
            <a class="nav-link" href="#/dashboard">Dashboard <div v-if="currentPage === 'dashboard'"> <span class="sr-only">(current)</span></div></a>
        </li>
        <li :class="[currentPage===`patients` ? 'nav-item active' : 'nav-item']">
            <a class="nav-link" href="#/patients">Create Patient <div v-if="currentPage === 'patients'"> <span class="sr-only">(current)</span></div></a>
        </li>
        <li :class="[currentPage===`users` ? 'nav-item active' : 'nav-item']">
            <a class="nav-link" href="#/users">View Users <div v-if="currentPage === 'users'"> <span class="sr-only">(current)</span></div></a>
        </li>
  
            <li :class="[currentPage===`encounters` ? 'nav-item active' : 'nav-item']">
            <a class="nav-link" href="#/encounters">Vitals <div v-if="currentPage === 'encounters'"> <span class="sr-only">(current)</span></div></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/logout">logout <div v-if="currentPage === 'logout'"> <span class="sr-only">(current)</span></div></a>
        </li>
        </ul>
        <span class="navbar-text">
           <b> {{this.$store.state.user.username}} </b> 
        </span>
    </div>
    </nav>
</template>

<script>
export default {
    name: "UserNavbar",
    props: ['currentPage']
}
</script>