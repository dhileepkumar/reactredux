import React, {Component,Fragment} from 'react';
import { Field } from 'redux-form';

const RenderOptions = (props) => {
    if(props.options.length){
        return props.options.map((list,index)=>{
            return  <option key={index} value={list.value}>{list.label}</option>
        });
    }
    return '';
}
const RenderStartOptions = (props) => {
    if(props.hasOwnProperty('custom_options_start')){
        return props.custom_options_start.map((list,index)=>{
            return  <option key={index} value={list.value}>{list.label}</option>
        });
    }
    return '';
}
const RenderEndOptions = (props) => {
    if(props.hasOwnProperty('custom_options_end')){
        return props.custom_options_end.map((list,index)=>{
            return  <option key={index} value={list.value}>{list.label}</option>
        });
    }
    return '';
}
class Select extends Component{
    render(){
        return (
            <Fragment>
                <Field className="form-control hsmall arrow" onChange={(this.props.onChange) ? this.props.onChange : ()=>{}} name={this.props.name} id={this.props.id} component="select" data-tabbrand={(this.props.tabbrand) ? this.props.tabbrand :''}>
                    <RenderStartOptions {...this.props} />
                    <RenderOptions {...this.props} />/>
                    <RenderEndOptions {...this.props} />/>
                </Field>
                <div className="text-danger">
                    {/* {this.props.meta.touched && ((this.props.meta.error && <span>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))} */}
                </div>
            </Fragment>
        );
    }
}

export default Select;


