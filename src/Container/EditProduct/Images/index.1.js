import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Row,Col,Button  } from 'react-bootstrap';

class Images extends Component {

  render() {
    return (
    <div id="s3_tab3">
        <div className="image_video_upload">
            <div className="container-fluid">
                <Row>
                    <Col sm={6} md={5} md-offset={1}>
                        <div className="upload_image text-center">
                            <div className="form-group image_upload">
                                <Field type="file" component="input" multiple id="uploadFile" name="uploadFile[]" accept=".jpg, .png, image/jpeg, image/png, .tif"/>
                                <div id="image_preview"></div>
                            </div>
                        </div>
                    </Col> 
                    <Col sm={12} md={1}>
                    <div className="adv_column">
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

export default Images;