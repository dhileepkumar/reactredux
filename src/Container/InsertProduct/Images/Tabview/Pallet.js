import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import AlertDismisable from '../../../../Components/AlertDismissable';

export default class Pallet extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-10 col-md-offset-1">
                    <div className="upload_image text-center">
                        <AlertDismisable message={ this.props.pallet_image_type_error } color='danger'/>
                        <div className="form-group image_upload upload_assets">
                            <FileBase64 multiple={true} onDone={ this.props.getFiles.bind(this,'pallet') } />
                            <div id="image_preview" className={(this.props.pallet_image_preview) ? '' : 'hide'}>
                                    {this.props.pallet_image_preview}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-1">
                    <div className="adv_column">
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