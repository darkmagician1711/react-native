import {CHANGE_UNIT_ID_RESULT} from "../action/type";

export default (state = 0, action) => {
    return action.type === CHANGE_UNIT_ID_RESULT
        ? action.payload
        : state
}