import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import AlertDismisable from '../../../../Components/AlertDismissable';
import ImageView from './Image';


const ImageData = (props) => {
    if (props.product_details.hasOwnProperty('pallet_image')) {
        let images = props.product_details.pallet_image;
        if (images.length) {
            return <ImageView {...props.product_details} imageType='pallet' />
        } else {
            return (
                <div className="col-sm-6 col-md-10 col-md-offset-1">
                    <div className="upload_image text-center">
                        <AlertDismisable message={ props.pallet_image_type_error } color='danger'/>
                        <div className="form-group image_upload upload_assets">
                            <FileBase64 multiple={true} onDone={ props.getFiles.bind(this,'pallet') } />
                            <div id="image_preview" className={(props.pallet_image_preview) ? '' : 'hide'}>
                                    {props.pallet_image_preview}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return null;
}

export default class Pallet extends Component {
    render() {
        return (
            <div className="row">
                <ImageData {...this.props} />
                
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