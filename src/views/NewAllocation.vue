<template>
    <div>
        <nav-bar current-page="allocations"></nav-bar> <p/>
        <allocation-form
            :patient_id="patientInfo.id"
            :patient_first_name="patientInfo.first_name"
            :patient_last_name="patientInfo.last_name"
        ></allocation-form>
    </div>
</template>
<script>
import AllocationForm from "@/components/forms/AllocationForm.vue";
import nav from "@/components/layout/UserNavbar";
export default {
    name: "NewAllocation",
    components: {
       'allocation-form' : AllocationForm,
       'nav-bar': nav
    },
    data(){
        return {
            patientInfo: {}
        }
    },
    methods: {
        getPatient(){
            this.patientInfo = this.$store.state.patientAllocation;
            this.$store.commit('expirePatientAllocation');
        },
        checkPatientAllocation(){
            this.patientInfo = this.$store.state.patientAllocation;
            this.patientInfo.isExpired ? this.$router.push({path:"/patients"}) : NaN;
        }
    },
    mounted(){
        this.getPatient();
    },
    created(){
        this.checkPatientAllocation()
    }
}
</script>