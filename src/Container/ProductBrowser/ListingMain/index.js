import React, { Component } from 'react';
import ProductsList from '../../ProductBrowser/list';
import { Col } from 'react-bootstrap';
import Filters from '../Filters';
import serialize from 'form-serialize';
import Pagination from '../../../Components/Pagination';
import Config from '../.././../Config';
import Basket from '../Basket';
import Loader from '../../../Components/Loader';

class ListingMain extends Component {
    constructor(props){
        super(props);
        this.filterProducts = this.filterProducts.bind(this);
        this.filterProductsPagination = this.filterProductsPagination.bind(this);
        this.manageBasket = this.manageBasket.bind(this);
        this.exportExcel = this.exportExcel.bind(this);
        this.state = {
            isLoading: true
        };

    }

    static getDerivedStateFromProps(props,state){
        if(props.productsmessage !== ''){
            return{
                isLoading:false
            }
        }else{
            return null;
        }
    }

    componentDidMount(){
        this.props.ResetStateMessage('update_product');
        this.props.ResetStateMessage('edit_product');
        var token_value={
            token:this.props.token
        }
        //this.props.ProductListing(token_value);
        // this.filterProducts();
        let product_status = (this.props.match.params.status) ? this.props.match.params.status : '';
        this.filterProducts('',product_status);
        this.props.FilterDataList(token_value);
        if(this.props.user_type === Config.userTypes.Retailer){
            this.manageBasket();
        }
    }

    filterProducts(e, status = ''){
        var form = document.querySelector('#product-browser');
        var form_fields = serialize(form,{ hash: true });
        form_fields.token = this.props.token;
        form_fields.record_limit = this.props.recordlimit;
        if(status !== '' && status !== 'All Active' && status !== 'desc' && status !== 'asc') {
            form_fields.product_status = [status];
        }
        this.setState({ isLoading : true});
        this.props.ProductListing(form_fields);
    }

    filterProductsPagination(pagenumber){
        var form = document.querySelector('#product-browser');
        var form_fields = serialize(form,{ hash: true });
        form_fields.token = this.props.token;
        form_fields.page_number = pagenumber;
        form_fields.record_limit = this.props.recordlimit;
        this.setState({ isLoading : true});
        this.props.ProductListing(form_fields);
    }

    manageBasket(gtin='',action=''){
        if(action === ''){
            action = 'count';
        }
        var form_fields={
            token:this.props.token,
            action : action,
            product_gtin : gtin
        }
        this.props.ManageBasket(form_fields);
    }

    exportExcel() {
        let values = {
            token:this.props.token
        }
        this.props.ExportExcel(values);
    }

    render(){
        return   <div>
        <form onSubmit={this.handleSubmit} id="product-browser">
            <Loader showloader={this.state.isLoading}/>
           <div className="top_search">
              <input onKeyUp={this.filterProducts} type="text" id="search_terms" className="form-control" name="search_terms" placeholder="Search Product / Brand / GTIN"/>
              <Basket usertype={this.props.user_type} basketcount = {this.props.basketcount} filterProducts={this.filterProducts} export={this.exportExcel}/>
           </div>
           <div className="step_2main">
              <div className="container-fluid">
                 <div className="row no-gutter">
                    <Filters {...this.props} filterProducts={this.filterProducts}/>
                    <Col xs={12} sm={9}>
                        <ProductsList {...this.props} manageBasket={this.manageBasket}/>
                         <Pagination {...this.props} filterProductsPagination={this.filterProductsPagination} />
                    </Col>
                 </div>
              </div>
           </div>
        </form>
     </div>
        
    }
}

export default ListingMain;

