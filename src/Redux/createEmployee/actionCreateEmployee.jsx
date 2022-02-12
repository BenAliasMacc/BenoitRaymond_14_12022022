import { CLOSE_MODAL, CREATE_EMPLOYEE } from "./type";

export const createEmployee = () => {
    return {
        type: CREATE_EMPLOYEE
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}