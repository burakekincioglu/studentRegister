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
        dispatch({ // dispatch burada reducer'ı ayağa kaldırmak için var
            type: 'passwordChanged',
            payload: password
        });
    };
};