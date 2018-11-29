import React, {Component} from 'react';
import PageTitle from '../../Components/PageTitle';
import {Link} from 'react-router-dom';
import { Col,Panel,Row  } from 'react-bootstrap';
import '../custom/css/adminlte.css'; 

class Notifications extends Component {

    constructor(props, context) {
        super(props, context);
        this.togglePanel = this.togglePanel.bind(this);
        this.state = {
          panel_open : true,
          panel_icon : 'fa fa-minus',
          inbox : true,
          sent : false
        };
      }
    togglePanel(){ 
        this.setState({panel_open: !this.state.panel_open},()=>{ (this.state.panel_open) ? this.setState({panel_icon: 'fa fa-minus'}) : this.setState({panel_icon: 'fa fa-plus'}) });
    }
    render(){
        return (
            <div className="notifications">
                <PageTitle title={'Notifications'} subtitle='13 new notifications' dashboardlink={'/gs1'}/>
                <section className="content">
                <Row>
                    <Col md={3}>
                        <Link to="/gs1/notifications/compose" className="btn btn-primary btn-block margin-bottom">Compose</Link>
                        <div className="box box-solid">
                        <Panel id="collapsible-panel" defaultExpanded>
                            <div className="box-header with-border">
                                <Panel.Heading>
                                    <Panel.Title><h3 className="box-title">Folders</h3></Panel.Title>
                                    <div className="box-tools">
                                        <Panel.Toggle componentClass="button" className="btn btn-box-tool" onClick={this.togglePanel}>
                                            <i className={this.state.panel_icon}></i>
                                        </Panel.Toggle>
                                    </div>
                                </Panel.Heading>
                            </div>
                            <Panel.Collapse>
                                <Panel.Body>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li className="active"><Link to="/gs1/notifications/inbox"><i className="fa fa-inbox"></i> Inbox
                                        <span className="label label-primary pull-right">12</span></Link></li>
                                        <li><Link to="/gs1/notifications/inbox"><i className="fa fa-envelope text-green-o"></i> Sent</Link></li>
                                    </ul>
                                </div>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Notification Inbox</h3>

                                <div className="box-tools pull-right">
                                    <div className="has-feedback">
                                        <input className="form-control input-sm" placeholder="Search Mail" type="text"/>
                                        <span className="glyphicon glyphicon-search form-control-feedback"></span>
                                    </div>
                                </div>

                            </div>

                            <div className="box-body no-padding">
                                <div className="mailbox-controls">
                                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i>
                                    </button>
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                                    </div>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                                    <div className="pull-right">
                                    1-50/200
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                                    </div>
                            
                                    </div>
                        
                                </div>
                                <div className="table-responsive mailbox-messages">
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue" aria-checked="false" aria-disabled="false"><input type="checkbox"/><ins className="iCheck-helper" ></ins></div></td>
                                                <td><i className="fa fa-flag text-red text-red"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">5 mins ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-bell text-yellow"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">28 mins ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-envelope text-green"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">11 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-bell text-yellow"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">15 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-flag text-red"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">Yesterday</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-envelope text-green"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-flag text-red"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-bell text-yellow"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-envelope text-green"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-flag text-red"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-bell text-yellow"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">4 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-envelope text-green"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">12 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-flag text-red"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o  text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">12 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-bell text-yellow"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">14 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><div className="icheckbox_flat-blue"  aria-checked="false" aria-disabled="false"><input  type="checkbox"/><ins className="iCheck-helper"></ins></div></td>
                                                <td><i className="fa fa-envelope text-green"></i></td>
                                                <td className="mailbox-star"><Link to="#"><i className="fa fa-star-o text-yellow"></i></Link></td>
                                                <td className="mailbox-name"><Link to="gs1_email_read.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>TrustedSource Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                                                <td className="mailbox-date">15 days ago</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className="box-footer no-padding">
                                <div className="mailbox-controls">
                            
                                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i>
                                    </button>
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                                    </div>
                        
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                                    <div className="pull-right">
                                    1-50/200
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                                    </div>
                                
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </section>
            </div>
        );
    }
}

export default Notifications



