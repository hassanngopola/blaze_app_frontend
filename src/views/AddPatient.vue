<template>
    <div>
        <nav-bar current-page="patients"></nav-bar> <p/>
        <router-link :to="{path:`/patients`}"><div class="btn btn-primary btn-sm">List patients</div></router-link>
        <p/>
        <patient-form></patient-form>
    </div>
</template>

<script>
import PatientRegistrationForm from "@/components/forms/PatientForm";
import nav from "@/components/layout/UserNavbar";

export default {
    name : "NewPatient",
    components:{
       'patient-form' : PatientRegistrationForm,
       'nav-bar': nav
    }    
}
</script>