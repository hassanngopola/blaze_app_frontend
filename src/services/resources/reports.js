import request from "@/services/request";

const resource = "reports";

export default {
    getAttendance(data){
        return request.post(data, `${resource}/patient_allocation`);
    },
    getEncountersByStaff(id){
        return request.post({staff_id: id}, `${resource}/encounters_by_staff`);
    }
}
