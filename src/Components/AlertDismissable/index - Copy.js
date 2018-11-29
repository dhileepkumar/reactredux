import React, {Component} from 'react';
import { Alert } from 'react-bootstrap'; 

class AlertDismissable extends Component {
    constructor(props) {
      
      super(props);
      this.handleDismiss = this.handleDismiss.bind(this);
      this.state = {
            show: false,
            message: this.props.message
      };
    }

    static getDerivedStateFromProps(props, state){
      if(props.message){
          return { 
            show: true,
            message : props.message
          };
      }
      else{
        return { 
          show: false,
          message : ''
        };
      }
    }


    handleDismiss() {
      this.setState({ show: false });
    }

  

  
    render() {
        return (
          <Alert bsStyle={this.props.color} onDismiss={this.handleDismiss} className={(this.state.show) ? '' : 'hidden' }>
            <span dangerouslySetInnerHTML={{__html:  this.state.message}} />
          </Alert>
        );
    }
  }

export default AlertDismissable;



