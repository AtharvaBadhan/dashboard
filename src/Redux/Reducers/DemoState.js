
import * as types from "../Actions/DemoActions";

const initialState = {
    navbar : false,
}

export default function DemoState(state = initialState, actions) {
    switch (actions.type) {
        case types.UPDATE_NAVBAR: return {
            ...state,
            navbar : actions.payload
        }
        default: return {
            ...state
        }
    }

}