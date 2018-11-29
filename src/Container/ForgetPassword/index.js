import React, {Component} from 'react';
import {Button, Row, Col, Glyphicon } from 'react-bootstrap'; 
import {Field, reduxForm} from 'redux-form';
import Config from '../../Config'
import Common from '../../Common'
import Validation from '../../Validations'
import AlertDismisable from '../../Components/AlertDismissable'


class Register extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            message: this.props.message,
            companyname:[],
            selectedcompnay:'',
            files:'',
      };
    }

    componentDidMount(){
        document.title=Config.name+' Forget Password';
        this.props.ResetStateMessage('register');
		this.props.ResetStateMessage('reset');
		this.props.ResetStateMessage('login');
        return { message : this.props.message};
    }

    ForgetPassword(){
        
    }

    render(){

        const { handleSubmit } = this.props
        return   <div><AlertDismisable message={this.props.forgetmessage}  color={(this.props.forgetcode) ? 'success' :'danger' }/><form onSubmit={handleSubmit( this.props.ForgotPassword.bind(this))}>
        <Field name="email" type="email" component={Common.renderInput} label="Email" placeholder="E-Mail Address"/>
        <div className="form-action">
          <Row>
              <Col xs={12} sm={9}>
                  <Button type="submit"   className="btn btn-primary" bsStyle="primary" block ><Glyphicon glyph="envelope" /> Send Password Reset Link</Button>
              </Col>
          </Row>
        </div>
      </form> </div>;
    }
}

export default reduxForm({
    form:'ForgetPasswordFrom',
    validate:Validation.ForgetPassword
})(Register);




