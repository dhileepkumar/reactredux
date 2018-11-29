import {EXPORT_EXCEL_REQUESTED,EXPORT_EXCEL_RECEIVED,EXPORT_EXCEL_ERROR} from '../Actions/Actions';

const initailstate = {
    excelexportmessage:'',
}

const ExcelExportReducer = (state = initailstate, action) =>{
    switch(action.type){

        case EXPORT_EXCEL_REQUESTED:
        return {...state, excelexportmessage:action.payload};

        case EXPORT_EXCEL_RECEIVED:
        return Object.assign({}, state, action.payload);

        case EXPORT_EXCEL_ERROR:
        return {...state, excelexportmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default ExcelExportReducer;

