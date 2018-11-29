import React, { Component } from 'react';
import Pagination from "react-js-pagination";

class BootstrapPagination extends Component {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.state = {
            activePage: this.props.pagenumber,
        }
      }
    
    static getDerivedStateFromProps(props){
        return {
            activePage:props.pagenumber
        }
    }

    handlePageChange(pageNumber) {
        this.setState({activePage : pageNumber},()=>{ this.props.filterProductsPagination(pageNumber) });
    }

    render() {
        return (
            <Pagination
              pageRangeDisplayed={10}
              activePage={this.state.activePage}
              itemsCountPerPage={this.props.recordlimit}
              //itemsCountPerPage={10}
              totalItemsCount={this.props.totalproducts}
             // totalItemsCount={31}
              onChange={this.handlePageChange}
              activeLinkClass={'pagination_link'}
            />
        );
    }
}

export default BootstrapPagination;