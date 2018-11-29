import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Config from '../../Config';
import { Dropdown,MenuItem  } from 'react-bootstrap'; 




class PannelHeader extends Component{
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    
        this.state = {
          popupVisible: false
        };
    }


    
    

  
    handleClick() {
        if (!this.state.popupVisible) {
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
          return;
        }
        this.handleClick();
    }

    render(){
        return <Fragment><div className="head_name">
                    <div className="mhamicon pull-left"  onClick={this.props.handlemanu}>
                        <Link to="#" className="mham"><i className="fa fa-bars fa-2x"></i></Link>
                    </div>

                    <div className="company_name">

                        <div className="toggle_header" onClick={this.props.gettoggle}>
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <Link to={Config.userPath[this.props.user_type] + 'dashboard'}>
                            {Config.userTypesText[this.props.user_type]} Dashboard
                        </Link>                 
                    </div>
                   
                </div>
                 <div className="head_companyname">
                    <div className="userdet">
                        <ul>
                           
                            <li className="cyname"><span className="gln_name">{this.props.userdetails.information_provider_gln}</span></li>

                            <li>    
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="fa fa-envelope-o"></i>
                                <span className="label label-success">4</span>
                                </Link>
                            </li>

                            <li>    
                                <Link to=""  className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">10</span>
                                </Link>
                            </li>

                             <li>    
                                 <Link to=""  className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-flag-o"></i>
                                    <span className="label label-danger">9</span>
                                </Link>
                            </li>

                            <li className="profile_drop_down">
                         
                                <Dropdown id="dropdown-custom-1">
                                    <Dropdown.Toggle>
                                     <img src={this.props.userdetails.userimage} alt="" />
                                     {this.props.userdetails.username}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors user_profile_dropdown">
                                    <MenuItem eventKey="3" className="user-header-profile">
                                    <img src={this.props.userdetails.userimage} className="img-circle" alt="" />
                                    <p>{this.props.userdetails.username}</p>
                                    </MenuItem>
                                    <MenuItem eventKey="4">
                                        <div className="pull-left">
                                            <button className="btn btn-default btn-flat">Profile</button>
                                        </div>
                                       
                                        <div className="pull-right">
                                        <button className="btn btn-default btn-flat" onClick={this.props.logout}>
                                            <i className="fa fa-sign-out"></i> 
                                            Logout
                                        </button>
                                        </div>
                                    </MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            
                            <li>    
                                 <Link to="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                 <i className="fa fa-gears"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                 </div>
                 </Fragment>;
    }
}

export default PannelHeader



