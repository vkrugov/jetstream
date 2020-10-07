import {
    GET_NUMBER
} from "../actions/test.actions";

import api from "../../config";

const state = {
    number: null,
};

const actions = {
    [GET_NUMBER]: ({commit}) => {
        return new Promise((resolve, reject) => {
            api.get('/test/get-number')
                .then((response) => {
                    commit(GET_NUMBER, response.data);
                })
                .catch(err => {
                    reject(err);
                })
        });
    },
};

const mutations = {
    [GET_NUMBER]: (state, data) => {
        state.number = data;
    }
};

export default {
    state,
    actions,
    mutations,
}
