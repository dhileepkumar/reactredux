import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Tabs, Tab, Row, Col, Button, Modal } from 'react-bootstrap';
// import DatePicker from 'react-date-picker';
import Common from '../../../Common';

class BasicData extends Component {

	constructor(props) {
		super(props);
		this.handleSelectCategory = this.handleSelectCategory.bind(this);
		this.handleSelectSubCategory = this.handleSelectSubCategory.bind(this);
		this.handleSelectMarket = this.handleSelectMarket.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.updateOptions = this.updateOptions.bind(this);
		this.state = {
			show_modal: false,
			modal_category: false,
			modal_subcategory: false,
			modal_market: false,
			modal_title: 'Main Category',
			modal_label: 'Enter New Category',
		}
	}

	handleSelectCategory() {
		this.setState({ show_modal: true });
		alert('cat');
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

	render() {
		return (
			<div id="s3_tab1">
				<div className="container-fluid">
					<Row>
						<Col xs={12} md={3}>
							<div className="pdform_column last_coumn preview_product_image">
								<div className="preview_title">
									<p>Preview</p>
								</div>
								<div className="preview_img">
									<img src="assets/images/default.png" alt="" />
								</div>
							</div>
						</Col>
						<Col xs={12} sm={6} md={5}>
							<div className="pdform_column first_coumn">
								<Row>
									<Col sm={6}>
										<div className="form-group">
											<label>Category</label>
											<Field className="form-control hsmall arrow" onChange={this.handleSelectCategory} label="Category" name="category_name" id="category_main" component={Common.renderSelect}>
												<option value="">Select Category</option>
												<option value="other">Add New</option>
											</Field>
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group">
											<label>Sub-Category</label>
											<Field className="form-control hsmall arrow" onChange={this.handleSelectSubCategory} name="sub_category_name" id="sub_category" component={Common.renderSelect}>
												<option value="">Select Sub Category</option>
												<option value="other">Add New</option>
											</Field>
										</div>
									</Col>
								</Row>
								<div className="form-group hide">
									<label>New Category</label>
									<Field name="main_category_other" component="input" type="text" id="other_main_Category" className="form-control hsmall" />
								</div>
								<div className="form-group hide">
									<label>New Sub Category</label>
									<Field name="sub_category_other" component="input" type="text" id="other_sub_Category" className="form-control hsmall" />
								</div>
								<div className="form-group">
									<label>Market</label>
									<Field className="form-control hsmall arrow" name="market_name" id="target_market" component="select">
									</Field>
								</div>
								<div className="form-group hide">
									<label>New Market</label>
									<Field name="other_target_market" component="input" type="text" id="target_market_other" className="form-control hsmall" />
								</div>
								<div className="form-group">
									<label>Brand Name</label>
									<Field name="brand_name" component={Common.renderInput} type="text" id="brandname" className="form-control hsmall" />
								</div>
								<div className="form-group ">
									<label>Sub Brand</label>
									<Field name="sub_brand_name" component="input" type="text" id="subbrandname" className="form-control hsmall" />
								</div>
								<div className="form-group {{ $errors->has('functional_name') ? ' has-error' : '' }}">
									<label>Functional Name</label>
									<Field name="functional_name" component={Common.renderInput} type="text" id="functionalname" className="form-control hsmall" />
								</div>
								<div className="form-group {{ $errors->has('net_content') ? ' has-error' : '' }}">
									<label>Variant</label>
									<Field name="variant_name" component={Common.renderInput} type="text" id="variant" className="form-control hsmall" />
								</div>
							</div>
						</Col>
						<Col xs={12} sm={6} md={4}>
							<div className="pdform_column second_coumn">
								<Row>
									<Col sm={6}>
										<div className="form-group">
											<label>Net Content</label>
											<Field name="net_content" component={Common.renderInput} type="text" id="netcontent" className="form-control hsmall" />
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group">
											<label>UOM</label>
											<Field name="uom" component="select" id="uom" className="form-control hsmall">
											</Field>
										</div>
									</Col>
								</Row>
								<Row>
									<Col sm={6}>
										<div className="form-group">
											<label>Start Availablity Date</label>
											<Field name="start_availability_date" component={Common.renderDate} type="text" id="start_availability_date" className="form-control hsmall" />
											{/* <DatePicker name="start_availability_date" id="dp1" onChange={this.props.setStartDate} value={this.props.start_availability_date} disabledKeyboardNavigation/> */}
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group">
											<label>End Availablity Date</label>
											<Field name="end_availability_date" component={Common.renderDate} type="text" id="end_availability_date" className="form-control hsmall" />
											{/* <DatePicker name="end_availability_date" id="dp2" onChange={this.props.setEndDate} value={this.props.end_availability_date} disabledKeyboardNavigation/> */}
										</div>
									</Col>
								</Row>
								<div className="form-group">
									<label>Product Name</label>
									<Field name="short_description" component="textarea" id="productname" className="form-control" disabled />
								</div>

								<Row>
									<Col sm={6}>
										<div className="form-group">
											<label>Shelf Life in Days</label>
											<Field name="shelf_line_days" component="input" type="text" id="shelf_line_days" className="form-control hsmall" />
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group">
											<label>Date on Packaging</label>
											<Field className="form-control hsmall arrow" name="date_of_packaging" id="date_of_packaging" component="select">
												<option value="">Select Package</option>
												<option value="Best Before">Best Before</option>
											</Field>
										</div>
									</Col>
								</Row>
								<div className="form-group">
									<label>Country of Origin</label>
									<Field className="form-control hsmall arrow" name="country_origin" id="country_origin" component="select">
										<option value="">Select Country</option>
									</Field>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className="pdetails_btform">
					<div className="container-fluid">
						<Row>
							<Col xs={12} sm={8}>
								<div className="bdata_cunit">
									<Tabs id="step3_innertab">
										<Tab eventKey={1} title="Consumer Unit">
											<div className="cunitform">
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>GTIN</label>
															<Field name="cu_gtin_code" component={Common.renderInput} type="text" id="cu_gtin_code" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>SKU#</label>
															<Field name="cu_sku" component="input" type="text" id="cu_sku" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="cu_dispatch_unit" id="dunit" component="input" type="checkbox" value="1" />
																<label htmlFor="dunit">Dispatch Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="cu_consumer_unit" id="cunit" component="input" type="checkbox" value="1" />
																<label htmlFor="cunit">Consumer Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Quantity of next level</label>
															<Field name="cu_quantityof_level" component="input" type="text" id="cu_quantityof_level" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Packaging type</label>
															<Field name="cu_packaging_type" component="select" id="cu_packaging_type" className="form-control hsmall arrow" >
																<option value="">Select Packaging Type</option>
															</Field>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="cu_invoice_unit" id="inunit" component="input" type="checkbox" value="1" />
																<label htmlFor="inunit">Invoice Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="cu_order_unit" id="ounit" component="input" type="checkbox" value="1" />
																<label htmlFor="ounit">Order Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Height</label>
																	<Field name="cu_height" component="input" type="text" id="cu_height" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Width</label>
																	<Field name="cu_width" component="input" type="text" id="cu_width" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Length</label>
																	<Field name="cu_length" component="input" type="text" id="cu_length" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="cu_productatt_uom" component="input" type="text" id="cu_productatt_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
													<Col xs={12} sm={6}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="cu_pmr" id="pmr" component="input" type="checkbox" value="1" />
																<label htmlFor="pmr">Packaging Marked Returnable</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Gross Weight</label>
																	<Field name="cu_gross_weight" component="input" type="text" id="cu_gross_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Packaging Weight</label>
																	<Field name="cu_packaging_weight" component="input" type="text" id="cu_packaging_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Net Weight</label>
																	<Field name="cu_net_weight" component="input" type="text" id="cu_net_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="cu_weighting_uom" component="input" type="text" id="cu_weighting_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
												</Row>
											</div>
										</Tab>
										<Tab eventKey={2} title="Shrink">
											<div className="cunitform">
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>GTIN</label>
															<Field name="shr_gtin_code" component="input" type="text" id="shr_gtin_code" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>SKU#</label>
															<Field name="shr_sku" component="input" type="text" id="shr_sku" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="shr_dispatch_unit" id="shr_dunit" component="input" type="checkbox" value="1" />
																<label htmlFor="shr_dunit">Dispatch Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="shr_consumer_unit" id="shr_cunit" component="input" type="checkbox" value="1" />
																<label htmlFor="shr_cunit">Consumer Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Quantity of next level</label>
															<Field name="shr_quantityof_level" component="input" type="text" id="shr_quantityof_level" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Packaging type</label>
															<Field name="shr_packaging_type" component="select" id="shr_packaging_type" className="form-control hsmall arrow" >
																<option value="">Select Packaging Type</option>
															</Field>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="shr_invoice_unit" id="shr_inunit" component="input" type="checkbox" value="1" />
																<label htmlFor="shr_inunit">Invoice Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="shr_order_unit" id="shr_ounit" component="input" type="checkbox" value="1" />
																<label htmlFor="shr_ounit">Order Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Height</label>
																	<Field name="shr_height" component="input" type="text" id="shr_height" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Width</label>
																	<Field name="shr_width" component="input" type="text" id="shr_width" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Length</label>
																	<Field name="shr_length" component="input" type="text" id="shr_length" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="shr_productatt_uom" component="input" type="text" id="shr_productatt_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
													<Col xs={12} sm={6}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="shr_pmr" id="shr_pmr" component="input" type="checkbox" value="1" />
																<label htmlFor="shr_pmr">Packaging Marked Returnable</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Gross Weight</label>
																	<Field name="shr_gross_weight" component="input" type="text" id="shr_gross_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Packaging Weight</label>
																	<Field name="shr_packaging_weight" component="input" type="text" id="shr_packaging_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Net Weight</label>
																	<Field name="shr_net_weight" component="input" type="text" id="shr_net_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="shr_weighting_uom" component="input" type="text" id="shr_weighting_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
												</Row>
											</div>
										</Tab>
										<Tab eventKey={3} title="Case">
											<div className="cunitform">
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>GTIN</label>
															<Field name="case_gtin_code" component="input" type="text" id="case_gtin_code" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>SKU#</label>
															<Field name="case_sku" component="input" type="text" id="case_sku" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="case_dispatch_unit" id="case_dunit" component="input" type="checkbox" value="1" />
																<label htmlFor="case_dunit">Dispatch Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="case_consumer_unit" id="case_cunit" component="input" type="checkbox" value="1" />
																<label htmlFor="case_cunit">Consumer Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Quantity of next level</label>
															<Field name="case_quantityof_level" component="input" type="text" id="case_quantityof_level" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Packaging type</label>
															<Field name="case_packaging_type" component="select" id="case_packaging_type" className="form-control hsmall arrow" >
																<option value="">Select Packaging Type</option>
															</Field>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="case_invoice_unit" id="case_inunit" component="input" type="checkbox" value="1" />
																<label htmlFor="case_inunit">Invoice Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="case_order_unit" id="case_ounit" component="input" type="checkbox" value="1" />
																<label htmlFor="case_ounit">Order Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Height</label>
																	<Field name="case_height" component="input" type="text" id="case_height" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Width</label>
																	<Field name="case_width" component="input" type="text" id="case_width" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Length</label>
																	<Field name="case_length" component="input" type="text" id="case_length" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="case_productatt_uom" component="input" type="text" id="case_productatt_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
													<Col xs={12} sm={6}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="case_pmr" id="case_pmr" component="input" type="checkbox" value="1" />
																<label htmlFor="case_pmr">Packaging Marked Returnable</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Gross Weight</label>
																	<Field name="case_gross_weight" component="input" type="text" id="case_gross_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Packaging Weight</label>
																	<Field name="case_packaging_weight" component="input" type="text" id="case_packaging_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Net Weight</label>
																	<Field name="case_net_weight" component="input" type="text" id="case_net_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="case_weighting_uom" component="input" type="text" id="case_weighting_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
												</Row>
											</div>
										</Tab>
										<Tab eventKey={4} title="Pallet">
											<div className="cunitform">
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>GTIN</label>
															<Field name="pallet_gtin_code" component="input" type="text" id="pallet_gtin_code" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>SKU#</label>
															<Field name="pallet_sku" component="input" type="text" id="pallet_sku" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="pallet_dispatch_unit" id="pallet_dunit" component="input" type="checkbox" value="1" />
																<label htmlFor="pallet_dunit">Dispatch Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="pallet_consumer_unit" id="pallet_cunit" component="input" type="checkbox" value="1" />
																<label htmlFor="pallet_cunit">Consumer Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Quantity of next level</label>
															<Field name="pallet_quantityof_level" component="input" type="text" id="pallet_quantityof_level" className="form-control" />
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group">
															<label>Packaging type</label>
															<Field name="pallet_packaging_type" component="select" id="pallet_packaging_type" className="form-control hsmall arrow" >
																<option value="">Select Packaging Type</option>
															</Field>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="pallet_invoice_unit" id="pallet_inunit" component="input" type="checkbox" value="1" />
																<label htmlFor="pallet_inunit">Invoice Unit</label>
															</div>
														</div>
													</Col>
													<Col xs={12} sm={6} md={3}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="pallet_order_unit" id="pallet_ounit" component="input" type="checkbox" value="1" />
																<label htmlFor="pallet_ounit">Order Unit</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Height</label>
																	<Field name="pallet_height" component="input" type="text" id="pallet_height" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Width</label>
																	<Field name="pallet_width" component="input" type="text" id="pallet_width" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Length</label>
																	<Field name="pallet_length" component="input" type="text" id="pallet_length" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="pallet_productatt_uom" component="input" type="text" id="pallet_productatt_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
													<Col xs={12} sm={6}>
														<div className="form-group nolabel">
															<div className="inline-checkbox tick">
																<Field name="pallet_pmr" id="pallet_pmr" component="input" type="checkbox" value="1" />
																<label htmlFor="pallet_pmr">Packaging Marked Returnable</label>
															</div>
														</div>
													</Col>
												</Row>
												<Row>
													<Col xs={12} sm={6}>
														<Row>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Gross Weight</label>
																	<Field name="pallet_gross_weight" component="input" type="text" id="pallet_gross_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Packaging Weight</label>
																	<Field name="pallet_packaging_weight" component="input" type="text" id="pallet_packaging_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>Net Weight</label>
																	<Field name="pallet_net_weight" component="input" type="text" id="pallet_net_weight" className="form-control" />
																</div>
															</Col>
															<Col xs={12} sm={6} md={3}>
																<div className="form-group">
																	<label>UOM</label>
																	<Field name="pallet_weighting_uom" component="input" type="text" id="pallet_weighting_uom" className="form-control" />
																</div>
															</Col>
														</Row>
													</Col>
												</Row>
											</div>
										</Tab>
									</Tabs>
								</div>
							</Col>
							<Col xs={12} sm={4} md={3}>
								<div className="taxlist lightgray">
									<div className="form-group">
										<Row>
											<Col xs={8}>
												<div className="inline-checkbox tick">
													<Field name="vatexempt" id="vatexempt" component="input" type="checkbox" value="1" />
													<label htmlFor="vatexempt">VAT Exempt</label>
												</div>
											</Col>
											<Col xs={4}>
												<Field name="vat_exemp_percentage" id="vat_exemp_percentage" component="input" type="text" className="form-control" />
											</Col>
										</Row>
									</div>
									<div className="form-group">
										<div className="inline-checkbox tick">
											<Field name="genetically_modified" id="gm" component="input" type="checkbox" value="1" />
											<label htmlFor="gm">Genetically Modified</label>
										</div>
									</div>
									<div className="form-group">
										<div className="inline-checkbox tick">
											<Field name="dangerous_goods" id="dgoods" component="input" type="checkbox" value="1" />
											<label htmlFor="dgoods">Dangerous Goods</label>
										</div>
									</div>
									<div className="form-group">
										<div className="inline-checkbox tick">
											<Field name="handling_instruction" id="handlingins" component="input" type="checkbox" value="1" />
											<label htmlFor="handlingins">Handling Instructions</label>
										</div>
									</div>
									<div className="form-group">
										<div className="inline-checkbox tick">
											<Field name="is_trade_item" id="iti" component="input" type="checkbox" value="1" />
											<label htmlFor="iti">Is Trade Item</label>
										</div>
									</div>
								</div>
							</Col>
							<Col xs={12} md={1}>
								<div className="saveform">
									<div className="profile_cmpletd">
										<img src="assets/images/percentage_img2.png" alt="" />
									</div>
									<div className="save_btn">
										<Button type="submit" id="status_save_option" className="btn-save" value="Save">Submit</Button>
									</div>
									<div className="next_btn">
										<Button type="button" onClick={this.props.nextPage} className="btn-next"><img src="assets/images/nxt_btn.png" alt="Next page" /> Next Page</Button>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
				<Modal show={this.state.show_modal} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Test
				</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default BasicData;