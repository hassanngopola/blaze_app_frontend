import request from "@/services/request";
const resource = "roles";

export default {
    get(id){
        return request.get(`${resource}/${id}`);
    },
    index(){
        return request.get(`${resource}`);
    }
}
