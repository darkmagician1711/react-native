import {CHANGE_UNIT_ID_INPUT} from "../action/type";

export default (state = 0, action) => {
    return action.type === CHANGE_UNIT_ID_INPUT
        ? action.payload
        : state
}