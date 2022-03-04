import { CREATE_EMPLOYEE } from "./type";

export const createEmployee = data => {
    return {
        type: CREATE_EMPLOYEE,
        payload: data
    }
}