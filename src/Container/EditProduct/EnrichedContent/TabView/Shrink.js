import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NutritionalInformation from '../../../../Components/NutritionalInformation'
import Config from '../../../../Config';

export default class Shrink extends Component {
    constructor(props) {
        super(props);
        this.state ={
            shownut :false
        }
    }
    handleclicks = (e)  =>{
        e.preventDefault();
        let tabs = this.state.shownut
        this.setState({ shownut : (tabs) ? false :true  });
    }
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
                            <img src={(this.props.form_data.hasOwnProperty('shr_image') &&  this.props.form_data.shr_image !== '' && this.props.form_data.shr_image !== undefined && this.props.form_data.shr_image.length >=1 ) ? Config.detail_img_path + this.props.form_data.shr_image : Config.assetspath + 'default.png'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="selected_list_prew">
                        <div className="row">
                        <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Brand:</p>
                                    <p className="det preview_brand">{this.props.shr_details['shr_brand_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Sub Brand</p>
                                    <p className="det preview_sub_brand">{this.props.shr_details['shr_sub_brand_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Functional Name:</p>
                                    <p className="det preview_functional">{this.props.shr_details['shr_functional_name']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Variant:</p>
                                    <p className="det preview_variant">{this.props.shr_details['shr_variant_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12">
                                <div className="prwrow">
                                    <p className="title">Product Name:</p>
                                    <p className="det preview_product_name">{this.props.shr_details['product_name']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">GTIN:</p>
                                    <p className="det preview_gtin">{this.props.shr_details['shr_gtin_code']}</p>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="prwrow">
                                    <p className="title">Size:</p>
                                    <p className="det preview_net">{this.props.shr_details['shr_net_content']}</p>
                                </div>
                            </div>
                        </div>
                        {this.props.form_data.shr_category_name==='Food' ?  <div className="prwrow">  <p className={ (this.state.shownut) ? this.state.shownut+'det hidden' : 'det ' } ><Link onClick={this.handleclicks} to="#" id="food_category">Nutritional Information</Link></p>
                            <p  className={ (this.state.shownut) ? this.state.shownut+'det ' : 'det hidden ' }><Link onClick={this.handleclicks} to="#" id="enrich_food">Enrich Content</Link></p> </div> : ''}
                    </div>
                </div>
                <div className={ (this.state.shownut) ? this.state.shownut+'col-xs-12 col-sm-6 col-md-4 hidden' : 'col-xs-12 col-sm-6 col-md-4 ' }>
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Long Product Description</h4>
                        <div className="form-group">
                            <Field name="shr_long_description" className="form-control" id="shr_long_description" placeholder="Insert description here..." component="textarea" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <h4 className="ftitle">Features & Benefits</h4>
                        <div className="form-group">
                            <Field name="shr_features1" className="form-control" id="shr_features1" placeholder="Features 1" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <div className="form-group">
                            <Field name="shr_features2" className="form-control" id="shr_features2" placeholder="Features 2" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <div className="form-group">
                            <Field name="shr_features3" className="form-control" id="shr_features3" placeholder="Features 3" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <div className="form-group">
                            <Field name="shr_features4" className="form-control" id="shr_features4" placeholder="Features 4" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <div className="form-group">
                            <Field name="shr_features5" className="form-control" id="shr_features5" placeholder="Features 5" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <div className="form-group features_6">
                            <Field name="shr_features6" className="form-control" id="shr_features6" placeholder="Features 6" component="input" type="text" onBlur={this.props.handleChange.bind(this,'shr')}/>
                        </div>
                        <h4 className="ftitle">Safety Warnings</h4>
                        <div className="form-group">
                            <Field name="shr_safety_warnings" className="form-control" id="shr_safety_warnings" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>
                <div className={ (this.state.shownut) ? this.state.shownut+'col-xs-12 col-sm-6 col-md-4 hidden' : 'col-xs-12 col-sm-6 col-md-4 ' }>
                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Goes well with</h4>
                        <div className="form-group">
                            <Field name="shr_goes_well_with1" className="form-control segwllw" id="shr_goes_well_with1" placeholder="Product 1" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="shr_goes_well_with2" className="form-control segwllw" id="shr_goes_well_with2" placeholder="Product 2" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="shr_goes_well_with3" className="form-control segwllw" id="shr_goes_well_with3" placeholder="Product 3" component="input" type="text" />
                        </div>
                        <div className="form-group">
                            <Field name="shr_goes_well_with4" className="form-control segwllw" id="shr_goes_well_with4" placeholder="Product 4" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Search Terms</h4><p>Separate by comma</p>
                        <div className="form-group">
                            <Field name="shr_search_terms" className="form-control" id="shr_search_terms" placeholder="Keywords (Seperated by Commas)" component="input" type="text" />
                        </div>
                        <h4 className="ftitle">Consumer User Instructions</h4>
                        <div className="form-group">
                            <Field name="shr_consumer_user_instructions" className="form-control" id="shr_consumer_user_instructions" placeholder="Insert description here..." component="textarea" />
                        </div>
                        <h4 className="ftitle">Consumer Storage Instructions</h4>
                        <div className="form-group">
                            <Field name="shr_consumer_storage_instructions" className="form-control" id="shr_consumer_storage_instructions" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>
                {(this.state.shownut) ? <NutritionalInformation/> : ''}
                {(this.props.user_type !== Config.userTypes.Retailer) ?
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
                : ''}
            </div>
        )
    }
}