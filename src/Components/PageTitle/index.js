import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageTitle extends Component {
    render() {
        return (
            <section className="content-header">
				<h1>
					{this.props.title}
					{(this.props.subtitle) ? <small>{this.props.subtitle}</small> : ''}
				</h1>
				<ol className="breadcrumb">
					<li><Link to={this.props.dashboardlink}><i className="fa fa-dashboard"></i> Home</Link></li>
					<li className="active">{this.props.title}</li>
				</ol>
			</section>
        );
    }
}

export default PageTitle;