import { STUDENT_CHANGED } from "./types";

export const studentChanged = ({props, value}) => {

    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value} // reducer'a props ve value gönderilecek
        });
    };

};