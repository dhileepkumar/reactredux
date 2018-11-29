import React, { Component } from 'react';
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
class NutritionalInformation extends Component {
    constructor(props){
        super(props)
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.displayTableData = this.displayTableData.bind(this);
        this.state = {
            removeSelected: true,
			disabled: false,
            value:[],
            rtl: false,
        }
        this._table_list='';

       
    }

    displayTableData(value){
        if(value && value.length){
            this._table_list = value.map((list,key)=>{
                if(list){
                    return <tr key={key}><td>{list.nutrientTypeCode}</td><td>{list.nutrientName}</td><td>{list.quantityContained}</td><td>{list.quantityContainedUom}</td><td></td></tr>;
                }
            })
        }
        else{
            this._table_list = <tr><td colspan="5"> No Nutrition Data Uploaded</td></tr>;
        }

        return  this._table_list;
    }

   
    handleSelectChange = (value) => {
            this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return ( <div className="col-xs-12 col-md-8 food_nutritional">
            <div className="nutri_info lightgray">
               <h3>Nutritional Information <span className="pull-right">% Daily Value*</span></h3>
               <div className="form-group">
                <label>Serving Size</label>
                    <select className="form-control select2 select2-hidden-accessible">
                        <option selected="selected">50g</option>
                        <option>100g</option>
                    </select>
                </div>
               <div className="box myBox">																				           
                    <div className="box-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                        <th>Nutrient Code</th>
                                        <th>Nutrient Name</th>
                                        <th>Quantity</th>
                                        <th>Uom</th>
                                        <th>% Daily Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayTableData(this.props.nutritions)}
                            </tbody>
                        </table>
                    </div>
                </div>
               <h3>Ingredients</h3>
               <div className="form-group">
                  <input type="text" className="type form-control" value="Milk, Sugar, Cream, Liquid Sugar, Corn Syrup, Whey, Vegetable Gums, Mono and Diglycerdices, Polysobrate" />
               </div>
               <h3>Allergens</h3>
               <div className="form-group">
                 
                  <Select id="status-select" options={options} clearable={true}  searchable={true}  placeholder={false}  defaultValue={value} 
                            onChange={this.handleSelectChange} multi />

               </div>
               <h3>Other Information</h3>
               <div className="otinfo_accr darkgryhead" id="otinfo_accr">
                  <div className="row">
                     <div className="col-xs-12 col-sm-6">
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr1">
                                 Claims
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr1" className="panel-collapse collapse">
                              1
                           </div>
                        </div>
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a className="collpased" data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr2">
                                 Certifications
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr2" className="panel-collapse collapse">
                              2
                           </div>
                        </div>
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a className="collpased" data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr3">
                                 GMO Disclosure
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr3" className="panel-collapse collapse">
                              3
                           </div>
                        </div>
                     </div>
                     <div className="col-xs-12 col-sm-6">
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr4">
                                 Health &amp; Safety
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr4" className="panel-collapse collapse">
                              1
                           </div>
                        </div>
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a className="collpased" data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr5">
                                 Product Instructions
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr5" className="panel-collapse collapse">
                              2
                           </div>
                        </div>
                        <div className="panel panel-default">
                           <div className="panel-heading">
                              <h4 className="panel-title">
                                 <a className="collpased" data-toggle="collapse" data-parent="#otinfo_accr" href="#otinfo_accr6">
                                 Sustainability
                                 </a>
                              </h4>
                           </div>
                           <div id="otinfo_accr6" className="panel-collapse collapse">
                              3
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        );
    }
}

export default NutritionalInformation;