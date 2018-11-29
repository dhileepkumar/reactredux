import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Field } from 'redux-form';
import Common from '../../Common'
import './carousel.css';
import Config from '../../Config';


class CarouselComponent extends Component {
    render() {
        return <Carousel showIndicators={false} showThumbs={false} dynamicHeight emulateTouch>
            {this.props.images.map((item, index) => (
                <div key={index} className="edit_prduct_image_view">
                    <img src={Config.assetspath + 'default.jpg'} alt="" className="carousalmain"/>
                    <div className="legend">
                        <div className="active">
                            <div className="cimgdet_form">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="ulded_img ">
                                            <img src={Config.detail_img_path + item.image_name} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <input type="hidden" className="form-control" name={this.props.imgType + '_guid[]'} defaultValue={item.GUID} readOnly />
                                            <input type="text" className="form-control" placeholder="GTIN" defaultValue={item.GTIN} disabled />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Asset Name" name={this.props.imgType + '_asset_name['+item.GUID+']'} defaultValue={item.asset_name} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Type of Media" defaultValue={item.media_type} disabled />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Alt Tag" name={this.props.imgType + '_alt_tag['+item.GUID+']'} defaultValue={item.alt_tag} />
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Effective start date</label>
                                                    <div className="input-group date">
                                                      
                                                        <Field name={this.props.imgType + '_effective_start_date['+item.GUID+']'} component={Common.renderDateOwn} type="text" className="form-control hsmall"  dateoptions={item.effective_start_date} {...item}/>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Effective end date</label>
                                                    <div className="input-group date">
                                                        <Field name={this.props.imgType + '_effective_end_date['+item.GUID+']'} component={Common.renderDateOwn} type="text" className="form-control hsmall"  dateoptions={item.effective_end_date} {...item}/>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inline-checkbox tick c-rightbox">
                                            {(parseInt(item.saveforweb)===1) ? 

                                                <input type="checkbox" className="save_image checked" name={this.props.imgType + '_save_image['+item.GUID+']'} defaultValue="1" defaultChecked="1"  />
                                                 : 
                                                <input type="checkbox" className="save_image unchecked" name={this.props.imgType + '_save_image['+item.GUID+']'} defaultValue="1"  />}
                                                <label htmlFor="webc">Confirm Save for Web can be applied to this image:</label>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <div className="inline-checkbox tick c-rightbox">
                                                <input type="checkbox" className="delete_image" name={this.props.imgType + '_delete_image['+item.GUID+']'} defaultValue="1" />
                                                <label htmlFor="webc">Confirm Delete</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>;
    }
}

export default CarouselComponent;