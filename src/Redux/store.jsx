import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import reducerCreateEmployee from "./createEmployee/reducerCreateEmployee";

const rootReducer = combineReducers({
    createEmployee: reducerCreateEmployee 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store