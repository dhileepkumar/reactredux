import React, { Component } from 'react';
class Television extends Component {
    render() {
        return ( <div className="col-xs-12 col-md-8 gmd_television">
                                            <div className="col-xs-12 col-sm-6 col-md-6 ">
                                                <div className="pdform_column first_coumn">
                                                    <div className="row">
                                                        <div className="col-sm-12"> 
                                                        <h4 className="ftitle">General Specification</h4> 
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Model" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Size" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Screen Type" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="3D" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Resolution" name=""/>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                <div className="pdform_column second_coumn">  
                                                    <h4 className="ftitle">Screen Resolution </h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Smart" name=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Clear Motion Ratio(HZ)" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="HDMI Inputs" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="USB Inouts" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Contrast Ratio" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Smart Interactive" name=""/>
                                                    </div>    
                                                </div>
                                            </div> 
                                            <div className="col-xs-12 col-sm-6 col-md-12 ">
                                                <div className="pdform_column first_coumn">
                                                    <div className="row">
                                                        <h4 className="ftitle">Special Features</h4>
                                                        <div className="col-sm-6">  
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="WI-FI Ready" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Wireless LAN Built In" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Bluetooth Technology" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Internet Capabilities" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Skype ready" name=""/>
                                                            </div>  
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Dongle Included" name=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6"> 
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Built In Camera" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Built In Microphone" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Remotes Included" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="TV Dimension With Stand" name=""/>
                                                            </div> 
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="TV Dimension With Out Stand" name=""/>
                                                            </div> 
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Service Guarantee" name=""/>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                        </div>
        );
    }
}

export default Television;