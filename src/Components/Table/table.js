import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Config from '../../Config';

const TableColumn = (props) => {
    if(props.column) {
        return props.column.map((item, index) => {
            return <th key={index}>{item.label}</th>
        });
    }
    return true;
}

const QualityControlStatus = (props) => {
    return <td key={props}><div className="form-group"><div className="radio"><i className="fa fa-check-circle"></i></div><div className="radio"><i className="fa fa-times-circle"></i></div></div></td>;
}

const fontAwesome = (index, props) => {
    if(props) {
        return <td key={index}><i className={props}></i></td>
    } else {
        return <td key={index}></td>
    }
}

const assignedTo = (props) => {
    return <td  key={props}><div className="form-group"><select className="form-control"><option>Select</option><option>Sifiso Buthelezi</option><option>Dimakatso Mnisi</option><option>Esther Young</option><option>Thembi Xaba</option><option>Ruth Cilliers</option></select></div></td>;
}

const ProductBrowserStatusImage = (index, props) => {
    return <td key={index}><div className="text-center status_percentage"><img src={Config.thumbnail_img_path+props.status_image} alt="" /><p className="text-info">{props.status}</p></div></td>
}

const ProductBrowserImage = (index, props) => {
    return <td key={index}><div className="prdt_img"><div><img src={(props.product_image_name) ? Config.thumbnail_img_path + props.product_image_name : Config.assetspath + 'default.png'} alt="" /><div className="imgratio"><span><i className="fa fa-image"></i><span className="pixels">{props.total_images}x</span></span></div></div></div></td>
}

const AddRequestToQueue = (index, data , props) => {
    return <td key={index}>
        <div className="text-center"> 
            <div className="add-btn" data-action={(data.add_to_queue) ? 'remove' : 'add'} data-gtin={data.GTIN} type='button' onClick={props.handleBasket}><i className={(data.add_to_queue) ? 'fa fa-close fa-2x' : 'fa fa-plus-circle fa-2x'}></i></div>
        </div>                             
    </td>
}

const ProductEditLink = (index, data, props) => {
    return <td key={index}>
        <div><Link to={Config.userPath[props.user_type]+'editproduct/'+data.GTIN}>{data.product_name}</Link></div>
    </td>
}

const callBack = (function_name, index, data, column_value,props) => {
    let funcation_data = [];
    if(function_name === 'QualityControlStatus') {
        funcation_data = QualityControlStatus(index);
    } else if(function_name === 'fontawesome') {
        funcation_data = fontAwesome(index, column_value);
    } else if(function_name === 'assigned') {
        funcation_data = assignedTo(index);
    } else if(function_name === 'ProductBrowserStatusImage') {
        funcation_data = ProductBrowserStatusImage(index, data);
    } else if(function_name === 'ProductBrowserImage') {
        funcation_data = ProductBrowserImage(index, data);
    }else if(function_name === 'AddRequestToQueue') {
        funcation_data = AddRequestToQueue(index, data, props);
    }else if(function_name === 'ProductEditLink') {
        funcation_data = ProductEditLink(index, data, props);
    }
    return funcation_data;
}

const TableRows = (props) => {
    if(props.rows){
        if(props.rows.length) {
            let no_of_columns = props.column.length;
            return props.rows.map((item, index) => {
                let rows = [];
                for(let i = 0; i < no_of_columns; i++) {
                    if(props.column[i].type === 'checkbox') {
                        let checkbox = <input type="checkbox" className="checkbox" />
                        rows.push(<td key={i}>{checkbox}</td>);
                    } else if(props.column[i].type === 'callback') {
                        let data = callBack(props.column[i].callback_function, i, item, item[props.column[i].key],props)
                        rows.push(data);
                    } else {
                        rows.push(<td key={i}>{item[props.column[i].key]}</td>);
                    }
                }
                return <tr key={index}>{rows}</tr>
            });
        }else{
            return <tr><td colSpan="9" className='no_products text-center'>No Products found.</td></tr>;
        }
    }
    else{
        return <tr><td colSpan="9" className='no_products text-center'>No Products found.</td></tr>;
    }
}

export default class TableComponent extends Component {
    constructor(props){
        super(props);
        this.handleBasket = this.handleBasket.bind(this);
    }
    handleBasket(e){
        let action = e.currentTarget.dataset.action;
        let gtin = e.currentTarget.dataset.gtin;

        let basket_products = document.getElementById( 'basket_products' ).value;
        if(basket_products !== '1'){
            if(action === 'add'){
                e.currentTarget.dataset.action = 'remove';
                e.target.className = 'fa fa-close fa-2x'
            }else{
                e.currentTarget.dataset.action = 'add';
                e.target.className = 'fa fa-plus-circle fa-2x'
            }
        }
        this.props.manageBasket(gtin,action);
    }
    render() {
        return (
            <table id={this.props.name} name={this.props.name} className={this.props.classname}>
                <tbody>
                    <tr>
                        <TableColumn {...this.props} />
                    </tr>
                    <TableRows handleBasket={this.handleBasket} {...this.props} />
                </tbody>
            </table>
        )
    }
}