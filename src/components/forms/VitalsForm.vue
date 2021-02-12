<template>
    <div>
        <div class="card">
            <div class="card-header">Vitals for: <b>{{patient_first_name}} {{patient_last_name}}</b></div>
        <div class="card-body">
            <form @submit="add()">
                <label for="sb-wrap">Weight(Kgs)</label>
                <b-form-spinbutton v-model="form.weight" id="sb-wrap" wrap min="1" max="500" placeholder="--"></b-form-spinbutton>
                
                <label for="sb-wrap">Temperature (Degrees)</label>
                <b-form-spinbutton v-model="form.temperature" id="sb-wrap" wrap min="1" max="100" placeholder="--"></b-form-spinbutton>

                <label for="sb-wrap">Height (cm)</label>
                <b-form-spinbutton v-model="form.height" id="sb-wrap" wrap min="1" max="250" placeholder="--"></b-form-spinbutton>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>  
        </div>  
    </div>
</template>

<script>
import modelFactory from "@/services/resources/resourceFactory.js";
export default {
    name: "VitalsForm",
    data(){
        return {
            form: {
                allocation_id: this.allocation_id,
                patient_id: this.patient_id,
                weight: 0,
                height: 0,
                BP: 0,
                temperature: 0
            }
        }
    },
    props: ['allocation_id', 'patient_id', 'patient_first_name', 'patient_last_name'],
    methods: {
        add(){
            const encounter = modelFactory.get('encounters');
            encounter.add(this.form)
                    .then(response => {
                        this.$dialogs.alert(`Vitals have been saved!`)
                                .then(res => console.log(res))
                            console.log(response);
                        this.$router.push({path:'/allocations'});    
                    }).catch(err => {
                        const status = err.response.status;
                        const message = err.response.data.data;
                        this.$dialogs.alert(message,{title:status, size:"sm"})
                                .then(res => console.log(res))
                    })
        }
    }
}
</script>