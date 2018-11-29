import {PRODUCT_FORM_DATA_REQUESTED,PRODUCT_FORM_DATA_RECEIVED,PRODUCT_FORM_DATA_ERROR} from '../Actions/Actions';
const initailstate = {
    form_data:[],
    product_details:[],
    message : '',
	code : 0
}

const loadproductformreducer = (state = initailstate, action) =>{
    switch(action.type){

        case PRODUCT_FORM_DATA_REQUESTED:
        return {...state, message:action.payload};

        case PRODUCT_FORM_DATA_RECEIVED:
        return Object.assign({}, state, action.payload);

        case PRODUCT_FORM_DATA_ERROR:
        return {...state, message:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default loadproductformreducer;

