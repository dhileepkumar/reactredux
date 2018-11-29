import {COMPANY_NAME_REQUESTED, COMPANY_NAME_RECIEVED, COMPANY_NAME_ERROR} from '../Actions/Actions';

const initailstate = {
    companyname:'',
    companymessage:'',
}

const compnayname = (state = initailstate, action) =>{
    switch(action.type){

        case COMPANY_NAME_REQUESTED:
        return {...state, companymessage:action.payload};

        case COMPANY_NAME_RECIEVED:
        return Object.assign({}, state, action.payload);

        case COMPANY_NAME_ERROR:
        return {...state, companymessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default compnayname;

