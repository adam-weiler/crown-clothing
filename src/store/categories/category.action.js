import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const setCategoriesMap = (categegoriesMap) => createAction( // Set your reducer with new categories from the map payload.
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categegoriesMap)
);