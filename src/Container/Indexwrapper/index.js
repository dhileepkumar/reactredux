import React, {Component, Fragment} from 'react';
import {Grid, Row } from 'react-bootstrap'; 
import LoginImage from './desk.jpg';
import LoginHeader from '../../Components/LoginHeader'
import {Redirect}  from 'react-router-dom';
import Config from '../../Config';


class Indexwrapper extends Component{
    
    constructor(props){ 
        super(props);
        this.state = {
            message: '',
            auth:this.props.auth,
            user_type:this.props.user_type
      };
    }

    static getDerivedStateFromProps(props){
       
       return { 
           message : props.message,
           user_type:props.user_type,
           auth:props.auth
      };
    }

    componentDidMount(){
        
    }

    render(){
        if(this.state.auth===true){
            if(this.props.user_type === Config.userTypes.Supplier){
                return <Redirect to="/supplier/dashboard" />
            }
            else if(this.props.user_type === Config.userTypes.Retailer){
                return <Redirect to="/retailer/dashboard" />
            }
            else if(this.props.user_type === Config.userTypes.GS1User){
                 window.location = 'http://trustedsourcepilot.azurewebsites.net/dashboard/index.html'
            }
            else{
                return false;
            }
        }else{
            let notfound = [];
            notfound = this.props.children.map((list,key) => {
                if(list.props.path === this.props.location.pathname){
                    return 'found';
                }else{
                    return 'notfound';
                }
            });
            if(notfound.indexOf('found') === -1){
                return <Redirect to="/" />
            }
        }
        return <Fragment>
                    <LoginHeader/>
                    <Grid fluid={true}>
                        <Row>
                        <div className="col-xs-12 col-sm-4 pull-right">
                                <div className="login-wrapperright">
                                    <div className="login_form">
                                         
                                            {this.props.children}
                                          
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <div className="login-wrapperleft">
                                    <div className="login_wrpcontent text-center">
                                            <h3>TrustedSource is a cloud based digital product content portal, providing verified data and digital assets to serve the connected world.</h3>
                                            <img src={LoginImage} alt="Desktop" />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Grid>
              </Fragment>;
    }
}

export default Indexwrapper



