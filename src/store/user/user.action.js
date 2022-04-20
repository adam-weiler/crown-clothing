import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => // Receives a user object. Creates and returns back an object where the type is this user-action string, and the value is user for payload.
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);