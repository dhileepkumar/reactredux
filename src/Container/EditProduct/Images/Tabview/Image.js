import React, { Component } from 'react';
import Carousel from '../../../../Components/Carousel/carouselcomponent';

class ImageView extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-10">
                <div className="cimgupload">
                    {/* <h3>Complete Image Upload</h3> */}
                    <div className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner" role="listbox">
                            <Carousel imgType={this.props.imageType} images={(this.props.imageType === 'cu') ? this.props.cu_image : (this.props.imageType === 'shr') ? this.props.shr_image : (this.props.imageType === 'case') ? this.props.case_image : (this.props.imageType === 'pallet') ? this.props.pallet_image : ''} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageView;