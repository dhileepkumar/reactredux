import React, { Component , Fragment} from 'react';
import DatePicker from 'react-date-picker';
// import DateTimePicker from 'react-datetime';
// import './react-datetime.css';

export default class Sample extends Component {
  
  state = {
    value: ''
  }

  static getDerivedStateFromProps(props){
     
    if(props.dateoptions){
        return{
            value : new Date(props.dateoptions)
        }
       
    }
    else{
        return null
    }
  }

  onChange = value => this.setState({ value })

//   onDateChange = value => {
//     if(value !== ""){
//       this.setState({ value : new Date(value) })
//     }else{
//       this.setState({ value : ''})
//     }
// }

  render() {
   
    return  <Fragment>  
            {/* <DateTimePicker inputProps={{name: this.props.input.name }} value={this.state.value} onChange={this.onDateChange} dateFormat="DD/MM/YYYY" timeFormat={false}  /> */}
            <DatePicker {...this.props.input} onChange={this.onChange} value={this.state.value ? this.state.value : ''} locale="en-EN" selected={this.props.dateoptions ? new Date(this.props.dateoptions) : ''}/>
                <div className="text-danger">
                    {this.props.meta.touched && this.props.meta.error && <span>{this.props.meta.error}</span>}
                </div>
            </Fragment>
    
  }
}