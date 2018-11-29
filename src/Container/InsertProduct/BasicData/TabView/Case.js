import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import Common from '../../../../Common';
import RenderSelect from '../../../../Components/SelectField';
import Modal from '../../../../Components/Modal';

export default class Case extends Component {
    constructor(props) {
        super(props);
        this.handleSelectCategory = this.handleSelectCategory.bind(this);
        this.handleSelectSubCategory = this.handleSelectSubCategory.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateOptions = this.updateOptions.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            show_modal: false,
            modal_title: '',
            modal_label: '',
            tabkey: 1,
            modal_for: '',
            modal_value: '',

            categorylist: this.props.case_categorylist,
            cat_selected: '',
            subcategorylist: this.props.case_subcategorylist,
            subcat_selected: '',
            marketlist: this.props.case_marketlist,
            market_selected: ''
        }
    }
    static getDerivedStateFromProps(props) {
        return {
            categorylist: props.case_categorylist,
            subcategorylist: props.case_subcategorylist,
            marketlist: props.case_marketlist,
        }
    }
    handleSelectCategory(type, event) {
        let selected_value = '';
        selected_value = event.target.value;
        if (event.target.value === 'other') {
            this.setState({
                show_modal: true,
                modal_title: 'Main Category',
                modal_label: 'Enter New Category',
                modal_for: 'category',
                modal_value: '',
                modal_error: ''
            });
        } else {
            var sub_category_values = {
                token: this.props.token,
                parent_category: event.target.value
            }
            this.props.SubCategoryList(sub_category_values, type);
            var market_values = {
                token: this.props.token,
                sub_category_name: ''
            }
            this.props.MarketList(market_values, type);
        }

        if (selected_value === '') {
            this.setState({
                cat_selected: selected_value,
                subcategorylist: [],
                subcat_selected: '',
                marketlist: [],
                market_selected: ''
            });
        } else {
            this.setState({
                cat_selected: selected_value,
            });
        }
    }


    handleSelectSubCategory(type, event) {
        let selected_value = '';
        let category_name = '';
        selected_value = event.target.value;
        if (event.target.value === 'other') {
            category_name = document.getElementById('case_category_main').value;
            if (category_name !== '') {
                this.setState({
                    show_modal: true,
                    modal_title: 'Sub Category',
                    modal_label: 'Enter Sub Category',
                    modal_for: 'subcategory',
                    modal_value: '',
                    modal_error: ''
                });
            } else {
                selected_value = '';
                alert('Category name cannot be blank');
            }
        } else {
            var market_values = {
                token: this.props.token,
                sub_category_name: event.target.value
            }
            this.props.MarketList(market_values, type);
        }

        if (selected_value === '') {
            this.setState({
                subcat_selected: selected_value,
                marketlist: [],
                market_selected: ''
            });
        } else {
            this.setState({
                subcat_selected: selected_value,
            });
        }
    }


    handleSelectMarket(type, event) {
        let selected_value = '';
        let category_name = '';
        if (event.target.value !== '') {
            selected_value = event.target.value;
            if (event.target.value === 'other') {
                category_name = document.getElementById('case_sub_category').value;
                if (category_name !== '') {
                    this.setState({
                        show_modal: true,
                        modal_title: 'Market',
                        modal_label: 'Enter New Market',
                        modal_for: 'market',
                        modal_value: '',
                        modal_error: ''
                    });
                } else {
                    selected_value = '';
                    alert('Subcategory name cannot be blank');
                }
            }
        }
        this.setState({
            market_selected: selected_value
        });

    }

    updateValue(event) {
        this.setState({
            modal_value: event.target.value
        });
    }

    handleClose() {
        let modal_for = this.state.modal_for;
        if (modal_for === 'category') {
            this.setState({
                cat_selected: '',
                show_modal: false
            });
        } else if (modal_for === 'subcategory') {
            this.setState({
                subcat_selected: '',
                show_modal: false
            });
        } else if (modal_for === 'market') {
            this.setState({
                market_selected: '',
                show_modal: false
            });
        }
    }

    updateOptions() {
        let modal_for = this.state.modal_for;
        let selected_value = document.getElementById('product_options_modal_case').value;
        if (modal_for !== '') {
            if (selected_value !== '') {
                if (modal_for === 'category') {
                    let obj = this.state.categorylist;
                    obj.push({ 'label': selected_value, 'value': selected_value });
                    this.setState({
                        categorylist: obj,
                        cat_selected: selected_value
                    });
                } else if (modal_for === 'subcategory') {
                    let obj = this.state.subcategorylist;
                    obj.push({ 'label': selected_value, 'value': selected_value });
                    this.setState({
                        subcategorylist: obj,
                        subcat_selected: selected_value
                    });
                } else if (modal_for === 'market') {
                    let obj = this.state.marketlist;
                    obj.push({ 'label': selected_value, 'value': selected_value });
                    this.setState({
                        marketlist: obj,
                        market_selected: selected_value
                    });
                }
                this.setState({ show_modal: false });
            } else {
                this.setState({ modal_error: 'Value cannot be blank' });
            }
        }
    }
    render() {
        return (
            <div className="cunitform">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-5">
                        <div className="pdform_column first_coumn">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Category</label>
                                        <Field selected_value={this.state.cat_selected} custom_options_start={[{ 'label': 'Select Category', 'value': '' }]} custom_options_end={[{ 'label': 'Add New', 'value': 'other' }]} options={this.state.categorylist} onChange={this.handleSelectCategory.bind(this, 'case')} className="form-control hsmall arrow" label="Category" name="case_category_name" id="case_category_main" component={Common.renderSelect}>
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Sub-Category</label>
                                        <Field selected_value={this.state.subcat_selected} custom_options_start={[{ 'label': 'Select Sub Category', 'value': '' }]} custom_options_end={[{ 'label': 'Add New', 'value': 'other' }]} options={this.state.subcategorylist} onChange={this.handleSelectSubCategory.bind(this, 'case')} className="form-control hsmall arrow" name="case_sub_category_name" id="case_sub_category" component={Common.renderSelect}>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group hide">
                                <label>New Category</label>
                                <Field name="case_main_category_other" component="input" type="text" id="case_other_main_Category" className="form-control hsmall" />
                            </div>
                            <div className="form-group hide">
                                <label>New Sub Category</label>
                                <Field name="case_sub_category_other" component="input" type="text" id="case_other_sub_Category" className="form-control hsmall" />
                            </div>
                            <div className="form-group">
                                <label>Market</label>
                                <Field selected_value={this.state.market_selected} custom_options_start={[{ 'label': 'Select Market', 'value': '' }]} custom_options_end={[{ 'label': 'Add New', 'value': 'other' }]} options={this.state.marketlist} onChange={this.handleSelectMarket.bind(this, 'case')} className="form-control hsmall arrow" name="case_market_name" id="case_target_market" component={Common.renderSelect}>
                                </Field>
                            </div>
                            <div className="form-group hide">
                                <label>New Market</label>
                                <Field name="case_other_target_market" component="input" type="text" id="case_target_market_other" className="form-control hsmall" />
                            </div>
                            <div className="form-group">
                                <label>Brand Name</label>
                                <Field name="case_brand_name" component={Common.renderInput} type="text" id="case_brandname" className="form-control hsmall" onBlur={this.props.handleChange.bind(this, 'case')} />
                            </div>
                            <div className="form-group ">
                                <label>Sub Brand</label>
                                <Field name="case_sub_brand_name" component="input" type="text" id="case_subbrandname" className="form-control hsmall" onBlur={this.props.handleChange.bind(this, 'case')} />
                            </div>
                            <div className="form-group {{ $errors->has('functional_name') ? ' has-error' : '' }}">
                                <label>Functional Name</label>
                                <Field name="case_functional_name" component={Common.renderInput} type="text" id="case_functionalname" className="form-control hsmall" onBlur={this.props.handleChange.bind(this, 'case')} />
                            </div>
                            <div className="form-group {{ $errors->has('net_content') ? ' has-error' : '' }}">
                                <label>Variant</label>
                                <Field name="case_variant_name" component={Common.renderInput} type="text" id="case_variant" className="form-control hsmall" onBlur={this.props.handleChange.bind(this, 'case')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="pdform_column second_coumn">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Net Content</label>
                                        <Field name="case_net_content" component={Common.renderInput} type="text" id="case_netcontent" className="form-control hsmall" onBlur={this.props.handleChange.bind(this, 'case')} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_uom" id="case_uom" onChange={this.props.handleChange.bind(this, 'case')} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Start Availablity Date</label>
                                        <Field name="case_start_availability_date" component={Common.renderDate} type="text" id="case_start_availability_date" className="form-control hsmall" />

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>End Availablity Date</label>
                                        <Field name="case_end_availability_date" component={Common.renderDate} type="text" id="case_end_availability_date" className="form-control hsmall" />

                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Product Name</label>
                                {/* <Field name="case_short_description" component="textarea" id="case_productname" className="form-control" disabled /> */}
                                <textarea name="case_short_description" component="textarea" id="case_productname" className="form-control" disabled value={this.props.case_details['product_name']} />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Shelf Life in Days</label>
                                        <Field name="case_shelf_line_days" component="input" type="text" id="case_shelf_line_days" className="form-control hsmall" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date on Packaging</label>
                                        <Field className="form-control hsmall arrow" name="case_date_of_packaging" id="case_date_of_packaging" component="select">
                                            <option value="">Select Package</option>
                                            <option value="BAKED_FOR_DATE">BAKED_FOR_DATE</option>
                                            <option value="BAKED_ON_DATE">BAKED_ON_DATE</option>
                                            <option value="BEST_BEFORE_DATE">BEST_BEFORE_DATE</option>
                                            <option value="DISPLAY_UNTIL_DATE">DISPLAY_UNTIL_DATE</option>
                                            <option value="EXPIRATION_DATE">EXPIRATION_DATE</option>
                                            <option value="FREEZE_BY">FREEZE_BY</option>
                                            <option value="LAST_SALE_DATE">LAST_SALE_DATE</option>
                                            <option value="NO_DATE_MARKED">NO_DATE_MARKED</option>
                                            <option value="PACKAGING_DATE">PACKAGING_DATE</option>
                                            <option value="PRODUCTION_DATE">PRODUCTION_DATE</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Country of Origin</label>
                                <RenderSelect custom_options_start={[{ 'label': 'Select Country', 'value': '' }]} options={this.props.countrylist} className="form-control hsmall arrow" name="case_country_origin" id="case_country_origin" />
                                {/* <Field className="form-control hsmall arrow" name="case_country_origin" id="case_country_origin" component="select">
                                 <option value="">Select Country</option>
                             </Field> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12  col-md-3">
                        <div className="pdform_column last_coumn preview_product_image">
                            <div className="preview_title">
                                <p>Preview</p>
                            </div>
                            <div className="preview_img">
                                <img src="assets/images/default.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-5">
                        <div className="pdform_column">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>GTIN</label>
                                        <Field name="case_gtin_code" component={Common.renderInput} type="text" id="case_gtin_code" className="form-control" onBlur={this.props.handleChange.bind(this, 'case')} />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>SKU#</label>
                                        <Field name="case_sku" component="input" type="text" id="case_sku" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>Quantity of next level</label>
                                        <Field name="case_quantityof_level" component="input" type="text" id="case_quantityof_level" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>Packaging type</label>
                                        <RenderSelect custom_options_start={[{ 'label': 'Select Packaging Type', 'value': '' }]} options={this.props.packagingtypelist} className="form-control hsmall arrow" name="case_packaging_type" id="case_packaging_type" />
                                        {/* <Field name="case_packaging_type" component="select" id="case_packaging_type" className="form-control hsmall arrow" >
                                     <option value="">Select Packaging Type</option>
                                 </Field> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-2 light-color">
                                    <div className="form-group">
                                        <label>Height</label>
                                        <Field name="case_height" component="input" type="text" id="case_height" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_height_uom" id="case_height_uom" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 dark-color">
                                    <div className="form-group">
                                        <label>Width</label>
                                        <Field name="case_width" component="input" type="text" id="case_width" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="cu_width_uom" id="cu_width_uom" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 light-color">
                                    <div className="form-group">
                                        <label>Length</label>
                                        <Field name="case_length" component="input" type="text" id="case_length" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_productatt_uom" id="case_productatt_uom" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 dark-color">
                                    <div className="form-group">
                                        <label>Gross Weight</label>
                                        <Field name="case_gross_weight" component="input" type="text" id="case_gross_weight" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_gross_weight_uom" id="case_gross_weight_uom" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 light-color">
                                    <div className="form-group">
                                        <label>Packaging Weight</label>
                                        <Field name="case_packaging_weight" component="input" type="text" id="case_packaging_weight" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_packaging_weight_uom" id="case_packaging_weight_uom" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-2 dark-color">
                                    <div className="form-group">
                                        <label>Net Weight</label>
                                        <Field name="case_net_weight" component="input" type="text" id="case_net_weight" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>UOM</label>
                                        <RenderSelect options={this.props.uomlist} className="form-control hsmall arrow" name="case_weighting_uom" id="case_weighting_uom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="pdform_column">
                            <div className="taxlist lightgray list-background">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_dispatch_unit" id="case_dunit" component="input" type="checkbox" value="1" />
                                                <label htmlFor="dunit">Dispatch Unit</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_consumer_unit" id="case_cunit" component="input" type="checkbox" value="1" />
                                                <label htmlFor="cunit">Consumer Unit</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_invoice_unit" id="case_inunit" component="input" type="checkbox" value="1" />
                                                <label htmlFor="inunit">Invoice Unit</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_order_unit" id="case_ounit" component="input" type="checkbox" value="1" />
                                                <label htmlFor="ounit">Order Unit</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_pmr" id="case_pmr" component="input" type="checkbox" value="1" />
                                                <label htmlFor="pmr">Packaging Marked Returnable</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_has_batch_number" id="case_has_batch_number" component="input" type="checkbox" value="1" />
                                                <label htmlFor="case_has_batch_number">Has Batch Number</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_is_net_content_declared" id="case_is_net_content_declared" component="input" type="checkbox" value="1" />
                                                <label htmlFor="case_is_net_content_declared">Is Net Content Declared</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_is_variable_weight_item" id="case_is_variable_weight_item" component="input" type="checkbox" value="1" />
                                                <label htmlFor="case_is_variable_weight_item">Is Variable Weight Item</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_market_with_ingredients" id="case_market_with_ingredients" component="input" type="checkbox" value="1" />
                                                <label htmlFor="case_market_with_ingredients">Market With Ingredients</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_is_trade_item" id="case_iti" component="input" type="checkbox" value="1" />
                                                <label htmlFor="iti">Is Trade Item</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-xs-8">
                                                    <div className="inline-checkbox tick">
                                                        <Field name="case_vatexempt" id="case_vatexempt" component="input" type="checkbox" value="1" />
                                                        <label htmlFor="vatexempt">VAT Exempt</label>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <Field placeholder="%" name="case_vat_exemp_percentage" id="case_vat_exemp_percentage" component="input" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_genetically_modified" id="case_gm" component="input" type="checkbox" value="1" />
                                                <label htmlFor="gm">Genetically Modified</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_dangerous_goods" id="case_dgoods" component="input" type="checkbox" value="1" />
                                                <label htmlFor="dgoods">Dangerous Goods</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick">
                                                <Field name="case_handling_instruction" id="case_handlingins" component="input" type="checkbox" value="1" />
                                                <label htmlFor="handlingins">Handling Instructions</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1">
                        <div className="saveform">
                            <div className="profile_cmpletd">
                                <img src="assets/images/percentage_img2.png" alt="" />
                            </div>
                            <div className="save_btn">
                                <Button type="submit" id="case_status_save_option" className="btn-save" value="Save">Save</Button>
                            </div>
                            <div className="next_btn">
                                <Button type="button" onClick={this.props.nextTab} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next tab" /> Next Tab</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal id="product_options_modal_case" {...this.state} updateValue={this.updateValue} handleClose={this.handleClose} updateOptions={this.updateOptions} />
            </div>
        )
    }
}