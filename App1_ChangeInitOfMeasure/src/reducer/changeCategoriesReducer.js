import {categories} from "./../data.json"
import {CHANGE_CATEGORIES} from "../action/type";

export default (state = 0, action) => {
    return action.type === CHANGE_CATEGORIES
        ? action.payload
        : state;
}