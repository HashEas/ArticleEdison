import * as actionTypes from '../action/errorActions';

const initialState = {
    error:""
};


const showError = (state, action) => {
    return {
        error: action.error
    };
};

const hideError = (state) => {
    return {
        error: ""
    };
};

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOW_ERROR: return showError(state, action);
        case actionTypes.HIDE_ERROR: return hideError(state, action);
        default:
            return state;
    }
};

export default authReducer;