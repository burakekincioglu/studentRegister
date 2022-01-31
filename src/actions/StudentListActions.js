import firebase from "firebase";
import { STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from "./types";



export const studentChanged = ({props, value}) => {

    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value} // reducer'a props ve value gönderilecek
        });
    };

};

export const StudentCreate = ({ name, surname, no, sube }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/users/${currentUser.uid}/students`)
        .push({ name, surname, no, sube })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
        })
    }
};