import React, {Component} from 'react';
import PageTitle from '../../../Components/PageTitle';
import {Link} from 'react-router-dom';
import { Col,Panel,Row  } from 'react-bootstrap';
import CKEditor from "react-ckeditor-component";
import '../../custom/css/adminlte.css';

class Compose extends Component {

    constructor(props, context) {
        super(props, context);
        this.togglePanel = this.togglePanel.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
          panel_open : true,
          panel_icon : 'fa fa-minus',
          inbox : true,
          sent : false,
          content: 'content'
        };
    }
    updateContent(newContent) {
        this.setState({
            content: newContent
        })
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
                        <Link to="/gs1/notifications/inbox" className="btn btn-primary btn-block margin-bottom">Back to Inbox</Link>
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
                                        <li><Link to="/gs1/notifications/inbox"><i className="fa fa-inbox"></i> Inbox
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
              <h3 className="box-title"> New Message</h3>
            </div>
            <div className="box-body">
              <div className="form-group">
                <input className="form-control" placeholder="To:"/>
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Subject:"/>
              </div>
              <div className="form-group">
                <textarea id="-textarea" className="form-control"></textarea>
              </div>
              <div className="form-group">
                <div className="btn btn-default btn-file">
                  <i className="fa fa-paperclip"></i> Attachment
                  <input type="file" name="attachment"/>
                </div>
                <p className="help-block">Max. 32MB</p>
              </div>
            </div>
            <div className="box-footer">
              <div className="pull-right">
                <button type="button" className="btn btn-default"><i className="fa fa-pencil"></i> Draft</button>
                <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Send</button>
              </div>
              <button type="reset" className="btn btn-default"><i className="fa fa-times"></i> Discard</button>
            </div>
          </div>
                    </Col>
                </Row>
                </section>
            </div>
        );
    }
}

export default Compose



