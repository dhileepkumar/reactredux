import React, { Component , Fragment} from 'react';
import DatePicker from 'react-date-picker';

export default class Sample extends Component {
  
  state = {
    value: ''
  }

  static getDerivedStateFromProps(props){
     
    if(props.input.value){
        return{
            value : new Date(props.input.value)
        }
       
    }
    else{
        return null
    }
  }

  onChange = value => this.setState({ value })

  render() {
   

    return  <Fragment>  

            <DatePicker {...this.props.input} onChange={this.onChange} value={this.state.value ? this.state.value : ''} locale="fr-FR" selected={this.props.input.value ? new Date(this.props.input.value) : ''}/>
                <div className="text-danger">
                    {this.props.meta.touched && this.props.meta.error && <span>{this.props.meta.error}</span>}
                </div>
            </Fragment>
    
  }
}