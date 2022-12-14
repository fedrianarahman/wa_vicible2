import axios from "axios";
import React from "react";
let config = require('./config.json');
export const ApiService = {

    get: (url, param) => {
        return axios.get();
    },
    post: async (url, params, configLocal) => {
        const cekToken = localStorage.getItem("token");
        const localConfigAxios = {
            headers: {
                'Authorization': `Bearer ${cekToken}`,
            },
            ...configLocal
            /*

                params : {...}
            */
        }


        return await axios.post(config.host + url, params, localConfigAxios);
    },
}
