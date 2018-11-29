import {NUTRITION_REQUESTED, NUTRITION_RECEIVED, NUTRITION_ERROR} from '../Actions/Actions';
const initailstate = {
    nutritioninformation:[],
    nutritionmessage : ''
}

const nutritionreducer = (state = initailstate, action) =>{
    switch(action.type){

        case NUTRITION_REQUESTED:
        return {...state, nutritionmessage:action.payload};

        case NUTRITION_RECEIVED:
        return Object.assign({}, state, action.payload);

        case NUTRITION_ERROR:
        return {...state, nutritionmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default nutritionreducer;

