import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import CarouselComponent from '../../../../Components/Carousel';

const FeatureBenifits = (props) => {
    let details_main = '';
    
    if(props.details.hasOwnProperty('cu_features1')){
        details_main = details_main + '<li>'+props.details['cu_features1']+'</li>';
    }

    if(props.details.hasOwnProperty('cu_features2')){
        details_main = details_main + '<li>'+props.details['cu_features2']+'</li>';
    }


    if(props.details.hasOwnProperty('cu_features3')){
        details_main = details_main + '<li>'+props.details['cu_features3']+'</li>';
    }

    if(props.details.hasOwnProperty('cu_features4')){
        details_main = details_main + '<li>'+props.details['cu_features4']+'</li>';
    }

    if(props.details.hasOwnProperty('cu_features5')){
        details_main = details_main + '<li>'+props.details['cu_features5']+'</li>';
    }

    if(props.details.hasOwnProperty('cu_features6')){
        details_main = details_main + '<li>'+props.details['cu_features6']+'</li>';
    }
    return <ul dangerouslySetInnerHTML={{__html:  details_main}} />;
}

export default class ConsumerUnit extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="product_reviewslider">
                        <CarouselComponent images={this.props.images} />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7">
                    <div className="previewacc darkgryhead" id="cu_previewacc">
                        <Panel id="cu_collapsible-panel-1" defaultExpanded>
                            <Panel.Heading>
                                <Panel.Title toggle>Product Information</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <div className="prwrow">
                                        <p className="title">Brand:</p>
                                        <p className="det preview_brand">{this.props.cu_details['cu_brand_name']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Product Name:</p>
                                        <p className="det preview_product_name">{this.props.cu_details['product_name']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Long Product Description</p>
                                        <p className="det_des preview_long_desc">{this.props.cu_details['cu_long_description']}</p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Features & Benefits</p>
                                        <div className="product_review feature_benefits">
                                                <FeatureBenifits details={this.props.cu_details} />
                                        </div>
                                    </div>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="cu_collapsible-panel-2">
                            <Panel.Heading>
                                <Panel.Title toggle>Logistical Information</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>-</Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="cu_collapsible-panel-3">
                            <Panel.Heading>
                                <Panel.Title toggle>Product Label</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>-</Panel.Body>
                            </Panel.Collapse>
                        </Panel>

                        <Panel id="cu_collapsible-panel-4">
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
                                <Button className="btn btn-save" name="cu_save_status" value="Save" type="submit">Save</Button>
                            </div>
                            <div className="submit_btn">
                                {/* <Button className="btn btn-submit" name="cu_submit_status" value="Submit / Approve" type="submit">Submit / Approve</Button> */}
                                <Button type="button" onClick={this.props.nextTab} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next tab" /> Next Tab</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}