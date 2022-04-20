import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
    // console.log('Dispatched was called')
    // console.log(action)
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, // The previous values on the state object.
                currentUser: payload // And overwrite with the new value.
            }
        default: // Every reducer is called for each action. However, none of the cases matched, so this part of our reducer did not change.
            return state; // Therefore we need to return the state.
    }
};