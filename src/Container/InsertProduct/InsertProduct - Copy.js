import React, { Component } from 'react';
import {  Tabs, Tab  } from 'react-bootstrap';
import { reduxForm } from 'redux-form'
import Config from '../../Config';
import BasicData from '../InsertProduct/BasicData';
import EnrichedContent from '../InsertProduct/EnrichedContent';
import Images from '../InsertProduct/Images';
import ProductReview from '../InsertProduct/ProductReview';
import Validation from '../../Validations';
// import serialize from 'form-serialize';

class InsertProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.manageProduct = this.manageProduct.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.getImageFiles = this.getImageFiles.bind(this);
        this.state = {
            actionkey: 1,
            cu_images : null,
            cu_image_preview : [],
            cu_image_type_error : '',
            shr_images : null,
            shr_image_preview : [],
            shr_image_type_error : '',
            case_images : null,
            case_image_preview : [],
            case_image_type_error : '',
            pallet_images : null,
            pallet_image_preview : [],
            pallet_image_type_error : '',
        };
    }

    handleSelect(actionkey) {
        //alert(`selected ${actionkey}`);
        this.setState({ actionkey });
    }

    nextPage() {
        this.setState({ actionkey: this.state.actionkey+1});
    }

    componentDidMount() {
        var token_value={
            token:this.props.token
        }
        document.title = Config.name + ' - Manage Product';
        this.props.ProductOptions(token_value);

        var market_values={
            token:this.props.token,
            sub_category_name:'Skin Cleansing'
        }
        this.props.MarketList(market_values,'cu');
    }

    getImageFiles = (files) =>{
        var file_names='';
        if(files.length){
            file_names =files.map((item, index) => {
                return  <div key={index} className="uploaded_image assetts_upload">
                    <div> <img src={item.base64} alt={item.name} /></div>
                </div>
            });
            return file_names;
        }
        else{
            return file_names='';
        }
    }

    getFiles(type='',images){        

        let accepted_file_types = ['image/jpg','image/jpeg','image/png','image/gif','image/tiff'];
        
        if(images.length){
            var error = [];
            error = images.map((item) => {
                if(accepted_file_types.indexOf(item.type) === -1){
                    return false;
                }else{
                    return true;
                }
            });
            let error_message='The file must be a file of type: jpg, jpeg, png, gif, tiff';
            if(type === 'cu'){
                if(error.indexOf(false) >= 0){
                    this.setState({
                        cu_images : null,
                        cu_image_preview : [],
                        cu_image_type_error:error_message
                    });
                   
                }else{
                    this.setState({
                        cu_images:images,
                        cu_image_preview:this.getImageFiles(images),
                        cu_image_type_error:""
                    });
                }
            }else if(type === 'shr'){
                if(error.indexOf(false) >= 0){
                    this.setState({
                        shr_images : null,
                        shr_image_preview : [],
                        shr_image_type_error:error_message
                    });
                   
                }else{
                    this.setState({
                        shr_images:images,
                        shr_image_preview:this.getImageFiles(images),
                        shr_image_type_error:""
                    });
                }
            }else if(type === 'case'){
                if(error.indexOf(false) >= 0){
                    this.setState({
                        case_images : null,
                        case_image_preview : [],
                        case_image_type_error:error_message
                    });
                   
                }else{
                    this.setState({
                        case_images:images,
                        case_image_preview:this.getImageFiles(images),
                        case_image_type_error:""
                    });
                }
            }else if(type === 'pallet'){
                if(error.indexOf(false) >= 0){
                    this.setState({
                        pallet_images : null,
                        pallet_image_preview : [],
                        pallet_image_type_error:error_message
                    });
                   
                }else{
                    this.setState({
                        pallet_images:images,
                        pallet_image_preview:this.getImageFiles(images),
                        pallet_image_type_error:""
                    });
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    manageProduct(values){
        // var form = document.querySelector('#insert-product');
        // var form_fields = serialize(form,{ hash: true });
        // form_fields.token = this.props.token;
        values.token = this.props.token;
        values.cu_uploadFile = [];
        if(this.state.cu_images){
            values.cu_uploadFile = this.state.cu_images;
        }
        values.shr_uploadFile = [];
        if(this.state.shr_images){
            values.shr_uploadFile = this.state.shr_images;
        }
        values.case_uploadFile = [];
        if(this.state.case_images){
            values.case_uploadFile = this.state.case_images;
        }
        values.pallet_uploadFile = [];
        if(this.state.pallet_images){
            values.pallet_uploadFile = this.state.pallet_images;
        }
        this.props.AddProduct(values);
    }

    render() {
        const {  handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.manageProduct.bind(this))} id="insert-product">
                <div className="step_3main">
                    <div className="step_3main_detailsform">
                        <Tabs
                            activeKey={this.state.actionkey}
                            onSelect={this.handleSelect}
                            id="step3_tab" 
                        >
                            <Tab eventKey={1} title="1. Basic Data" tabClassName="bdata">
                                <BasicData nextPage={this.nextPage} {...this.state} {...this.props}/>
                            </Tab>
                            <Tab eventKey={2} title="2. Enriched Content" tabClassName="encontent">
                                <EnrichedContent {...this.state} {...this.props} nextPage={this.nextPage}/>
                            </Tab>
                            <Tab eventKey={3} title="3. Images" tabClassName="imgs">
                                <Images getFiles={this.getFiles} {...this.state} {...this.props} nextPage={this.nextPage}/>
                            </Tab>
                            <Tab eventKey={4} title="4. Product Review" tabClassName="pdrevw">
                                <ProductReview {...this.state} {...this.props}/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'ProductForm',
    validate:Validation.ValidateProductForm
})(InsertProduct);




