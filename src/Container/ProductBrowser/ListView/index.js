import React, { Component } from 'react';
// import Table from '../../../Components/Table';
import Table from '../../../Components/Table/table';
import Config from '../../../Config';

    // const tableColumn = [
    //     // {key: 'tm_item_id', label: 'Id', isKey: true, isSort: false},
    //     {key: 'product_image_name', label: 'Image', isSort: false, isImage: true},
    //     {key: 'product_name', label: 'Product Name', isSort: true},
    //     {key: 'languageSpecificBrandName', label: 'Brand', isSort: true},
    //     {key: 'Subbrand', label: 'Sub Brand', isSort: true},
    //     {key: 'FunctionalName', label: 'Functional Name', isSort: true},
    //     {key: 'Variant', label: 'Variant', isSort: true},
    //     {key: 'GTIN', label: 'GTIN', isSort: true},
    //     {key: 'status', label: 'Status', isSort: false, isStatusImage: true},
    //     {key: 'approve', label: 'Approve', isSort: true},
    // ];

    const tableColumn = [
        // {key: 'tm_item_id', label: 'Id', isKey: true, isSort: false},
        {key: 'product_image_name', label: 'Image', isSort: false, isImage: true, type: 'callback', callback_function: 'ProductBrowserImage'},
        {key: 'product_name', label: 'Product Name', isSort: true, type: 'callback', callback_function: 'ProductEditLink'},
        {key: 'languageSpecificBrandName', label: 'Brand', isSort: true},
        {key: 'Subbrand', label: 'Sub Brand', isSort: true},
        {key: 'FunctionalName', label: 'Functional Name', isSort: true},
        {key: 'Variant', label: 'Variant', isSort: true},
        {key: 'GTIN', label: 'GTIN', isSort: true},
        {key: 'status', label: 'Status', isSort: false, type: 'callback', callback_function: 'ProductBrowserStatusImage'},
        {key: 'approve', label: 'Approve', isSort: false},
    ];

    const tableColumnRetailer = [
        {key: 'product_image_name', label: 'Image', isSort: false, isImage: true, type: 'callback', callback_function: 'ProductBrowserImage'},
        {key: 'product_name', label: 'Product Name', isSort: true, type: 'callback', callback_function: 'ProductEditLink'},
        {key: 'languageSpecificBrandName', label: 'Brand', isSort: true},
        {key: 'Subbrand', label: 'Sub Brand', isSort: true},
        {key: 'FunctionalName', label: 'Functional Name', isSort: true},
        {key: 'Variant', label: 'Variant', isSort: true},
        {key: 'GTIN', label: 'GTIN', isSort: true},
        {key: 'status', label: 'Status', isSort: false, type: 'callback', callback_function: 'ProductBrowserStatusImage'},
        {key: 'add_to_queue', label: 'Add to Request queue', isSort: false, type: 'callback', callback_function: 'AddRequestToQueue'},
    ];
    
// const products = [
//     {
//         FunctionalName: "Nappies",
//         GTIN:"8717644256152",
//         Subbrand:"Active Baby",
//         Variant:"Size 5 Mega Pack",
//         approve:"",
//         languageSpecificBrandName:"Pampers",
//         product_image_name:"Pampers.jpg",
//         product_name:"Pampers Active BabyNappiesSize 5 Mega Pack111PC",
//         status:"Saved",
//         status_image:"saved.png",
//         tm_item_id:"1",
//         total_images:1
//     }
// ];
class ListView extends Component {
    
    render() {
        return(
            // <Table data={this.props.products} tableColumn={tableColumn} />
            <Table user_type={this.props.user_type} manageBasket = {this.props.manageBasket} column={(this.props.user_type === Config.userTypes.Retailer) ? tableColumnRetailer : tableColumn} rows={this.props.products} name="product_browser" classname="table table-bordered table-striped table-hover"/>
        )
    }
}

export default ListView;
