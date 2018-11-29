import React, {Component} from 'react';
import {Grid, Row, Col, ButtonToolbar, Dropdown} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
import logo from './logo.png'

class LoginHeader extends Component{
 
    render(){
        return <div className="login_header">
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col xs={8}>
                                <div className="logo">
                                     <img src={logo} alt="Logo" />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="togglemenu dropdown">
                                    <ButtonToolbar>
                                    <Dropdown id="dropdown-custom-1" className="pull-right">
                                        <Dropdown.Toggle noCaret={true}>
                                            <i className="fa fa-bars fa-2x"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="super-colors">
                                            <li role="presentation"><Link to="/login">Login</Link></li>
                                            <li role="presentation"><Link to="/register">Register</Link></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
               </div>
    }
}

export default LoginHeader;


