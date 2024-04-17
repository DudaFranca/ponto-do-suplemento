import * as types from "./mutation-types";

export default {
    [types.SET_CATEGORY](state, payload) {
        state.category = payload;
    }
}