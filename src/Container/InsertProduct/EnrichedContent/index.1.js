import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Row,Col,Button  } from 'react-bootstrap';

class EnrichedContent extends Component {

  render() {
    return (
    <div id="s3_tab2">
      <div className="enriched_cnt">
          <div className="container-fluid">
              <Row>
                  <Col xs={12} md={3}>
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
                          <Row>
                              <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">Brand:</p>
                                      <p className="det preview_brand"></p>
                                  </div>
                              </Col>
                              <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">Sub Brand</p>
                                      <p className="det preview_sub_brand"></p>
                                  </div>
                              </Col>
                          </Row>
                          <Row>
                          <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">Functional Name:</p>
                                      <p className="det preview_functional"></p>
                                  </div>
                              </Col>
                              <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">Variant:</p>
                                      <p className="det preview_variant"></p>
                                  </div>
                              </Col>
                          </Row>
                          <Row>
                              <Col xs={12}>
                                  <div className="prwrow">
                                      <p className="title">Product Name:</p>
                                      <p className="det preview_product_name"></p>
                                  </div>
                              </Col>
                          </Row>
                          <Row>
                              <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">GTIN:</p>
                                      <p className="det preview_gtin"></p>
                                  </div>
                              </Col>
                              <Col xs={6}>
                                  <div className="prwrow">
                                      <p className="title">Size:</p>
                                      <p className="det preview_net"></p>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <div className="enrcih_des_fea lightgray">
                          <h4 className="ftitle">Long Product Description</h4>
                          <div className="form-group">
                              <Field name="long_description" className="form-control" id="long_description" placeholder="Insert description here..." component="textarea"/>
                          </div>
                          <h4 className="ftitle">Features & Benefits</h4>
                          <div className="form-group">
                              <Field name="features1" className="form-control" id="features1" placeholder="Features 1" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="features2" className="form-control" id="features2" placeholder="Features 2" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="features3" className="form-control" id="features3" placeholder="Features 3" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="features4" className="form-control" id="features4" placeholder="Features 4" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="features5" className="form-control" id="features5" placeholder="Features 5" component="input" type="text"/>
                          </div>
                          <div className="form-group features_6">
                              <Field name="features6" className="form-control" id="features6" placeholder="Features 6" component="input" type="text"/>
                          </div>
                          <h4 className="ftitle">Safety Warnings</h4>
                          <div className="form-group">
                              <Field name="safety_warnings" className="form-control" id="safety_warnings" placeholder="Insert description here..." component="textarea"/>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      <div className="enrcih_des_fea lightgray">
                          <h4 className="ftitle">Goes well with</h4>
                          <div className="form-group">
                              <Field name="goes_well_with1" className="form-control segwllw" id="goes_well_with1" placeholder="Product 1" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="goes_well_with2" className="form-control segwllw" id="goes_well_with2" placeholder="Product 2" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="goes_well_with3" className="form-control segwllw" id="goes_well_with3" placeholder="Product 3" component="input" type="text"/>
                          </div>
                          <div className="form-group">
                              <Field name="goes_well_with4" className="form-control segwllw" id="goes_well_with4" placeholder="Product 4" component="input" type="text"/>
                          </div>
                          <h4 className="ftitle">Search Terms</h4><p>Separate by comma</p>
                          <div className="form-group">
                              <Field name="search_terms" className="form-control" id="search_terms" placeholder="Keywords (Seperated by Commas)" component="input" type="text"/>
                          </div>
                          <h4 className="ftitle">Consumer User Instructions</h4>
                          <div className="form-group">
                              <Field name="consumer_user_instructions" className="form-control" id="consumer_user_instructions" placeholder="Insert description here..." component="textarea"/>
                          </div>
                          <h4 className="ftitle">Consumer Storage Instructions</h4>
                          <div className="form-group">
                              <Field name="consumer_storage_instructions" className="form-control" id="consumer_storage_instructions" placeholder="Insert description here..." component="textarea"/>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} md={1}>
                      <div className="adv_column">
                          <div className="adv_section">
                              <img src="assets/images/google_adwrd.jpg" alt="" />
                          </div>
                          <div className="saveform">
                              <div className="profile_cmpletd">
                                  <img src="assets/images/percentage_img2.png" alt=""/>
                              </div>
                              <div className="save_btn">
                                  <Button type="submit"  className="btn-save" value="Save">Submit</Button>
                              </div>
                              <div className="next_btn">
                                  <Button type="button" onClick={this.props.nextPage}  className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next page"/> Next Page</Button>
                              </div>
                          </div>
                      </div>                                          
                  </Col>
              </Row>
          </div>
      </div>
    </div>
    );
  }
}

export default EnrichedContent;