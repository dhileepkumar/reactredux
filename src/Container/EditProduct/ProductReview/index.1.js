import React, { Component } from 'react';
import { Row,Col,Button,Panel  } from 'react-bootstrap';
import CarouselComponent from '../../../Components/Carousel';

const images = ['assets/images/img1.jpg','assets/images/imag2.jpg'];

class ProductReview extends Component {

  render() {
    return (
        <div id="s3_tab4">
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="product_reviewslider">
                            <CarouselComponent images={images}/> 
                        </div> 
                    </Col>
                    <Col xs={12} sm={6} md={7}>
                        <div className="previewacc darkgryhead" id="previewacc">
                            <Panel id="collapsible-panel-1" defaultExpanded>
                                <Panel.Heading>
                                <Panel.Title toggle>Product Information</Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                    <div className="prwrow">
                                        <p className="title">Brand:</p>
                                        <p className="det preview_brand"></p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Product Name:</p>
                                        <p className="det preview_product_name"></p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Long Product Description</p>
                                        <p className="det_des preview_long_desc"></p>
                                    </div>
                                    <div className="prwrow">
                                        <p className="title">Features & Benefits</p>
                                    </div>
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-2">
                                <Panel.Heading>
                                <Panel.Title toggle>Logistical Information</Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body> Logistical Information</Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-3">
                                <Panel.Heading>
                                <Panel.Title toggle>Product Label</Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body> Product Label</Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-4">
                                <Panel.Heading>
                                <Panel.Title toggle>Supplier Details</Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body> Supplier Details</Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </div>
                    </Col>
                    <Col xs={12} md={1}>
                        <div className="adv_column">
                            <div className="saveform">
                                <div className="profile_cmpletd">
                                    <img src="assets/images/percentage_img2.png" alt="" />
                                </div>
                                <div className="save_btn">
                                    <Button className="btn btn-save"  name="save_status" value="Save" type="submit">Save</Button>
                                </div>
                                <div className="submit_btn">
                                    <Button className="btn btn-submit" name="submit_status" value="Submit / Approve" type="submit">Submit / Approve</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}

export default ProductReview;