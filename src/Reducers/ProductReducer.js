import {INSERT_PRODUCT_REQUESTED, INSERT_PRODUCT_RECEIVED, INSERT_PRODUCT_ERROR,
    UPDATE_PRODUCT_REQUESTED, UPDATE_PRODUCT_RECEIVED, UPDATE_PRODUCT_ERROR
} from '../Actions/Actions';

const initailstate = {
    insertmessage:'',
    insertcode:0,
    updatemessage:'',
    updatecode:0
}

const ProductReducer = (state = initailstate, action) =>{
    switch(action.type){

        case INSERT_PRODUCT_REQUESTED:
        return {...state, insertmessage:action.payload};

        case INSERT_PRODUCT_RECEIVED:
        return Object.assign({}, state, action.payload);

        case INSERT_PRODUCT_ERROR:
        return {...state, insertmessage:action.payload};

        case UPDATE_PRODUCT_REQUESTED:
        return {...state, insertmessage:action.payload};

        case UPDATE_PRODUCT_RECEIVED:
        return Object.assign({}, state, action.payload);

        case UPDATE_PRODUCT_ERROR:
        return {...state, insertmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default ProductReducer;

