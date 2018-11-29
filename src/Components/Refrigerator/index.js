import React, { Component } from 'react';
class Refrigerator extends Component {
    render() {
        return ( <div className="col-xs-12 col-md-8 gmd_fridge">
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
                                                                <input type="text" className="form-control" placeholder="Color" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Gross Capacity" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Nett Capacity" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Energy Rating" name=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Defrost" name=""/>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                <div className="pdform_column second_coumn">  
                                                    <h4 className="ftitle">New Features</h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Cooling Technology" name=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Reversible Doors" name=""/>
                                                    </div> 
                                                   <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="LED Display" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Water Dispenser" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Ice Maker" name=""/>
                                                    </div> 
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Plumbing Required" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Plumbed" name=""/>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Door-in-Door" name=""/>
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

export default Refrigerator;