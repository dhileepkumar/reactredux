import React, {Component,Fragment} from 'react';
import DatePicker from 'react-date-picker';

class Date extends Component{

    render(){
        return (
            <Fragment>
                  <DatePicker {...this.props.input} dateForm="DD/MM/YYYY" selected={this.props.input.value ? '': null} />
                  <div className="text-danger">
                    {this.props.meta.touched && this.props.meta.error && <span>{this.props.meta.error}</span>}
                 </div>
                
            </Fragment>
        );
    }
}

export default Date;


