import { combineReducers } from "redux";
import  addToDoData  from "./Reducers";


const rootReducer = combineReducers({
    addToDoData,
})

export default rootReducer