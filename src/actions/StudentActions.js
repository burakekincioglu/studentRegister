import firebase from "firebase/app";
import { STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS, STUDENT_LIST_DATA_SUCCESS, UPDATE_REQUEST,  UPDATE_REQUEST_SUCCESS} from "./types";
import { Actions } from "react-native-router-flux";



export const studentChanged = ({props, value}) => {

    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value} // reducer'a props ve value gönderilecek
        });
    };

};

export const studentCreate = ({ name, surname, no, sube }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/users/${currentUser.uid}/students`)
        .push({ name, surname, no, sube })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();//bir önceki sayfaya dönmeyi sağlar. kayıt sayfasından öğrenci listesi sayfasına dönmüş oldu
        })
    }
};

export const studentUpdate = ({ name, surname, no, sube, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: UPDATE_REQUEST });
        firebase.database().ref(`/users/${currentUser.uid}/students/${uid}`)
        .push({ name, surname, no, sube })
        .then(() => {
            dispatch({ type: UPDATE_REQUEST_SUCCESS });
            Actions.pop();//bir önceki sayfaya dönmeyi sağlar. kayıt sayfasından öğrenci listesi sayfasına dönmüş oldu
        })
    }
};

export const studentListData = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/students`)
        .on('value', snapshot => { // data array snapshot ile geliyor
            dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val() }); // payload içine dönen data yı yerleştiriyoruz ve reducer aktif hale geliyo
        });
    };

};