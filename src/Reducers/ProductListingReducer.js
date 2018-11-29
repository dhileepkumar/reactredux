import {PRODUCT_LISTTING_REQUESTED, PRODUCT_LISTTING_RECIEVED, PRODUCT_LISTTING_ERROR} from '../Actions/Actions';
const initailstate = {
    productlisting:[],
    pagenumber:1,
    recordlimit:10,
    totalproducts:23,
    showbasketproducts : 0,
    productlistingmessage:''
}

const productlistingreducer = (state = initailstate, action) =>{
    switch(action.type){

        case PRODUCT_LISTTING_REQUESTED:
        return {...state, productlistingmessage:action.payload};

        case PRODUCT_LISTTING_RECIEVED:
        return Object.assign({}, state, action.payload);

        case PRODUCT_LISTTING_ERROR:
        return {...state, productlistingmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default productlistingreducer;

