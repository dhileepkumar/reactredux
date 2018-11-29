import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import WebRouter from './Container/WebRouter'
import AppStore from './Store/AppStore'
import ActionCreators from './Actions/ActionCreators'
import './App.css';

const mapStateToProps = (state) => ({
  auth:state.auth.auth,
  name:state.auth.name,
  user_type:state.auth.user_type,
  information_provider_gln:state.auth.information_provider_gln,
  image:state.auth.image,
  token:state.auth.token,
  forgotpassword:state.auth.requestmessage,
  loginmessage:state.auth.loginmessage,
  registermessage:state.auth.registermessage,
  resetmessage:state.auth.resetmessage,
  forgetmessage:state.auth.forgetmessage,
  companyname : state.companyname.companyname,

  logincode:state.auth.logincode,
  registercode:state.auth.registercode,
  forgetcode:state.auth.forgetcode,
  resetcode : state.auth.resetcode,
 
})


const mapDispatchToProps = (dispatch) => ({
  ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
  UserLogin: (values) => dispatch(ActionCreators.userLogin(values)),
  userRegister: (values) => dispatch(ActionCreators.userRegister(values)) ,
  GetCompanyName: () => dispatch(ActionCreators.CompanyName()),
  UserLogout: (values) => dispatch(ActionCreators.userLogout(values)),
  ForgotPassword: (values) => dispatch(ActionCreators.ForgotPassword(values)),
  ResetPassword: (values) => dispatch(ActionCreators.ResetPassword(values)),
})

const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(WebRouter);

class App extends Component {
  render() {
    return <Provider store={AppStore}><MainComponent/></Provider>
  }
}

export default App;
