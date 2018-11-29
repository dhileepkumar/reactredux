import React, { Component } from 'react';
import Table from '../../Components/Table/table';
import '../custom/css/adminlte.css';
import Config from '../../Config';
import { Col, Row } from 'react-bootstrap';

const tableColumn = [
    {label: '', key: 'id', type: 'checkbox'},
    {label: 'Sector', key: 'sector'},
    {label: '', key: 'square', type: 'callback', callback_function: 'fontawesome'},
    {label: 'Information Provider', key: 'information_provider'},
    {label: '', key: 'type', type: 'callback', callback_function: 'fontawesome'},
    {label: 'Description', key: 'description'},
    {label: 'GTIN' , key: 'gtin'},
    {label: 'Assigned To', key: 'assigned_to', type: 'callback', callback_function: 'assigned'},
    {label: 'Date in', key: 'date_in'},
    {label: 'SLA Due', key: 'sla_due'},
    {label: '', key: 'viewd', type: 'callback', callback_function: 'fontawesome'},
    {label: 'Pass/Fail', key: 'status', type: 'callback', callback_function: 'QualityControlStatus'}
];
const tableRows = [
    {id: 10, sector: 'CPG', square: '', information_provider: 'Mondelez', type: 'fa fa-pencil', description: 'Cadbury Lunch Bar Treat Size 144g', gtin: 6001065033990, assigned_to: 10, date_in: '7/20/18 13:32', sla_due: '4 Hours', viewd: 'fa fa-eye', status: 10},
    {id: 11, sector: 'CPG', square: 'fa fa-check-square', information_provider: 'Unilever SA	', type: 'fa fa-star', description: 'Skip Perfect Whites Auto Washing Liquid 1.5l', gtin: 6001087375719, assigned_to: 10, date_in: '7/21/18 12:05', sla_due: '18 Hours', viewd: 'fa fa-eye', status: 10}
];

export default class QualityControl extends Component {
    componentDidMount() {
        document.title = Config.name + ' Quality Control';
    }
    render(){
        return (
            <div className="quality_control">
                <section className="content-header">
                    <h1>
                        Quality Control
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href=""><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Quality Control</li>
                    </ol>
                </section>
                <section className="content">
                    <Row>
                        <Col md={12}>
                            <div className="box box-warning">
                                <div className="box-header">
                                    <h3 className="box-title">Pending Approval</h3>
                                </div>
                                <div className="box-body">
                                    <Table column={tableColumn} rows={tableRows} name="quality_control" classname="table table-bordered table-striped"/>
                                    {/* <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th></th>	
                                                <th>Sector</th>
                                                <th></th>
                                                <th>Information Provider</th>
                                                <th></th>
                                                <th>Description</th>
                                                <th>GTIN</th>
                                                <th>Assigned To</th>
                                                <th>Date in</th>
                                                <th>SLA Due</th>
                                                <th></th>
                                                <th>Pass/Fail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>CPG</td>
                                                <td></td>
                                                <td>Mondelez</td>
                                                <td><i className="fa fa-pencil"></i></td>
                                                <td>Cadbury Lunch Bar Treat Size 144g</td>
                                                <td><a href="">6001065033990</a></td>
                                                <td>
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>Select</option>
                                                            <option>Sifiso Buthelezi</option>
                                                            <option>Dimakatso Mnisi</option>
                                                            <option>Esther Young</option>
                                                            <option>Thembi Xaba</option>
                                                            <option>Ruth Cilliers</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>7/20/18 13:32</td>
                                                <td>4 Hours</td>
                                                <td><i className="fa fa-eye"></i></td>
                                                <td>
                                                    <div className="form-group">
                                                            <div className="radio">
                                                                <i className="fa fa-check-circle"></i>
                                                            </div>
                                                            <div className="radio">
                                                                <i className="fa fa-times-circle"></i>
                                                            </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                    
                                    <Col md={3}>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Select Bulk Action</option>
                                                <option>Approve</option>
                                                <option>Reject</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}
