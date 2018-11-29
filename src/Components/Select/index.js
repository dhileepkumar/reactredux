import React, {Component,Fragment} from 'react';
// const RenderOptions = (props) => {
//     if(props.hasOwnProperty('children')){
//         if(props.children.length){
//             return props.children.map((list,index)=>{
//                 return  <option key={index} value={list.props.value}>{list.props.children}</option>
//             });
//         }
//     }
//     return '';
// }
const RenderOptions = (props) => {
    if(props.options){
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
        let selected_value = (this.props.selected_value) ? this.props.selected_value : '';
        return (
            <Fragment>
                <select {...this.props.input} value={selected_value} className="form-control hsmall arrow" name={this.props.input.name} id={this.props.id}>
                    {/* <RenderOptions {...this.props} /> */}
                    <RenderStartOptions {...this.props} />
                    <RenderOptions {...this.props} />
                    <RenderEndOptions {...this.props} />
                </select>
                <div className="text-danger">
                    {this.props.meta.touched && ((this.props.meta.error && <span>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
                </div>
            </Fragment>
        );
    }
}

export default Select;


