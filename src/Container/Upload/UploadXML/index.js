import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import ActionCreators from '../../../Actions/ActionCreators'
import AppStore from '../../../Store/AppStore'
import UploadXMLFiles from './UploadXMLFiles'

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    token:state.auth.token,
    xmlfile:state.uploadxml.xmlfile,
    xmlfilemessage : state.uploadxml.xmluploadmessage,
    code : state.uploadxml.code
})
  
  
const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    UploadXML: (values) => dispatch(ActionCreators.UploadXML(values)),  
})
  
const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(UploadXMLFiles);

class UploadXML extends Component{
    render(){
        return  <Provider store={AppStore}><MainComponent /></Provider>
    }
}

export default UploadXML