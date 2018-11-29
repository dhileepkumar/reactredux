import React, { Component } from 'react';
import {  Tabs, Tab  } from 'react-bootstrap';
import { reduxForm } from 'redux-form'
import Config from '../../Config';
import BasicData from '../InsertProduct/BasicData';
import EnrichedContent from '../InsertProduct/EnrichedContent';
import Images from '../InsertProduct/Images';
import ProductReview from '../InsertProduct/ProductReview';
import Validation from '../../Validations';
import serialize from 'form-serialize';
import {Redirect}  from 'react-router-dom';

class InsertProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.manageProduct = this.manageProduct.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.getImageFiles = this.getImageFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            cu_details:[],
            shr_details:[],
            case_details:[],
            pallet_details:[],
        };
    }
    handleChange(type,event){
        let name = event.target.name;
        if(type === 'cu'){
            let obj = this.state.cu_details;
            obj[name] = event.target.value;
            obj['product_name'] = this.getProductName(obj,type);
            this.setState({cu_details : obj});
        }else if(type === 'shr'){
            let obj = this.state.shr_details;
            obj[name] = event.target.value;
            obj['product_name'] = this.getProductName(obj,type);
            this.setState({shr_details : obj});
        }else if(type === 'case'){
            let obj = this.state.case_details;
            obj[name] = event.target.value;
            obj['product_name'] = this.getProductName(obj,type);
            this.setState({case_details : obj});
        }else if(type === 'pallet'){
            let obj = this.state.pallet_details;
            obj[name] = event.target.value;
            obj['product_name'] = this.getProductName(obj,type);
            this.setState({pallet_details : obj});
        }
    }

    getProductName(obj,type){
        let product_name = '';
        let brand = type+'_brand_name';
        let sub_brand = type+'_sub_brand_name';
        let functional_name = type+'_functional_name';
        let variant = type+'_variant_name';
        let netcontent = type+'_net_content';
        let uom = type+'_uom';

        if(obj.hasOwnProperty(brand)){
            product_name = product_name+' '+ obj[brand];
        }
        if(obj.hasOwnProperty(sub_brand)){
            product_name = product_name+' '+ obj[sub_brand];
        }
        if(obj.hasOwnProperty(functional_name)){
            product_name = product_name+' '+ obj[functional_name];
        }
        if(obj.hasOwnProperty(variant)){
            product_name = product_name+' '+ obj[variant];
        }
        if(obj.hasOwnProperty(netcontent)){
            product_name = product_name+' '+ obj[netcontent];
        }
        if(obj.hasOwnProperty(uom)){
            product_name = product_name+' '+ obj[uom];
        }else{
            product_name = product_name+' PC';
        }
        return product_name;
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
        document.title = Config.name + ' - Insert Product';
        this.props.ProductOptions(token_value);
        this.props.ResetStateMessage('update_product');
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

    static getDerivedStateFromProps(props){
        return{
            actionkey : 1
        }
    }

    manageProduct(field_values){
        var form = document.querySelector('#insert-product');
        var values = serialize(form,{ hash: true });
        //form_fields.token = this.props.token;

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
        if(this.props.insertcode === 1){
            alert('Product Saved Successfully');
            return <Redirect to={Config.userPath[this.props.user_type]+'editproduct/'+this.props.insertmessage}/>
        }
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
                                <BasicData handleChange={this.handleChange} nextPage={this.nextPage} {...this.state} {...this.props}/>
                            </Tab>
                            <Tab eventKey={2} title="2. Enriched Content" tabClassName="encontent">
                                <EnrichedContent handleChange={this.handleChange} {...this.state} {...this.props} nextPage={this.nextPage}/>
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




