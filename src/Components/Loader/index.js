import React, { Component } from 'react';
import Config from '../../Config';

export default class Loader extends Component {
    render () {
        return (
            <div className={(this.props.showloader) ? 'Loader_holder' : 'Loader_holder hide' }>
                <div className="Loader_holder_main">
                    <img src={Config.assetspath + 'ajax-loader.gif'} alt="" />
                </div>
            </div>
        )
    }
}