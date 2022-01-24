export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: 'email_changed',
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: 'passwordChanged',
            payload: password
        });
    };
};