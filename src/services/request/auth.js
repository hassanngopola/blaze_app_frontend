import config from '@/services/request/config';

import http from 'axios';

export default {
    login
};

function login(username, password) {
    const requestOptions = {
        url: config.auth,
        method: 'post',
        data: { 
            'username': username, 
            'password': password
        },
    };
    return http(requestOptions)
}

