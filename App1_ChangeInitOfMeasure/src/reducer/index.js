import {combineReducers} from 'redux'
import changeCategoriesReducer from "./changeCategoriesReducer";
import baseValueReducer from "./baseValueReducer";

export default reducers = combineReducers({
    baseValue : baseValueReducer,
    categories: changeCategoriesReducer
})