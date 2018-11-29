import React, { Component } from 'react';
import '../../Components/BootstrapTable/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BootstrapTableView extends Component {
    imageFormatter(cell, row) {
        return '<div className="prdt_img"><div><img src="assets/images/'+cell+'"/><div className="imgratio"><span><i className="fa fa-image"></i><span className="pixels">'+row.total_images+'x</span></span></div></div></div>';
        
    }
    statusFormatter(cell, row) {
        return '<div className="text-center status_percentage"><img src="assets/images/'+row.status_image+'" /><p className="text-info">'+cell+'</p></div>';
    }
    generateTableColumns(data) {
        let columns = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].isImage) {
                columns.push(<TableHeaderColumn key={i} isKey={data[i].isKey ? true : false} dataField={data[i].key} dataFormat={this.imageFormatter} dataSort={data[i].isSort ? true : false}>{data[i].label}</TableHeaderColumn>);
            } else if(data[i].isStatusImage) {
                columns.push(<TableHeaderColumn key={i} isKey={data[i].isKey ? true : false} dataField={data[i].key} dataFormat={this.statusFormatter} dataSort={data[i].isSort ? true : false}>{data[i].label}</TableHeaderColumn>);
            } else {
                columns.push(<TableHeaderColumn key={i} isKey={data[i].isKey ? true : false} dataField={data[i].key} dataSort={data[i].isSort ? true : false}>{data[i].label}</TableHeaderColumn>);
            }
        }
        return columns;
    }
    render() {
        return (
            <BootstrapTable data={this.props.data} multiColumnSort={ 2 } striped hover>
                {this.generateTableColumns(this.props.tableColumn)}
            </BootstrapTable>
        )
    }
}

export default BootstrapTableView;