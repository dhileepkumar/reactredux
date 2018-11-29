import React, { Component } from 'react';
import { Col, PanelGroup, Panel } from 'react-bootstrap';
import { Field } from 'redux-form';
import ProductsList from '../../ProductBrowser/list';

var product_filter = [
    'Name filter', 'Brand filter', 'Price filter'
];
var product_status_filter = [
    {'label': '', 'value': 0},
    {'label': 'Saved', 'value': 1},
    {'label': 'Submitted for Approval', 'value': 2},
    {'label': 'Trusted Source', 'value': 3},
    {'label': 'Submitted for Publication', 'value': 4},
    {'label': 'For Review', 'value': 6}
];


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: '1'
          };
    }
    
    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    componentDidMount(){
     
        var token_value={
            token:this.props.token
        }
         this.props.PoductListing(token_value);
         this.props.CategoriesList(token_value);
    }

    getExtractList(listdetails, field_name){
        var main_details='';
        if(listdetails.length){
            main_details = listdetails.map((list,index)=>{
                return  <div className="inline-checkbox" key={index}>
                            <Field name={field_name} id="product_category" component="input" type="checkbox" value={list.category_id}/>
                            <label className="">{list.category_name}</label>
                    </div>
            })

            return main_details;
        }
        return main_details;
    }

    render(){
        return   <div>
        <form id="filter_options_form">
           <div className="top_search">
              <Field type="text" id="search_terms" className="form-control" name="search_terms" placeholder="Search Product / Brand / GTIN" component="input" />
              <div className="dwnbtn_group">
                 <a className="btn btn-primary basket_retailer" href=""><i className="fa fa-shopping-cart"></i>   <span>Basket </span></a>
                 <a className="btn btn-primary" href=""><i className="fa fa-download"></i><span> Export to Excel</span></a>
              </div>
           </div>
           <div className="step_2main">
              <div className="container-fluid">
                 <div className="row no-gutter">
                    <Col xs={12} sm={3}>
                    <div className="step_2mainfitler">
                       <div className="form-group">
                          <label>Status</label>
                          <Field id="product_status" name="product_status" data-placeholder=" " className="form-control custom_select select_filters" component="select">
                             {product_status_filter.map((item, index) => (
                             <option key={index} value={item.value}>{item.label}</option>
                             ))}
                          </Field>
                       </div>
                       <PanelGroup accordion id="ct_accordion" activeKey={this.state.activeKey} onSelect={this.handleSelect} >
                          <Panel eventKey="1">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Category
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <div className="inline-checkbox">
                                   <Field name="product_category" id="product_category" component="input" type="checkbox"/>
                                   <label className="">Category</label>
                                </div>
                             </Panel.Body>
                          </Panel>
                          <Panel eventKey="2">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Subcategory
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <div className="inline-checkbox">
                                   <Field name="subcategory" id="subcategory" component="input" type="checkbox"/>
                                   <label className="">Subcategory</label>
                                </div>
                             </Panel.Body>
                          </Panel>
                          <Panel eventKey="3">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Brands
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <div className="inline-checkbox">
                                   <Field id="brands" name="brands" component="input" type="checkbox"/>
                                   <label className="">Brands</label>
                                </div>
                             </Panel.Body>
                          </Panel>
                          <Panel eventKey="4">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Sort Sequence
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <div className="inline-checkbox">
                                   <Field id="sort_order" name="sort_order" data-placeholder=" " className="form-control custom_select select_filters" component="select">
                                      <option value="asc">A - Z</option >
                                      <option value="desc">Z - A</option >
                                   </Field>
                                </div>
                             </Panel.Body>
                          </Panel>
                       </PanelGroup>
                      
                    </div>
                    </Col>
                    <ProductsList {...this.props} />
                 </div>
              </div>
           </div>
        </form>
     </div>
        
    }
}

export default ProductFilters;

