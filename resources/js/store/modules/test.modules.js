import {
    GET_NUMBER, SET_PROFILE
} from "../actions/test.actions";

import api from "../../config";

const state = {
    number: null,
    profile: {}
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
    },
    [SET_PROFILE]: (state, data) => {
        state.profile = data;
    }
};

export default {
    state,
    actions,
    mutations,
}
