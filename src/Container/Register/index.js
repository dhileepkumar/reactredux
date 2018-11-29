import React, {Component} from 'react';
import {Button, Row, Col, Glyphicon } from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import Select from 'react-select';
import Config from '../../Config';
import Common from '../../Common';
import Validation from '../../Validations';
import FileBase64 from 'react-file-base64';
import AlertDismisable from '../../Components/AlertDismissable';


class Register extends Component{
    constructor(props){ 
        super(props);
        this.UserRegister = this.UserRegister.bind(this);
        this.state = {
            companyname:[],
            selectedcompnay:'',
            files:'',
      };
    this.updateValue = this.updateValue.bind(this)
    }

    static getDerivedStateFromProps(props, state){
        if(props.companyname.length>=1){
            return { 
                companyname:props.companyname,
             };
        } 
        return null;
     
    }

    componentDidMount(){
       this.props.GetCompanyName();
        document.title=Config.name+' Register';
        this.props.ResetStateMessage('login');
		this.props.ResetStateMessage('reset');
		this.props.ResetStateMessage('forget');
    }

    updateValue (newValue) {
        this.setState({ selectedcompnay: newValue });
    }

    getFiles(files){
        this.setState({ files: files })
    }



    UserRegister(values){
        values.InformationProviderGLN=this.state.selectedcompnay.value;
        values.user_image = '';
        if(this.state.files.base64){
            values.user_image = this.state.files.base64
        }
        this.props.userRegister(values);
    }



    render(){
        const { handleSubmit, submitting } = this.props
        return  <div> <AlertDismisable message={this.props.registermessage} color={(this.props.registercode) ? 'success' :'danger' }/><form onSubmit={handleSubmit( this.UserRegister.bind(this))}>
        <Field name="first_name" type="text" component={Common.renderInput} label="First Name" placeholder="Enter Your First Name"/>
        <Field name="last_name" type="text" component={Common.renderInput} label="Last Name" placeholder="Enter Your Last Name"/>
        <Field name="email" type="email" component={Common.renderInput} label="Email" placeholder="Enter Your Email"/>
        <Field name="password" type="password" component={Common.renderInput} label="Password"  placeholder="Enter Your Password"/>
        <Field name="confirmpassword" type="password" component={Common.renderInput} label="password" placeholder="Enter Your Confirm Password"/>
        <Select id="state-select" ref={(ref) => { this.select = ref; }} options={this.state.companyname} clearable={true} name="InformationProviderGLN" searchable={true} disabled={this.state.disabled} value={this.state.selectedcompnay} onChange={this.updateValue} rtl={this.state.rtl} />
        <div className="form-group">
                <FileBase64 multiple={ this.props.multiupload } onDone={ this.getFiles.bind(this) } />
        </div>
       
        <div className="form-action">
          <Row>
              <Col xs={6}>
                  <Button type="submit" bsStyle="primary" block disabled={submitting}>Register</Button>
              </Col>
              <Col xs={6}>
                  <Link to="/login" className="btn btn-primary"> <Glyphicon glyph="user" /> Login</Link>
              </Col>
          </Row>
        </div>
      </form> </div>;
    }
}

export default reduxForm({
    form:'RegisterFrom',
    validate:Validation.ValidateRegistationForm
})(Register);




