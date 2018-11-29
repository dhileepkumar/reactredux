import React, {Component} from 'react';
import {Button, Row, Col, Glyphicon, Checkbox, FormGroup } from 'react-bootstrap'; 
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom';
import Config from '../../Config'
import Common from '../../Common'
import Validation from '../../Validations'
import AlertDismisable from '../../Components/AlertDismissable'


const LoginForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit(props.UserLogin.bind(this))}>
          <Field name="email" type="email" component={Common.renderInputGroup} label="email"  icon="fa fa-envelope-o" placeholder="Enter Your Email"/>
          <Field name="password" type="password" component={Common.renderInputGroup} label="password" icon="fa fa-lock" placeholder="Enter Your Password"/>
          <FormGroup>
            <Row>
              <Col xs={6}>
                <Checkbox inline>Remember Me</Checkbox>
            </Col>
            <Col xs={6}>
            <Link to="/forgetpassword" className="btn-reset"> Forgot Your Password?</Link>
            </Col>
          </Row>
        </FormGroup>
          <div className="form-action">
            <Row>
                <Col xs={6}>
                    <Button type="submit" bsStyle="primary" block disabled={submitting}>Login</Button>
                </Col>
                <Col xs={6}>
                    <Link to="/register" className="btn btn-primary"> <Glyphicon glyph="user" /> Register</Link>
                </Col>
            </Row>
          </div>
        </form>
      )
}

class Login extends Component{

    componentDidMount(){
        document.title=Config.name+' Login';
		this.props.ResetStateMessage('register');
		this.props.ResetStateMessage('reset');
		this.props.ResetStateMessage('forget');
    }

    render(){
        return <div > <AlertDismisable message={this.props.loginmessage} color={(this.props.logincode) ? 'success' :'danger' }/><LoginForm  {...this.props}/></div>;
    }
}

export default reduxForm({
    form:'LoginFrom',
    validate:Validation.ValidateLoginForm
})(Login);




