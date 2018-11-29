import React, {Component} from 'react';
class InputGroup extends Component{

    render(){
        return <div className="form-group">
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className={this.props.icon}></i>
                    </span>
                    <input  {...this.props.input} type={this.props.type} className="form-control hlgin" placeholder={this.props.placeholder} name={this.props.input.name} id={this.props.input.name} />
                </div>
                <div className="text-danger">
                    {this.props.meta.touched && ((this.props.meta.error && <span>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
                </div>
            </div>;
    }
}

export default InputGroup;


