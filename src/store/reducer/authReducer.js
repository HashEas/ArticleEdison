import * as actions from '../action/authActions';

const initialState = {
    token: null,
    activeUser: null,
    authenticated: false
};


const authSuccess = (state, action) => {
    return {
        ...state,
        authenticated: true
    };
};

const authFail = (state, action) => {
    return {
        ...state,
        authenticated: false
    };
};

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actions.AUTH_SUCCESS: return authSuccess(state, action);
        case actions.AUTH_FAIL: return authFail(state, action);
        default:
            return state;
    }
};

export default authReducer;