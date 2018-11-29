import React, { Component } from 'react';
import ConsumerUnit from './TabView/ConsumerUnit';

class ProductReview extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.nextTab = this.nextTab.bind(this);
        this.state = {
            tabkey: 1,
            images: [{'image_name':'default.png'}],
        }
    }

    handleSelect(tabkey) {
        this.setState({ tabkey });
    }

    nextTab() {
        this.setState({ tabkey: this.state.tabkey + 1 });
    }

    render() {
        return (
            <div id="s3_tab4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="bdata_cunit">
                              
                                   
                                        <ConsumerUnit {...this.state} {...this.props} nextTab={this.nextTab} />
                                   
                                   
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductReview;