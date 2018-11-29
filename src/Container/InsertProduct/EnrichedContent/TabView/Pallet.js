import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';

export default class Pallet extends Component {
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
                                    <p className="det preview_brand">{this.props.pallet_details['pallet_brand_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Sub Brand</p>
                                    <p className="det preview_sub_brand">{this.props.pallet_details['pallet_sub_brand_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Functional Name:</p>
                                    <p className="det preview_functional">{this.props.pallet_details['pallet_functional_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Variant:</p>
                                    <p className="det preview_variant">{this.props.pallet_details['pallet_variant_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12">
                                <div className="prwrow">
                                    <p className="title">Product Name:</p>
                                    <p className="det preview_product_name">{this.props.pallet_details['product_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">GTIN:</p>
                                    <p className="det preview_gtin">{this.props.pallet_details['pallet_gtin_code']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Size:</p>
                                    <p className="det preview_net">{this.props.pallet_details['pallet_net_content']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Long Product Description</h4>
                        <div className="form-group">
                            <Field name="pallet_long_description" className="form-control" id="pallet_long_description" placeholder="Insert description here..." component="textarea" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <h4 className="ftitle">Features & Benefits</h4>
                        <div className="form-group">
                            <Field name="pallet_features1" className="form-control" id="pallet_features1" placeholder="Features 1" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <div className="form-group">
                            <Field name="pallet_features2" className="form-control" id="pallet_features2" placeholder="Features 2" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <div className="form-group">
                            <Field name="pallet_features3" className="form-control" id="pallet_features3" placeholder="Features 3" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <div className="form-group">
                            <Field name="pallet_features4" className="form-control" id="pallet_features4" placeholder="Features 4" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <div className="form-group">
                            <Field name="pallet_features5" className="form-control" id="pallet_features5" placeholder="Features 5" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <div className="form-group features_6">
                            <Field name="pallet_features6" className="form-control" id="pallet_features6" placeholder="Features 6" component="input" type="text" onBlur={this.props.handleChange.bind(this,'pallet')}/>
                        </div>
                        <h4 className="ftitle">Safety Warnings</h4>
                        <div className="form-group">
                            <Field name="pallet_safety_warnings" className="form-control" id="pallet_safety_warnings" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Goes well with</h4>
                        <div className="form-group">
                            <Field name="pallet_goes_well_with1" className="form-control segwllw" id="pallet_goes_well_with1" placeholder="Product 1" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="pallet_goes_well_with2" className="form-control segwllw" id="pallet_goes_well_with2" placeholder="Product 2" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="pallet_goes_well_with3" className="form-control segwllw" id="pallet_goes_well_with3" placeholder="Product 3" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="pallet_goes_well_with4" className="form-control segwllw" id="pallet_goes_well_with4" placeholder="Product 4" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Search Terms</h4><p>Separate by comma</p>
                        <div className="form-group">
                            <Field name="pallet_search_terms" className="form-control" id="pallet_search_terms" placeholder="Keywords (Seperated by Commas)" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Consumer User Instructions</h4>
                        <div className="form-group">
                            <Field name="pallet_consumer_user_instructions" className="form-control" id="pallet_consumer_user_instructions" placeholder="Insert description here..." component="textarea" />
                        </div>
                        <h4 className="ftitle">Consumer Storage Instructions</h4>
                        <div className="form-group">
                            <Field name="pallet_consumer_storage_instructions" className="form-control" id="pallet_consumer_storage_instructions" placeholder="Insert description here..." component="textarea" />
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
                                <Button type="button" onClick={this.props.nextPage} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next page" /> Next Page</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}