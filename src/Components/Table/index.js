import React, { Component } from 'react';
import Config from '../../Config';

const TableColumn = (props) => {
    return props.tableColumn.map((item, index) => {
        return <th key={index}>{item.label}</th>
    });
}
const TableBody = (props) => {
    if(props.data.length){
        return props.data.map((item, index) => {
            return <tr key={index}>
                {/* <td>{item.tm_item_id}</td> */}
                <td>
                    <div className="prdt_img">
                        <div>
                            <img src={Config.detail_img_path + item.product_image_name} alt="" />
                            <div className="imgratio">
                                <span>
                                    <i className="fa fa-image"></i>
                                    <span className="pixels">
                                        {item.total_images}x
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </td>
                <td>{item.product_name}</td>
                <td>{item.languageSpecificBrandName}</td>
                <td>{item.Subbrand}</td>
                <td>{item.FunctionalName}</td>
                <td>{item.Variant}</td>
                <td>{item.GTIN}</td>
                <td>
                    <div className="text-center status_percentage">
                        <img src={Config.assetspath+item.status_image} alt="" />
                        <p className="text-info">{item.status}</p>
                    </div>
                </td>
                <td>{item.approve}</td>
            </tr>
        });
    }else{
        return <tr><td colSpan="9" className='no_products'>No Products found.</td></tr>;
    }
}
class TableView extends Component {
    render() {
        return(
            <div>
                <table className="table table-bordered table-striped table-hover">
                    <tbody>
                        
                        <tr>
                            <TableColumn {...this.props}/>
                        </tr>
                            <TableBody {...this.props}/>
                    </tbody>
                </table>
            </div>
        )
    }
} 

export default TableView;