import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NutritionalInformation from '../../../../Components/NutritionalInformation';
import Config from '../../../../Config';
import Television from '../../../../Components/Television';
import Refrigerator from '../../../../Components/Refrigerator';
import Computers from '../../../../Components/Computers';

export default class ConsumerUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shownut: false,
            showtelevision: false,
            showcomputers: false,
            showrefrigerator: false,
            showcontent: true,
            nutrition:[],
        }

      

    }

   

    componentDidMount(){
        var _nutrition_details ={
            token:this.props.token,
            gtin:this.props.match.params.gtin
        }
       this.props.loadNutritionData(_nutrition_details);
     }


    


    // handleclicks = (e) => {
    //     e.preventDefault();
    //     let tabs = this.state.shownut
    //     this.setState({ shownut: (tabs) ? false : true });
    // }
    handleViews = (view, e) => {
        e.preventDefault();
        if (view === 'television') {
            this.setState({
                showcontent: !this.state.showcontent,
                showtelevision: !this.state.showtelevision
            });
        } else if (view === 'computers') {
            this.setState({
                showcontent: !this.state.showcontent,
                showcomputers: !this.state.showcomputers
            });
        } else if (view === 'refrigerator') {
            this.setState({
                showcontent: !this.state.showcontent,
                showrefrigerator: !this.state.showrefrigerator
            });
        }else if (view === 'nutrition') {
            this.setState({
                showcontent: !this.state.showcontent,
                shownut: !this.state.shownut
            });
        } else {
            this.setState({
                shownut: false,
                showtelevision: false,
                showcomputers: false,
                showrefrigerator: false,
                showcontent: true
            });
        }
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
                                <img src={(this.props.form_data.hasOwnProperty('cu_image') && this.props.form_data.cu_image !== '' && this.props.form_data.cu_image !== undefined && this.props.form_data.cu_image.length >= 1) ? Config.detail_img_path + this.props.form_data.cu_image : Config.assetspath + 'default.png'} alt="" />
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
                        {(this.props.form_data.hasOwnProperty('cu_category_name') && this.props.form_data.cu_category_name.toLowerCase() === '50000000') 
                            ? <div className="prwrow">  
                                <p className={(this.state.shownut) ? this.state.shownut + 'det hidden' : 'det '} ><Link onClick={this.handleViews.bind(this, 'nutrition')} to="#">Nutritional Information</Link></p>
                                <p className={(this.state.shownut) ? this.state.shownut + 'det ' : 'det hidden '}><Link onClick={this.handleViews.bind(this, 'nutrition')} to="#">Enrich Content</Link></p> </div> : ''}

                        {(this.props.form_data.hasOwnProperty('cu_category_name') && this.props.form_data.hasOwnProperty('cu_sub_category_name') && this.props.form_data.cu_category_name.toLowerCase() === 'general merchandise' && this.props.form_data.cu_sub_category_name.toLowerCase() === 'television')
                            ? <div className="prwrow">
                                <p className={(this.state.showtelevision) ? this.state.showtelevision + 'det hidden' : 'det '} ><Link onClick={this.handleViews.bind(this, 'television')} to="#" id="gmd_television_category">GMD Television Attributes</Link></p>
                                <p className={(this.state.showtelevision) ? this.state.showtelevision + 'det ' : 'det hidden '}><Link onClick={this.handleViews.bind(this, 'television')} to="#">GMD Television Enrich Content</Link></p> </div> : ''}

                        {(this.props.form_data.hasOwnProperty('cu_category_name') && this.props.form_data.hasOwnProperty('cu_sub_category_name') && this.props.form_data.cu_category_name.toLowerCase() === 'general merchandise' && this.props.form_data.cu_sub_category_name.toLowerCase() === 'computers')
                            ? <div className="prwrow">
                                <p className={(this.state.showcomputers) ? this.state.showcomputers + 'det hidden' : 'det '} ><Link onClick={this.handleViews.bind(this, 'computers')} to="#" id="gmd_computer_category">GMD Television Attributes</Link></p>
                                <p className={(this.state.showcomputers) ? this.state.showcomputers + 'det ' : 'det hidden '}><Link onClick={this.handleViews.bind(this, 'computers')} to="#">GMD Television Enrich Content</Link></p> </div> : ''}


                        {(this.props.form_data.hasOwnProperty('cu_category_name') && this.props.form_data.hasOwnProperty('cu_sub_category_name') && this.props.form_data.cu_category_name.toLowerCase() === 'general merchandise' && this.props.form_data.cu_sub_category_name.toLowerCase() === 'refrigerator')
                            ? <div className="prwrow">
                                <p className={(this.state.showrefrigerator) ? this.state.showrefrigerator + 'det hidden' : 'det '} ><Link onClick={this.handleViews.bind(this, 'refrigerator')} to="#" id="gmd_computer_category">GMD Refrigerator Attributes</Link></p>
                                <p className={(this.state.showrefrigerator) ? this.state.showrefrigerator + 'det ' : 'det hidden '}><Link onClick={this.handleViews.bind(this, 'refrigerator')} to="#">GMD Refrigerator Enrich Content</Link></p> </div> : ''}
                    </div>
                </div>
                <div className={(!this.state.showcontent) ? 'col-xs-12 col-sm-6 col-md-4 hidden' : 'col-xs-12 col-sm-6 col-md-4 '}>

                    <div className="enrcih_des_fea lightgray">
                        <h4 className="ftitle">Long Product Description</h4>
                        <div className="form-group">
                            <Field name="cu_long_description" className="form-control" id="cu_long_description" placeholder="Insert description here..." component="textarea" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <h4 className="ftitle">Features & Benefits</h4>
                        <div className="form-group">
                            <Field name="cu_features1" className="form-control" id="cu_features1" placeholder="Features 1" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <div className="form-group">
                            <Field name="cu_features2" className="form-control" id="cu_features2" placeholder="Features 2" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <div className="form-group">
                            <Field name="cu_features3" className="form-control" id="cu_features3" placeholder="Features 3" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <div className="form-group">
                            <Field name="cu_features4" className="form-control" id="cu_features4" placeholder="Features 4" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <div className="form-group">
                            <Field name="cu_features5" className="form-control" id="cu_features5" placeholder="Features 5" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <div className="form-group features_6">
                            <Field name="cu_features6" className="form-control" id="cu_features6" placeholder="Features 6" component="input" type="text" onBlur={this.props.handleChange.bind(this, 'cu')} />
                        </div>
                        <h4 className="ftitle">Safety Warnings</h4>
                        <div className="form-group">
                            <Field name="cu_safety_warnings" className="form-control" id="cu_safety_warnings" placeholder="Insert description here..." component="textarea" />
                        </div>
                    </div>
                </div>

                <div className={(!this.state.showcontent) ? 'col-xs-12 col-sm-6 col-md-4 hidden' : 'col-xs-12 col-sm-6 col-md-4 '}>
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
                {(this.state.shownut) ? <NutritionalInformation nutritions={this.props.nutritions} /> : ''}
                {(this.state.showtelevision) ? <Television /> : ''}
                {(this.state.showcomputers) ? <Computers /> : ''}
                {(this.state.showrefrigerator) ? <Refrigerator /> : ''}
                {(this.props.user_type !== Config.userTypes.Retailer) ?
                <div className="col-xs-12 col-md-1">
                    <div className="adv_column" id="adv_column" style={{ height: '900px' }}>
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