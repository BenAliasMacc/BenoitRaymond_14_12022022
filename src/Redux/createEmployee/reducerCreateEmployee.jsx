import { CREATE_EMPLOYEE } from "./type"

const initialState = []

const reducerCreateEmployee = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            state = [...state, action.payload];
                return state;
            default: 
                return state
    }
}

export default reducerCreateEmployee