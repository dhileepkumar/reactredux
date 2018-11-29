import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import ActionCreators from '../../../Actions/ActionCreators'
import AppStore from '../../../Store/AppStore'
import UploadExcelFiles from './UploadExcelFiles'

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    token:state.auth.token,
    file:state.uploadexcel.file,
    filemessage : state.uploadexcel.uploadmessage,
    code : state.uploadexcel.code
})
  
  
const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    UploadExcel: (values) => dispatch(ActionCreators.UploadExcel(values)),  
})
  
const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(UploadExcelFiles);

class UploadExcel extends Component{
    render(){
        return  <Provider store={AppStore}><MainComponent /></Provider>
    }
}

export default UploadExcel