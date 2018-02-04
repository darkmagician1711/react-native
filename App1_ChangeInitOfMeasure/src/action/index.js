import {CHANGE_BASE_VALUE, CHANGE_CATEGORIES, CHANGE_UNIT_ID_RESULT, CHANGE_UNIT_ID_INPUT} from "./type";

export const changeBaseValueAction = newValue => ({
    type: CHANGE_BASE_VALUE,
    payload: newValue
})

export const changeCategoriesAction = newValue => ({
    type: CHANGE_CATEGORIES,
    payload: newValue
})

export const changeIdInputAction = newValue => ({
    type: CHANGE_UNIT_ID_INPUT,
    payload: newValue
})

export const changeIdResultAction = newValue => ({
    type: CHANGE_UNIT_ID_RESULT,
    payload: newValue
})

