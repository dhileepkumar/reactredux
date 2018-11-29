import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import ActionCreators from '../../../Actions/ActionCreators'
import AppStore from '../../../Store/AppStore'
import UploadXMLFiles from './UploadDataNetXMLFiles'

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    token:state.auth.token,
    xmlfile:state.uploadxml.xmlfile,
    xmlfilemessage : state.uploadxml.xmluploadmessage,
    code : state.uploadxml.code
})
  
  
const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    UploadDataNetXML: (values) => dispatch(ActionCreators.UploadDataNetXML(values)),  
})
  
const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(UploadXMLFiles);

class UploadDataNet extends Component{
    render(){
        return  <Provider store={AppStore}><MainComponent /></Provider>
    }
}

export default UploadDataNet;