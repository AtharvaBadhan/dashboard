
import * as types from "../Actions/DemoActions";

const initialState = {
    navbar : false,
    themechange: true,
}

export default function DemoState(state = initialState, actions) {
    switch (actions.type) {
        case types.UPDATE_NAVBAR: return {
            ...state,
            navbar : actions.payload
        }
        case types.UPDATE_THEMECHANGE: return {
            ...state,
            themechange : actions.payload
        }
        default: return {
            ...state
        }
    }

}