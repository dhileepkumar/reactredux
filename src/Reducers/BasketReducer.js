import {ADD_OR_EDIT_BASKET_REQUESTED, ADD_OR_EDIT_BASKET_RECEIVED,ADD_OR_EDIT_BASKET_ERROR
} from '../Actions/Actions';
const initailstate = {
    basketcount : 0,
    basketmessage : ''
}

const basketreducer = (state = initailstate, action) =>{
    switch(action.type){

        case ADD_OR_EDIT_BASKET_REQUESTED:
        return {...state, basketmessage:action.payload};

        case ADD_OR_EDIT_BASKET_RECEIVED:
        return Object.assign({}, state, action.payload);

        case ADD_OR_EDIT_BASKET_ERROR:
        return {...state, basketmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}

export default basketreducer;

