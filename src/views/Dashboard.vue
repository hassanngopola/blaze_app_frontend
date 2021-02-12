<template>
    <div> 
        <nav-bar current-page="dashboard"></nav-bar> <p/>
        <h4>Attendance report:</h4>
        <date-filter></date-filter>
        <attendance-list :items="list"> </attendance-list>
    </div>
</template>

<script>
import modelFactory from "@/services/resources/resourceFactory";
import AttendanceList from  "@/components/tables/attendance";
import Nav from "@/components/layout/UserNavbar";
import DateFilterer from "@/components/dateFilter";

export default {
     name: "Dashboard",
     components: {
        'nav-bar' : Nav,
        'attendance-list': AttendanceList,
        'date-filter': DateFilterer
     },
     data(){
         return {
             list: []
         }
     },
     methods: {
         getAttendances(data){
             const attendance = modelFactory.get('reports');
             attendance.getAttendance(data).then(response => {
                 this.list = response.data.data;
             });
         }
     },
     mounted(){
         this.getAttendances({});
     },
     created(){
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'setStartFilterDate' || mutation.type === 'setEndFilterDate') {
                const from = state.dateFilter.start_date;
                const to = state.dateFilter.end_date;
                this.getAttendances({'from': from, 'to': to});
            }
        });
     }
}
</script>