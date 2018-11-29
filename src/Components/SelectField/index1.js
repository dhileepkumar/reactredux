import React, { Component, Fragment } from 'react';

const Options = (props) => {
    if(props.options.length){
        return props.options.map((item, index) => {
            return <option key={index} value={item.category_name}>{item.category_name}</option>
        });
    }else{
        return true;
    }
    
}
class SelectOptions extends Component {
    render() {
        return(
            <Fragment>
                <Options {...this.props}/>
            </Fragment>
        )
    }
} 

export default SelectOptions;