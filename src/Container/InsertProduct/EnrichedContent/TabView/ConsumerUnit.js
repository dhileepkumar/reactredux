import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';

export default class ConsumerUnit extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-3">
                    <div className="preview_div">
                        <div className="pdform_column last_coumn">
                            <div className="preview_title">
                                <p>Preview</p>
                            </div>
                            <div className="preview_img">
                                <img src="assets/images/default.png " alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="selected_list_prew">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Brand:</p>
                                    <p className="det preview_brand">{this.props.cu_details['cu_brand_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Sub Brand</p>
                                    <p className="det preview_sub_brand">{this.props.cu_details['cu_sub_brand_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Functional Name:</p>
                                    <p className="det preview_functional">{this.props.cu_details['cu_functional_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Variant:</p>
                                    <p className="det preview_variant">{this.props.cu_details['cu_variant_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="prwrow">
                                    <p className="title">Product Name:</p>
                                    <p className="det preview_product_name">{this.props.cu_details['product_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">GTIN:</p>
                                    <p className="det preview_gtin">{this.props.cu_details['cu_gtin_code']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Size:</p>
                                    <p className="det preview_net">{this.props.cu_details['cu_net_content']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Long Product Description</h4>
                        <div className="form-group">
                            <Field name="cu_long_description" className="form-control" id="cu_long_description" placeholder="Insert description here..." component="textarea" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <h4 className="ftitle">Features & Benefits</h4>
                        <div className="form-group">
                            <Field name="cu_features1" className="form-control" id="cu_features1" placeholder="Features 1" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <div className="form-group">
                            <Field name="cu_features2" className="form-control" id="cu_features2" placeholder="Features 2" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <div className="form-group">
                            <Field name="cu_features3" className="form-control" id="cu_features3" placeholder="Features 3" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <div className="form-group">
                            <Field name="cu_features4" className="form-control" id="cu_features4" placeholder="Features 4" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <div className="form-group">
                            <Field name="cu_features5" className="form-control" id="cu_features5" placeholder="Features 5" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <div className="form-group features_6">
                            <Field name="cu_features6" className="form-control" id="cu_features6" placeholder="Features 6" component="input" type="text" onBlur={this.props.handleChange.bind(this,'cu')}/>
                        </div>
                        <h4 className="ftitle">Safety Warnings</h4>
                        <div className="form-group">
                            <Field name="cu_safety_warnings" className="form-control" id="cu_safety_warnings" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Goes well with</h4>
                        <div className="form-group">
                            <Field name="cu_goes_well_with1" className="form-control segwllw" id="cu_goes_well_with1" placeholder="Product 1" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="cu_goes_well_with2" className="form-control segwllw" id="cu_goes_well_with2" placeholder="Product 2" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="cu_goes_well_with3" className="form-control segwllw" id="cu_goes_well_with3" placeholder="Product 3" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="cu_goes_well_with4" className="form-control segwllw" id="cu_goes_well_with4" placeholder="Product 4" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Search Terms</h4><p>Separate by comma</p>
                        <div className="form-group">
                            <Field name="cu_search_terms" className="form-control" id="cu_search_terms" placeholder="Keywords (Seperated by Commas)" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Consumer User Instructions</h4>
                        <div className="form-group">
                            <Field name="cu_consumer_user_instructions" className="form-control" id="cu_consumer_user_instructions" placeholder="Insert description here..." component="textarea" />
                        </div>
                        <h4 className="ftitle">Consumer Storage Instructions</h4>
                        <div className="form-group">
                            <Field name="cu_consumer_storage_instructions" className="form-control" id="cu_consumer_storage_instructions" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-1">
                    <div className="adv_column"  id="adv_column" style={{height: '900px'}}>
                        <div className="adv_section">
                            <img src="assets/images/google_adwrd.jpg" alt="" />
                        </div>
                        <div className="saveform">
                            <div className="profile_cmpletd">
                                <img src="assets/images/percentage_img2.png" alt="" />
                            </div>
                            <div className="save_btn">
                                <Button type="submit" className="btn-save" value="Save">Save</Button>
                            </div>
                            <div className="next_btn">
                                <Button type="button" onClick={this.props.nextTab} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next tab" /> Next Tab</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}