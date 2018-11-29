import React, { Component } from 'react';
class Computers extends Component {
    render() {
        return ( <div className="col-xs-12 col-md-8 gmd_computers">
                                            <div className="col-xs-12 col-sm-6 col-md-6 ">
                                                <div className="pdform_column first_coumn">
                                                    <div className="row">
                                                        <div className="col-sm-12">  
                                                        <h4 className="ftitle">General Specification</h4>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Size" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Operating System" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Processor" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Memory" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Storage" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Graphics" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Optical Drive" name=""/>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                <div className="pdform_column second_coumn">  
                                                    <h4 className="ftitle">Screen Resolution </h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Display Size" name=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Display Revolution" name=""/>
                                                    </div> 
                                                   <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Touch Display" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="HDMI Input" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="USB Ports" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="SD Card Readers" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Connectivity" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Service Guarantee" name=""/>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
        );
    }
}

export default Computers;