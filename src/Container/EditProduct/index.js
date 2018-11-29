import React, { Component } from 'react';
import Config from '../../Config';
import { Provider, connect } from 'react-redux';

import EditForm from './EditProduct';
import AppStore from '../../Store/AppStore';
import ActionCreators from '../../Actions/ActionCreators';

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    token: state.auth.token,
    user_type: state.auth.user_type,
    updatemessage: state.product.updatemessage,
    updatecode: state.product.updatecode,
    cu_categorylist: state.productoptions.cu_categorylist,
    shr_categorylist: state.productoptions.shr_categorylist,
    case_categorylist: state.productoptions.case_categorylist,
    pallet_categorylist: state.productoptions.pallet_categorylist,
    uomlist: state.productoptions.uomlist,
    countrylist: state.productoptions.countrylist,
    packagingtypelist: state.productoptions.packagingtypelist,
    productoptionsmessage: state.productoptions.productoptionsmessage,
    cu_subcategorylist: state.subcategorylist.cu_subcategorylist,
    shr_subcategorylist: state.subcategorylist.shr_subcategorylist,
    case_subcategorylist: state.subcategorylist.case_subcategorylist,
    pallet_subcategorylist: state.subcategorylist.pallet_subcategorylist,
    cu_marketlist: state.marketlist.cu_marketlist,
    shr_marketlist: state.marketlist.shr_marketlist,
    case_marketlist: state.marketlist.case_marketlist,
    pallet_marketlist: state.marketlist.pallet_marketlist,
    form_data: state.loadformdata.form_data,
    product_details: state.loadformdata.product_details,
    nutritions: state.nutritionreducer.nutritioninformation,
})


const mapDispatchToProps = (dispatch) => ({
    UpdateProduct: (values) => dispatch(ActionCreators.UpdateProduct(values)),
    ProductOptions: (values) => dispatch(ActionCreators.ProductOptions(values)),
    SubCategoryList: (values, type) => dispatch(ActionCreators.SubCategoryList(values, type)),
    MarketList: (values, type) => dispatch(ActionCreators.MarketList(values, type)),
    loadFormData: (values) => dispatch(ActionCreators.loadFormData(values)),
    loadNutritionData: (values) => dispatch(ActionCreators.loadNutritionData(values)),
    ResetStateMessage: (values) => dispatch(ActionCreators.ResetStateMessage(values)),
})

const EditProductComponent = connect(mapStateToProps, mapDispatchToProps)(EditForm);

class EditProduct extends Component {

    componentDidMount() {
        document.title = Config.name + ' Edit Product';
    }
    render() {
        return <Provider store={AppStore}><EditProductComponent {...this.props} /></Provider>
    }
}


export default EditProduct;


