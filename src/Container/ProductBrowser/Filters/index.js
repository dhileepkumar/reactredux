import React, { Component } from 'react';
import { Col, PanelGroup, Panel } from 'react-bootstrap';
import { Field } from 'redux-form';
import Select from 'react-select';

// const StatusList = (props) => {
//     if(props.filterdata.hasOwnProperty('status')){
//         return props.filterdata.status.map((list, index) => {
//                 return <option key={index} value={list.status_id}>{list.status_name}</option>
//         });
//     }
//     return '';
// }

const CategoryList = (props) => {
    if(props.filterdata.hasOwnProperty('main_category')){
        return props.filterdata.main_category.map((list,index)=>{
            return  <div key={index} className="form-group">
                <div className="inline-checkbox">
                        <input name="product_category[]" onClick={props.filterProducts} type="checkbox" value={list.value}/>
                        <label className="">{list.category_name}</label>
                </div></div>
        });
    }
    return '';
}

const SubCategoryList = (props) => {
    if(props.filterdata.hasOwnProperty('sub_category')){
        return props.filterdata.sub_category.map((list,index)=>{
            return  <div key={index} className="form-group">
                <div className="inline-checkbox">
                        <input name="product_sub_category[]" onClick={props.filterProducts} type="checkbox" value={list.value}/>
                        <label className="">{list.category_name}</label>
                </div></div>
        });
    }
    return '';
}

const BrandList = (props) => {
    if(props.filterdata.hasOwnProperty('brands')){
        return props.filterdata.brands.map((list,index)=>{
            return  <div key={index} className="form-group">
                <div className="inline-checkbox">
                        <input name="product_brand_name[]" onClick={props.filterProducts} type="checkbox" value={list.languageSpecificBrandName}/>
                        <label className="">{list.languageSpecificBrandName}</label>
                </div></div>
        });
    }
    return '';
}
class Filters extends Component {
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            removeSelected: true,
			disabled: false,
            value:[],
            rtl: false,
            showbasketproducts:this.props.showbasketproducts
        }
    }

    static getDerivedStateFromProps(props,state){
        if(state.showbasketproducts !== props.showbasketproducts){
            return {
                value:[],
                showbasketproducts:props.showbasketproducts
            }
        }else{
            return {
                showbasketproducts:props.showbasketproducts
            }
        }
    }

    handleSelectChange (value) {
        this.setState({ value }, () => {
            this.props.filterProducts();
        });
        
    }
    render(){
        const { disabled, value, rtl } = this.state;
        return   <Col xs={12} sm={3}>
                    <div className="step_2mainfitler">
                       <div className="form-group">
                           <label>Status</label>
                            <Select id="status-select" 
                            options={this.props.filterdata.status} 
                            clearable={true} 
                            name="product_status[]" 
                            searchable={true} 
                            placeholder={false}
                            disabled={disabled}
                            value={value} 
                            onChange={this.handleSelectChange}
                            rtl={rtl} 
                            multi
                            />
                       </div>
                       <PanelGroup accordion id="ct_accordion" defaultActiveKey="1">
                          <Panel eventKey="1">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Category
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <CategoryList {...this.props}/>
                             </Panel.Body>
                          </Panel>
                          <Panel eventKey="2">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Subcategory
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <SubCategoryList {...this.props}/>
                             </Panel.Body>
                          </Panel>
                          <Panel eventKey="3">
                             <Panel.Heading>
                                <Panel.Title toggle>
                                   Brands
                                </Panel.Title>
                             </Panel.Heading>
                             <Panel.Body collapsible>
                                <BrandList {...this.props}/>
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
                                   <Field id="sort_product" name="sort_product" onChange={this.props.filterProducts} data-placeholder=" " className="form-control custom_select select_filters" component="select">
                                      <option value="asc">A - Z</option >
                                      <option value="desc">Z - A</option >
                                   </Field>
                                </div>
                             </Panel.Body>
                          </Panel>
                       </PanelGroup>
                      
                    </div>
                    </Col>
        
    }
}

export default Filters;

