import React,{Component} from 'react';
import {Provider, connect} from 'react-redux';
import AppStore from '../../Store/AppStore';
import ActionCreators from '../../Actions/ActionCreators'
import Dashbaord from './dashbaord'

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    user_type:state.auth.user_type,
    token:state.auth.token,
    dashboard:state.dashboard.dashboardlisting,
    dahsboardmessage:state.dashboard.dahsboardmessage,
})

const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    DashbaordListing: (values) => dispatch(ActionCreators.userDashboard(values)),
})

const DashbaordComponent  = connect(mapStateToProps, mapDispatchToProps)(Dashbaord);

class DashbaordHolder extends Component{
  render() {
    return <Provider store={AppStore}><DashbaordComponent/></Provider>
  }
}

export default DashbaordHolder;