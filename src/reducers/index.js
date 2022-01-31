import { combineReducers } from "redux";
import authReducers from "./authReducers";
import StudentListReducer from "./StudentListReducer";

export default combineReducers({
    authResponse: authReducers,
    studentListResponse: StudentListReducer
});
