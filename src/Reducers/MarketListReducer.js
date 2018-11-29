import {MARKET_REQUESTED,MARKET_RECEIVED,MARKET_ERROR} from '../Actions/Actions';
const initailstate = {
    cu_marketlist:[],
    shr_marketlist:[],
    case_marketlist:[],
    pallet_marketlist:[],
    message : ''
}

const marketlistingreducer = (state = initailstate, action) =>{
    switch(action.type){

        case MARKET_REQUESTED:
        return {...state, message:action.payload};

        case MARKET_RECEIVED:
        return Object.assign({}, state, action.payload);

        case MARKET_ERROR:
        return {...state, message:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default marketlistingreducer;

