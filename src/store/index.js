import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    user : {},
    token: "",
    dateFilter: {
      start_date : "",
      end_date: ""
    },
    patientAllocation: {
       id : 0,
       first_name: "",
       last_name: "",
       isExpired: true
    },
    encounterRegister: {
      allocation_id: 0,
      patient_id: 0,
      patient_first_name: "",
      patient_last_name: "",
      isExpired: true
    }
  },
  getters: {
      user: state => state.user,
      token: state => state.auth
  },
  mutations: {
    startPatientEncounter(state, allocation){
      state.encounterRegister.allocation_id = allocation.allocation_id;
      state.encounterRegister.patient_id = allocation.patient_id;
      state.encounterRegister.patient_first_name = allocation.patient_first_name;
      state.encounterRegister.patient_last_name = allocation.patient_last_name;
      state.encounterRegister.isExpired = false;
    },
    expireEncounterRegistration(state){
      state.encounterRegister.isExpired = true;
    },
    allocatePatient(state, patient){
        state.patientAllocation.id = patient.id;
        state.patientAllocation.first_name = patient.first_name;
        state.patientAllocation.last_name = patient.last_name;
        state.patientAllocation.isExpired = false;
    },
    expirePatientAllocation(state){
        state.patientAllocation.isExpired = true
    },
    setStartFilterDate(state, date){
      state.dateFilter.start_date = date;
    },
    setEndFilterDate(state, date){
      state.dateFilter.end_date = date
    },
    removeToken(state){
      state.token = {}
    },
    removeUser(state){
      state.user = {}
    },
    login(state){
      state.isLogged = true
    },
    logout(state){
      state.isLogged = false
    },
    setUser(state, user){
      state.user = user 
    },
    setToken(state, token){
      state.auth = token
    }
  },
  actions: {
      
  },
  modules: {
  }
})
