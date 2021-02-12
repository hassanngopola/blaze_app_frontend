import request from "@/services/request";

const resource = "allocations";

export default {
    add(data){
        return request.post(data, `${resource}`);
    },
    get(id){
        return request.get(`${resource}/${id}`);
    },
    index(){
        return request.get(`${resource}`);
    }
}
