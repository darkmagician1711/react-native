import {CHANGE_BASE_VALUE} from "../action/type";

export default (state = 0, action) => {
    return action.type === CHANGE_BASE_VALUE
        ? action.payload
        : state
}

