import {XML_FILE_UPLOAD_REQUEST, XML_FILE_UPLOADED, XML_FILE_UPLOAD_ERROR} from '../Actions/Actions';

const initailstate = {
    xmlfile:'',
    xmluploadmessage:'',
	code:0
}

const UploadXMLReducer = (state = initailstate, action) =>{
    switch(action.type){

        case XML_FILE_UPLOAD_REQUEST:
        return {...state, xmluploadmessage:action.payload};

        case XML_FILE_UPLOADED:
        return Object.assign({}, state, action.payload);

        case XML_FILE_UPLOAD_ERROR:
        return {...state, xmluploadmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default UploadXMLReducer;

