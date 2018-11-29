import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../../Config';

const GenerateView = (props) => {
    if(props.products.length){
        return props.products.map((item, index) => {
           return <div className="col-xs-6 col-sm-4 col-md-3" key={index}>
                <div className="thumbnail text-center">
                    <div className="prdt_img">
                        <img src={(item.product_image_name) ? Config.thumbnail_img_path + item.product_image_name : Config.assetspath + 'default.png'} alt=""/>
                        <div className="imgratio">
                            <span>
                                <i className="fa fa-image"></i>
                                <span className="pixels">{item.total_images}x</span>
                            </span>
                        </div>
                    </div>
                    <div className="caption">
                        <div className="description thumb_view_Desc">
                            {(props.user_type === Config.userTypes.Retailer) ? <p>{ item.product_name }</p> : <p><Link to={Config.userPath[props.user_type]+'editproduct/'+item.GTIN}>{ item.product_name }</Link></p>}
                            <p>{ item.GTIN }</p>
                        </div>
                    </div>
                </div>
            </div>
        });
    }else{
        return <div className='col-sm-12 no_products'>No Products found.</div>;
    }
}

class ThumbnailView extends Component {
    render() {
        return(
            <div className="thumb_view" >
                <div className="clearfix" id="thumbnail_views">
                    <GenerateView {...this.props} />
                </div>
            </div>
        )
    }
}

export default ThumbnailView;