import http from "axios";
import headers from "./headers.js";
import config from "./config.js";

export default {
    request(data){
        data.url = `${config.api}/${data.url}`;
        data.headers = headers.getAuthorizationHeader();
        return http(data);
    },
    post(data, endpoint){
        return this.request({
            method: 'post',
            data: data,
            url: endpoint
        })
    },
    get(endpoint){
        return this.request({
            method: 'get',
            url: endpoint
        })
    }
}