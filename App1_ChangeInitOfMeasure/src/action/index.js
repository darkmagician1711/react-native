import {CHANGE_BASE_VALUE, CHANGE_CATEGORIES} from "./type";

export const changeBaseValueAction = newValue => ({
    type: CHANGE_BASE_VALUE,
    payload: newValue
})

export const changeCategoriesAction = newValue => ({
    type: CHANGE_CATEGORIES,
    payload: newValue
})