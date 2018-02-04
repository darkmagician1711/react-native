import {combineReducers} from 'redux'
import changeCategoriesReducer from "./changeCategoriesReducer";
import baseValueReducer from "./baseValueReducer";
import {navigationReducer} from '../AppWithNavigation'
import idInputReducer from "./idInputReducer";
import idResultsReducer from "./idResultsReducer";

export default reducers = combineReducers({
    baseValue : baseValueReducer,
    categories: changeCategoriesReducer,
    idInput: idInputReducer,
    idResult: idResultsReducer,
    nav : navigationReducer
})