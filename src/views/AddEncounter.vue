<template>
    <div>
         <nav-bar current-page="Vitals"></nav-bar> <p/>
        <vitals-form
            :allocation_id="encounterInfo.allocation_id"
            :patient_id="encounterInfo.patient_id"
            :patient_first_name="encounterInfo.patient_first_name"
            :patient_last_name="encounterInfo.patient_last_name"
        ></vitals-form>
    </div>
</template>
<script>
import VitalsForm from "@/components/forms/VitalsForm";
import nav from "@/components/layout/UserNavbar";
export default {
    name : "NewEncounter",
    components:{
       'vitals-form' : VitalsForm,
       'nav-bar': nav
    },data(){
        return {
            encounterInfo: {}
        }
    },
    methods: {
        getEncounter(){
            this.encounterInfo = this.$store.state.encounterRegister;
            this.$store.commit('expireEncounterRegistration');
        },
        checkEncounter(){
            this.encounterInfo = this.$store.state.encounterRegister;
            this.encounterInfo.isExpired ? this.$router.push({path:"/allocations"}) : NaN;
        }
    },
    mounted(){
        this.getEncounter();
    },
    created(){
        this.checkEncounter()
    }
}
</script>