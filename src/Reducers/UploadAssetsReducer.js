import {ASSETS_UPLOAD_REQUEST, ASSETS_UPLOADED, ASSETS_UPLOAD_ERROR} from '../Actions/Actions';

const initailstate = {
    assetfiles:'',
    assetfilesstatus: '',
    assetsuploadmessage:'',
	code:0
}

const UploadAssetsReducer = (state = initailstate, action) =>{
    switch(action.type){

        case ASSETS_UPLOAD_REQUEST:
        return {...state, assetsuploadmessage:action.payload};

        case ASSETS_UPLOADED:
        return Object.assign({}, state, action.payload);

        case ASSETS_UPLOAD_ERROR:
        return {...state, assetsuploadmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default UploadAssetsReducer;

