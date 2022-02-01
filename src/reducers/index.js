import { combineReducers } from "redux";
import authReducers from "./authReducers";
import StudentListReducer from "./StudentCreateReducer";
import StudentDataReducers from "./StudentDataReducers";
import StudentUpdateReducers from "./StudentUpdateReducers";

export default combineReducers({
    authResponse: authReducers,
    studentListResponse: StudentListReducer,
    studentDataResponse: StudentDataReducers,
    studentUpdateResponse: StudentUpdateReducers
});
