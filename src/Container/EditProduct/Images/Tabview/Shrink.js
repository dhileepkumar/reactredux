import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import AlertDismisable from '../../../../Components/AlertDismissable';
import ImageView from './Image';
import Config from '../../../../Config';

const ImageData = (props) => {
    if (props.product_details.hasOwnProperty('shr_image')) {
        let images = props.product_details.shr_image;
        if (images.length) {
            return <ImageView {...props.product_details} imageType='shr' />
        } else {
            return (
                <div className="col-sm-6 col-md-10 col-md-offset-1">
                    <div className="upload_image text-center">
                        <AlertDismisable message={ props.shr_image_type_error } color='danger'/>
                        <div className="form-group image_upload upload_assets">
                            <FileBase64 multiple={true} onDone={ props.getFiles.bind(this,'shr') } />
                            <div className={(props.shr_image_preview.length) ? 'uploaded_image_count' : 'uploaded_image_count hide'}>
                                You have chosen   {props.shr_image_preview.length} images
                            </div>
                            <div id="image_preview" className={(props.shr_image_preview) ? '' : 'hide'}>
                                    {props.shr_image_preview}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return null;
}

export default class Shrink extends Component {
    render() {
        return (
            <div className="row">
                <ImageData {...this.props} />
                {(this.props.user_type !== Config.userTypes.Retailer) ?
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