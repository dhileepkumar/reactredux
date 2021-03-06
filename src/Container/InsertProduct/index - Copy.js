import React, { Component } from 'react';
import Config from '../../Config';
import {Provider, connect} from 'react-redux';

import InsertForm from './InsertProduct';
import AppStore from '../../Store/AppStore';
import ActionCreators from '../../Actions/ActionCreators';

const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    token:state.auth.token,
    user_type:state.auth.user_type,
    insertmessage:state.product.insertmessage,
    categorylist:state.productoptions.categorylist,
    uomlist:state.productoptions.uomlist,
    countrylist:state.productoptions.countrylist,
    packagingtypelist:state.productoptions.packagingtypelist,
    productoptionsmessage:state.productoptions.productoptionsmessage,
    cu_subcategorylist:state.subcategorylist.cu_subcategorylist,
    shr_subcategorylist:state.subcategorylist.shr_subcategorylist,
    case_subcategorylist:state.subcategorylist.case_subcategorylist,
    pallet_subcategorylist:state.subcategorylist.pallet_subcategorylist,
    cu_marketlist:state.marketlist.cu_marketlist,
    shr_marketlist:state.marketlist.shr_marketlist,
    case_marketlist:state.marketlist.case_marketlist,
    pallet_marketlist:state.marketlist.pallet_marketlist,
})


const mapDispatchToProps = (dispatch) => ({
     AddProduct: (values) => dispatch(ActionCreators.AddProduct(values)),
     ProductOptions: (values) => dispatch(ActionCreators.ProductOptions(values)),
     SubCategoryList: (values,type) => dispatch(ActionCreators.SubCategoryList(values,type)),
     MarketList: (values,type) => dispatch(ActionCreators.MarketList(values,type)),
})
  
const InsertProductComponent  = connect(mapStateToProps, mapDispatchToProps)(InsertForm);

class InsertProduct extends Component {
    
    componentDidMount(){
        document.title=Config.name+' Insert Product';
    }
    render(){
        return  <Provider store={AppStore}><InsertProductComponent/></Provider>
    }
}


export default InsertProduct;


