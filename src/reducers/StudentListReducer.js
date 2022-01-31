import { STUDENT_CHANGED } from "../actions/types";

const INITIAL_STATE = {
    name: '',
    surname: '',
    no: '',
    sube: ''
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value};
    
        default:
            return state;
    }
}