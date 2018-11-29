import {EXCEL_FILE_UPLOAD_REQUEST, EXCEL_FILE_UPLOADED, EXCEL_FILE_UPLOAD_ERROR} from '../Actions/Actions';

const initailstate = {
    file:'',
    uploadmessage:'',
	code:0
}

const UploadExcelReducer = (state = initailstate, action) =>{
    switch(action.type){

        case EXCEL_FILE_UPLOAD_REQUEST:
        return {...state, uploadmessage:action.payload};

        case EXCEL_FILE_UPLOADED:
        return Object.assign({}, state, action.payload);

        case EXCEL_FILE_UPLOAD_ERROR:
        return {...state, uploadmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default UploadExcelReducer;

