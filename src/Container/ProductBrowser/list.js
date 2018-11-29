import React, { Component } from 'react';
import { Field } from 'redux-form';
import ListView from '../ProductBrowser/ListView';
import ThumbnailView from '../ProductBrowser/ThumbnailView';

class ProductsList extends Component {
    constructor(props) {
        super(props)
        this.handleView = this.handleView.bind(this);
        this.state = { viewType: true };
    }

  
    handleView(e) {
        if(e.target.value === 'list_view') {
            this.setState({viewType : true});
        } else {
            this.setState({viewType : false});
        }
    }
    render(){
        return (
                <div className="setp_2maintable"> 
                    <div className="view_thumbnail_list">
                        <div className="form-group">
                            <Field id="view_type" name="view_type" data-placeholder="" className="form-control custom_select" component="select" onChange={this.handleView.bind(this)}>
                                <option value="list_view">List View</option>
                                <option value="thumbnail_view">Thumbnail View</option> 
                            </Field>
                        </div>
                    </div>
                    <div className="table-responsive search_results">
                        {this.state.viewType ? <ListView  {...this.props} /> : <ThumbnailView  {...this.props} />}
                    </div>
                </div>
        )
    }
}

export default ProductsList;