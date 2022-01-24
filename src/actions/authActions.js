export const emailChanged = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'email_changed',
            payload: text
        });
    };
};