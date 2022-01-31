import { CREATE_REQUEST, STUDENT_CHANGED, CREATE_REQUEST_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    name: '',
    surname: '',
    no: '',
    sube: '',
    loading: false
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value};
        case CREATE_REQUEST:
            return  { ...state, loading: true};
        case CREATE_REQUEST_SUCCESS:
            return { ...state, loading: false};
        default:
            return state;
    }
}