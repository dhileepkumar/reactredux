import {SUB_CATEGORY_REQUESTED,SUB_CATEGORY_RECEIVED,SUB_CATEGORY_ERROR} from '../Actions/Actions';
const initailstate = {
    cu_subcategorylist:[],
    shr_subcategorylist:[],
    case_subcategorylist:[],
    pallet_subcategorylist:[],
    message:''
}

const subcategorylistingreducer = (state = initailstate, action) =>{
    switch(action.type){

        case SUB_CATEGORY_REQUESTED:
        return {...state, message:action.payload};

        case SUB_CATEGORY_RECEIVED:
        return Object.assign({}, state, action.payload);

        case SUB_CATEGORY_ERROR:
        return {...state, message:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default subcategorylistingreducer;

