import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import ActionCreators from '../../../Actions/ActionCreators'
import AppStore from '../../../Store/AppStore'
import UploadAssets from './UploadAssets'

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    token:state.auth.token,
    assetfiles:state.uploadassets.assetfiles,
    assetfilesmessage : state.uploadassets.assetsuploadmessage,
    assetfilesstatus : state.uploadassets.assetfilesstatus,
    code : state.uploadassets.code
})
  
  
const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    UploadAssets: (values) => dispatch(ActionCreators.UploadAssets(values)),  
})
  
const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(UploadAssets);

class UploadAsset extends Component{
    render(){
        return  <Provider store={AppStore}><MainComponent /></Provider>
    }
}

export default UploadAsset