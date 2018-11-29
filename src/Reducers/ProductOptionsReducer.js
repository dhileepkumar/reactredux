import {PRODUCT_OPTIONS_REQUESTED,PRODUCT_OPTIONS_RECEIVED,PRODUCT_OPTIONS_ERROR} from '../Actions/Actions';
const initailstate = {
    cu_categorylist:[],
    shr_categorylist:[],
    case_categorylist:[],
    pallet_categorylist:[],
    uomlist:[],
    countrylist:[],
    packagingtypelist:[],
    productoptionsmessage : ''
}

const productoptionsreducer = (state = initailstate, action) =>{
    switch(action.type){

        case PRODUCT_OPTIONS_REQUESTED:
        return {...state, productoptionsmessage:action.payload};

        case PRODUCT_OPTIONS_RECEIVED:
        return Object.assign({}, state, action.payload);

        case PRODUCT_OPTIONS_ERROR:
        return {...state, productoptionsmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default productoptionsreducer;

