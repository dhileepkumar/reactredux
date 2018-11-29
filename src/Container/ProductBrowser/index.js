import React, { Component } from 'react';
import Config from '../../Config';
import { Provider, connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ListingMain from './ListingMain';
import AppStore from '../../Store/AppStore';
import ActionCreators from '../../Actions/ActionCreators'

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    token: state.auth.token,
    user_type: state.auth.user_type,
    products: state.productlisting.productlisting,
    pagenumber: state.productlisting.pagenumber,
    recordlimit: state.productlisting.recordlimit,
    totalproducts: state.productlisting.totalproducts,
    showbasketproducts: state.productlisting.showbasketproducts,
    productsmessage: state.productlisting.productlistingmessage,
    basketcount: state.basket.basketcount,
    basketmessage: state.basket.basketmessage,
    filterdata: state.productfilter.filterdata,
    filterdatamessage: state.productfilter.filterdatamessage,
    excelexportmessage: state.exportexcel.excelexportmessage
})


const mapDispatchToProps = (dispatch) => ({
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
    ProductListing: (values) => dispatch(ActionCreators.ProductListing(values)),
    FilterDataList: (values) => dispatch(ActionCreators.FilterDataList(values)),
    ManageBasket: (values) => dispatch(ActionCreators.ManageBasket(values)),
    ExportExcel: (values) => dispatch(ActionCreators.ExportExcel(values)),
})

const ProductsListComponent = connect(mapStateToProps, mapDispatchToProps)(ListingMain);

class ProductBrowser extends Component {

    componentDidMount() {
        document.title = Config.name + ' Product Browser ';
    }
    render() {
        return <Provider store={AppStore}><ProductsListComponent {...this.props} /></Provider>
    }
}


export default reduxForm({
    form: 'ProductFilters',
})(ProductBrowser);


