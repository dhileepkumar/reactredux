import React, {Component} from 'react';
import {Button, Row, Col } from 'react-bootstrap'; 
import {Field, reduxForm} from 'redux-form';
import Config from '../../Config'
import Common from '../../Common'
import Validation from '../../Validations'
import AlertDismisable from '../../Components/AlertDismissable'


class ResetPassword extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            message: '',
            companyname:[],
            selectedcompnay:'',
            files:'',
      };
    }

    componentDidMount(){
        this.props.ResetStateMessage('register');
		this.props.ResetStateMessage('login');
		this.props.ResetStateMessage('forget');
        document.title=Config.name+' Reset Password';
        return { message : this.props.message};
    }

    ResetPassword(vlaues){
        vlaues.remember_token=this.props.match.params.id;
        this.props.ResetPassword(vlaues);
        
    }

    render(){
       
        const { handleSubmit } = this.props
        return   <div><AlertDismisable message={this.props.resetmessage} color={(this.props.resetcode) ? 'success' :'danger' }/><form onSubmit={handleSubmit( this.ResetPassword.bind(this))}>
        <Field name="password" type="password" component={Common.renderInput} label="Email" placeholder="Password"/>
        <Field name="confirmpassword" type="text" component={Common.renderInput} label="Email" placeholder="Confirm Password"/>
        <div className="form-action">
          <Row>
              <Col xs={12} sm={6}>
                  <Button type="submit"   className="btn btn-primary" bsStyle="primary" block > Reset Password</Button>
              </Col>
          </Row>
        </div>
      </form></div>;
    }
}

export default reduxForm({
    form:'ResetPasswordForm',
    validate:Validation.ResetPassword
})(ResetPassword);




