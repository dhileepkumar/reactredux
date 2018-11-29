import React, { Component } from 'react';
import ConsumerUnit from './TabView/ConsumerUnit'; 

// const images = ['assets/images/img1.jpg', 'assets/images/imag2.jpg'];

class ProductReview extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.nextTab = this.nextTab.bind(this);
        this.state = {
            tabkey: 1,
            //images: ['assets/images/img1.jpg', 'assets/images/imag2.jpg'],
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
                                {/* <Tabs id="step3_innertab" activeKey={this.state.tabkey} onSelect={this.handleSelect}>
                                    <Tab eventKey={1} title="Consumer Unit"> */}
                                        <ConsumerUnit {...this.state} {...this.props} nextTab={this.nextTab} />
                                    {/* </Tab>
                                    <Tab eventKey={2} title="Shrink">
                                        <Shrink {...this.state} {...this.props} nextTab={this.nextTab} />
                                    </Tab>
                                    <Tab eventKey={3} title="Case">
                                        <Case {...this.state} {...this.props} nextTab={this.nextTab} />
                                    </Tab>
                                    <Tab eventKey={4} title="Pallet">
                                        <Pallet {...this.state} {...this.props} nextTab={this.nextTab} />
                                    </Tab>
                                </Tabs> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductReview;