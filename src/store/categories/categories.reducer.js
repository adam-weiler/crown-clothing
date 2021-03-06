// The Reducer stores the basic data you get from your API.
import { CATEGORIES_ACTION_TYPES } from "./categories.types"

export const CATEGORIES_INITIAL_STATE = {
    categories: [], // The categoriesMap is blank by default.
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE, 
    action = {}
) => { // Receives the state (blank by default), and if no action is passed then use blank object.
    console.log('categoriesReducer was called')
    console.log(action)
    const { type, payload } = action; // Destructive off action.type, action.payload.
    
    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state, // The previous values on the state object.
                categories: payload // And overwrite with the new value.
            };
        default: // Every reducer is called for each action. However, none of the cases matched, so this part of our reducer did not change.
            return state; // Therefore we need to return the state.
    }
}