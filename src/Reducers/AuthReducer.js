import {AUTH_SUCCESS, AUTH_FAILED, AUTH_ERROR, AUTH_REQUESTED,
        REQUEST_LOGOUT, LOGGED_OUT, LOGOUTERROR,
        FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_RECEIVED, FORGET_PASSWORD_ERROR,
        RESET_PASSWORD_REQUEST, RESET_PASSWORD_RECEIVED, RESET_PASSWORD_ERROR,
        REGISTER_REQUEST, REGISTER_RECEIVED, REGISTER_ERROR,
    } from '../Actions/Actions';
    
var auth_main_details = (localStorage.getItem('trustedsource'))  ? JSON.parse(localStorage.getItem('trustedsource')) : '';

const initailstate = {
    auth:(auth_main_details) ? true : false,
    token:((auth_main_details)) ? (auth_main_details.token): '',
    name:((auth_main_details)) ? (auth_main_details.first_name): '',
    information_provider_gln:((auth_main_details)) ? (auth_main_details.InformationProviderGLN): '',
    image:((auth_main_details)) ? (auth_main_details.user_image): '',
    user_type:((auth_main_details)) ? (parseInt(auth_main_details.user_type)): '',
    loginmessage:'',
    registermessage:'',
    forgetmessage:'',
    resetmessage:'',
    logincode:'',
    registercode:'',
    forgetcode:'',
    resetcode:'',

}

const authendication = (state = initailstate, action) =>{
    switch(action.type){

        case AUTH_REQUESTED:
        return {...state, loginmessage:action.payload};

        case REQUEST_LOGOUT:
        return {...state, loginmessage:action.payload};

        case AUTH_SUCCESS:
        return Object.assign({}, state, action.payload);

        case LOGGED_OUT:
        return Object.assign({}, state, action.payload);

        case AUTH_FAILED:
        return {...state, loginmessage:action.payload};

        case AUTH_ERROR:
        return {...state, loginmessage:action.payload};

        case LOGOUTERROR:
        return {...state, loginmessage:action.payload};

        
        case REGISTER_REQUEST:
        return {...state, registermessage:action.payload};

        case REGISTER_RECEIVED:
        return Object.assign({}, state, action.payload);

        case REGISTER_ERROR:
        return {...state, registermessage:action.payload};



        case FORGET_PASSWORD_REQUEST:
        return {...state, forgetmessage:action.payload};

        case FORGET_PASSWORD_RECEIVED:
        return Object.assign({}, state, action.payload);

        case FORGET_PASSWORD_ERROR:
        return {...state, forgetmessage:action.payload};


        case RESET_PASSWORD_REQUEST:
        return {...state, resetmessage:action.payload};

        case RESET_PASSWORD_RECEIVED:
        return Object.assign({}, state, action.payload);

        case RESET_PASSWORD_ERROR:
        return {...state, resetmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default authendication;

