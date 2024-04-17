import * as types from "./mutation-types";

export const ActionSetCategory = ({ commit }, payload) => {
    commit(types.SET_CATEGORY, payload);
}