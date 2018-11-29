import {FILTER_DATA_REQUESTED, FILTER_DATA_RECEIVED, FILTER_DATA_ERROR} from '../Actions/Actions';
const initailstate = {
    filterdata:[],
    filterdatamessage : ''
}

const productfilterreducer = (state = initailstate, action) =>{
    switch(action.type){

        case FILTER_DATA_REQUESTED:
        return {...state, filterdatamessage:action.payload};

        case FILTER_DATA_RECEIVED:
        return Object.assign({}, state, action.payload);

        case FILTER_DATA_ERROR:
        return {...state, filterdatamessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default productfilterreducer;

