import {DASHBOARD_REQUEST, DASHBOARD_RECEIVED, DASHBOARD_ERROR} from '../Actions/Actions';
const initailstate = {
    dashboardlisting:[],
    dahsboardmessage:'',
}

const DashboardReducer = (state = initailstate, action) =>{
    switch(action.type){

        case DASHBOARD_REQUEST:
        return {...state, dahsboardmessage:action.payload};

        case DASHBOARD_RECEIVED:
        return Object.assign({}, state, action.payload);

        case DASHBOARD_ERROR:
        return {...state, dahsboardmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default DashboardReducer;

