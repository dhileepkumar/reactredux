import React, { Component } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
// import DatePicker from 'react-date-picker';
import ConsumerUnit from './TabView/ConsumerUnit';
import Shrink from './TabView/Shrink';
import Case from './TabView/Case';
import Pallet from './TabView/Pallet';

class BasicData extends Component {

	constructor(props) {
		super(props);
		this.handleSelectCategory = this.handleSelectCategory.bind(this);
		this.handleSelectSubCategory = this.handleSelectSubCategory.bind(this);
		this.handleSelectMarket = this.handleSelectMarket.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.updateOptions = this.updateOptions.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.nextTab = this.nextTab.bind(this);
		this.state = {
			show_modal: false,
			modal_category: false,
			modal_subcategory: false,
			modal_market: false,
			modal_title: 'Main Category',
			modal_label: 'Enter New Category',
			tabkey: 1,
			cu_subcat_list : this.props.cu_subcategorylist,
			shr_subcat_list : this.props.shr_subcategorylist,
			case_subcat_list : this.props.case_subcategorylist,
			pallet_subcat_list : this.props.pallet_subcategorylist
		}
	}

	static getDerivedStateFromProps(props){
		return {
			cu_subcat_list : props.cu_subcategorylist,
			shr_subcat_list : props.shr_subcategorylist,
			case_subcat_list : props.case_subcategorylist,
			pallet_subcat_list : props.pallet_subcategorylist
		}
	}

	handleSelectCategory(type,event) {

		if(event.target.value !== ''){
			if(event.target.value === 'other'){

			}else{
				var sub_category_values={
					token:this.props.token,
					parent_category:event.target.value
				}
				this.props.SubCategoryList(sub_category_values,type);
			}
		}else{
			if(type === 'cu'){
				this.setState({
					cu_subcat_list : []
				})
			}else if(type === 'shr'){
				this.setState({
					shr_subcat_list : []
				})
			}else if(type === 'case'){
				this.setState({
					case_subcat_list : []
				})
			}else if(type === 'pallet'){
				this.setState({
					pallet_subcat_list : []
				})
			}else{
				return false;
			}
		}
		//this.setState({ show_modal: true });
		
	}
	handleSelectSubCategory() {
		alert('subcat');
	}
	handleSelectMarket() {
		alert('marcat');
	}

	updateOptions() {
		alert('updateopt');
	}

	handleClose() {
		this.setState({ show_modal: false });
	}

	handleSelect(tabkey) {
		this.setState({ tabkey });
	}

	nextTab() {
		this.setState({ tabkey: this.state.tabkey+1});
	}

	render() {
		return (
			<div id="s3_tab1">
				<div className="pdetails_btform">
					<div className="container-fluid">
						<Row>
							<Col xs={12} sm={12}>
								<div className="bdata_cunit">
									<Tabs id="step3_innertab" activeKey={this.state.tabkey} onSelect={this.handleSelect}>
										<Tab eventKey={1} title="Consumer Unit">
											<ConsumerUnit handleSelectCategory={this.handleSelectCategory} {...this.state} {...this.props} nextTab={this.nextTab} />
										</Tab>
										<Tab eventKey={2} title="Shrink">
											<Shrink handleSelectCategory={this.handleSelectCategory} {...this.state} {...this.props} nextTab={this.nextTab} />
										</Tab>
										<Tab eventKey={3} title="Case">
											<Case handleSelectCategory={this.handleSelectCategory} {...this.state} {...this.props} nextTab={this.nextTab} />
										</Tab>
										<Tab eventKey={4} title="Pallet">
											<Pallet handleSelectCategory={this.handleSelectCategory} {...this.state} {...this.props} nextTab={this.nextTab} />
										</Tab>
									</Tabs>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

export default BasicData;