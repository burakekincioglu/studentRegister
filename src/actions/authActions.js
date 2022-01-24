export const emailChanged = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'email_changed',
            payload: text
        });
    };
};

export const passwordChanged = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'passwordChanged',
            payload: text
        });
    };
};