import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import CarouselComponent from '../../../../Components/Carousel';

const FeatureBenifits = (props) => {
    let details_main = '';
    
    if(props.details.hasOwnProperty('shr_features1') && (props.details['shr_features1']) !== ''  && (props.details['shr_features1']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features1']+'</li>';
    }

    if(props.details.hasOwnProperty('shr_features2') && (props.details['shr_features2']) !== ''  && (props.details['shr_features2']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features2']+'</li>';
    }


    if(props.details.hasOwnProperty('shr_features3') && (props.details['shr_features3']) !== ''  && (props.details['shr_features3']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features3']+'</li>';
    }

    if(props.details.hasOwnProperty('shr_features4') && (props.details['shr_features4']) !== ''  && (props.details['shr_features4']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features4']+'</li>';
    }

    if(props.details.hasOwnProperty('shr_features5') && (props.details['shr_features5']) !== ''  && (props.details['shr_features5']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features5']+'</li>';
    }

    if(props.details.hasOwnProperty('shr_features6') && (props.details['shr_features6']) !== ''  && (props.details['shr_features6']) !== null){
        details_main = details_main + '<li>'+props.details['shr_features6']+'</li>';
    }
    return <ul dangerouslySetInnerHTML={{__html:  details_main}} />;
}

export default class Shrink extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="product_reviewslider">
                    <CarouselComponent images={(this.props.product_details.hasOwnProperty('shr_image') && this.props.product_details.shr_image) ? this.props.product_details.shr_image : this.props.images} />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7">
                    <div className="previewacc darkgryhead" id="shr_previewacc">
                        <Panel id="shr_collapsible-panel-1" defaultExpanded>
                            <Panel.Heading>
                                <Panel.Title toggle>Product Information</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <div className="prwrow">
                                        <p className="title">Brand:</p>
                                        <p className="det preview_brand">{this.props.shr_details['shr_brand_name']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Product Name:</p>
                                        <p className="det preview_product_name">{this.props.shr_details['product_name']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Long Product Description</p>
                                        <p className="det_des preview_long_desc">{this.props.shr_details['shr_long_description']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Features & Benefits</p>
                                        <div className="product_review feature_benefits">
                                            <FeatureBenifits details={this.props.shr_details} />
                                        </div>
                                    </div>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="shr_collapsible-panel-2">
                            <Panel.Heading>
                                <Panel.Title toggle>Logistical Information</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>-</Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="shr_collapsible-panel-3">
                            <Panel.Heading>
                                <Panel.Title toggle>Product Label</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>-</Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="shr_collapsible-panel-4">
                            <Panel.Heading>
                                <Panel.Title toggle>Supplier Details</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>-</Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </div>
                </div>
                <div className="col-xs-12 col-md-1">
                    <div className="adv_column">
                        <div className="saveform">
                            <div className="profile_cmpletd">
                                <img src="assets/images/percentage_img2.png" alt="" />
                            </div>
                            <div className="save_btn">
                                <Button className="btn btn-save" name="shr_save_status" value="Save" type="submit">Save</Button>
                            </div>
                            <div className="submit_btn">
                                {/* <Button className="btn btn-submit" name="shr_submit_status" value="Submit / Approve" type="submit">Submit / Approve</Button> */}
                                <Button type="button" onClick={this.props.nextTab} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next tab" /> Next Tab</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}