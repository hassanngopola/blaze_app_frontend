<template>
    <div>
        <div class="card">
            <div class="card-body">
                <form v-on:submit.prevent v-on:submit="filter()" class="form-inline">
                <div class="form-group">
                    <label for="start_date"><b>Start:</b></label>
                    <b-form-datepicker id="start_date" v-model="startDate" class="mb-2"></b-form-datepicker>
                </div>

                <div class="form-group">
                    <label for="pwd"><b>End:</b></label>
                    <b-form-datepicker id="end_date" v-model="endDate" class="mb-2"></b-form-datepicker>
                </div>
                <button type="submit" class="btn btn-secondary">Filter</button>
                </form>
            <div v-show="startDate || endDate">
                    <p/><small> <b>Filtering from:</b> {{startDate}} <b>to:</b> {{endDate}} </small>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DateFilter",
    data(){
        return {
            startDate: "",
            endDate: ""
        }
    },
    props: {
        model : {
            type: String
        },
    },
    methods:{
        filter(){
            this.$store.commit('setStartFilterDate', this.startDate);
            this.$store.commit('setEndFilterDate', this.endDate);
        }
    }
}
</script>