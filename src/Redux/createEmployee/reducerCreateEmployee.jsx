import { CLOSE_MODAL, CREATE_EMPLOYEE } from "./type"

const initialState = {
    isOpen: false
}

const reducerCreateEmployee = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_MODAL: 
            return {
                ...state,
                isOpen: false
            }
            default: return state
    }
}

export default reducerCreateEmployee