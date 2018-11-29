import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class AlertDismissable extends Component {
  constructor(props) {

    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.showLog = this.showLog.bind(this);
    this.state = {
      show: false,
      message: this.props.message,
      errorlog: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.message) {
      return {
        show: true,
        message: props.message,
        errorlog: false
      };
    }
    else {
      return {
        show: false,
        message: '',
        errorlog: false
      };
    }
  }


  handleDismiss() {
    this.setState({ show: false });
  }

  showLog() {
    if (this.props.errorLog) {
      this.setState({ errorlog: true });
    }
  }




  render() {
    return (
      <Alert bsStyle={this.props.color} onDismiss={this.handleDismiss} className={(this.state.show) ? '' : 'hidden'} onClick={this.showLog} >
        <span dangerouslySetInnerHTML={{ __html: this.state.message }} />
        { (this.state.errorlog) ? <span dangerouslySetInnerHTML={{ __html: this.props.errorLog }} /> : '' }
      </Alert>
    );
  }
}

export default AlertDismissable;



