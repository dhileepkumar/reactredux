import React,{Component} from 'react';
import {HashRouter as Router, Route, Switch}  from 'react-router-dom';
import Login from '../Login'
import Register from '../Register'
import Indexwrapper from '../Indexwrapper';
import AdminDashboard from '../AdminDashboard';
import Dashboard from '../Dashboard';
import InsertProduct from '../InsertProduct';
import ProductBrowser from '../ProductBrowser';
import UploadExcel from '../Upload/UploadExcel';
import UploadAsset from '../Upload/UploadAsset';
import UploadXML from '../Upload/UploadXML';
import UploadDataNetXML from '../Upload/UploadDataNetXML';
import ForgetPassword from '../ForgetPassword';
import ResetPassword from '../ResetPassword';
import Config from '../../Config';
import EditProduct from '../EditProduct';


class WebRouter extends Component{
	constructor(props) {
		super(props);
		this.state = {
			 username: this.props.name ,
			 userimage: Config.assetspath+this.props.image, 
			 user_type: this.props.user_type, 
			 information_provider_gln : this.props.information_provider_gln
		};
	}

	static getDerivedStateFromProps(props){
		return { 
			username : props.name,
			userimage: Config.assetspath+props.image, 
			user_type: props.user_type, 
			information_provider_gln : props.information_provider_gln
		};
    }


	render(){
		return <Router>
					<Switch>
					{(this.props.auth) ? (this.props.user_type === Config.userTypes.Retailer
						? <AdminDashboard menu={Config.retailermenu} {...this.props} {...Config} userdetails={this.state} path="/retailer">
						<Route exact path="/retailer"  component={Dashboard} />
						<Route  path="/retailer/dashboard" component={Dashboard}/>
						{/* <Route path="/retailer/productbrowser"   component={ProductBrowser} /> */}
						<Route path="/retailer/productbrowser/:status?"   component={ProductBrowser} />
						<Route path="/retailer/editproduct/:gtin"   component={EditProduct} />
						
					</AdminDashboard> : 
					((this.props.user_type === Config.userTypes.Supplier) ?  
					<AdminDashboard menu={Config.suppliermenu} {...this.props} {...Config} userdetails={this.state} path="/supplier">
						<Route exact path="/supplier"  component={Dashboard} />
						<Route  path="/supplier/dashboard" component={Dashboard}/>
						<Route path="/supplier/insertproduct"   component={InsertProduct} />
						{/* <Route path="/supplier/productbrowser"   component={ProductBrowser} /> */}
						<Route path="/supplier/productbrowser/:status?"   component={ProductBrowser} />
						<Route path="/supplier/editproduct/:gtin"   component={EditProduct} />
						<Route path="/supplier/importexcelfile"  component={UploadExcel} />
						<Route path="/supplier/assetview"  component={UploadAsset} />
						<Route path="/supplier/xmldata"  component={UploadXML} />
						<Route path="/supplier/datanetxml"  component={UploadDataNetXML} />
					</AdminDashboard>
					: (
						<AdminDashboard menu={Config.gs1menu} {...this.props} {...Config} userdetails={this.state} path="/gs1">
							<Route exact path="/gs1"  component={Dashboard} />
							<Route path="/gs1/dashboard"  component={() => window.location = 'http://trustedsourcepilot.azurewebsites.net/dashboard/index.html'}/>
							<Route path="/gs1/userlogout"  component={() => {
								localStorage.removeItem('trustedsource');
								window.location = 'http://trustedsourcepilot.azurewebsites.net';
							}}/>
							{/* <Route path="/gs1/productbrowser"   component={ProductBrowser} /> */}
							<Route path="/gs1/productbrowser/:status?"   component={ProductBrowser} />
						</AdminDashboard>
					 ))
					) : ''}
				
					<Indexwrapper  {...this.props} >
						<Route exact path="/"   render = {(props)=> <Login {...props}  {...this.props}/>} />
						<Route  path="/login"   render = {(props)=> <Login {...props}  {...this.props}/>} />
						<Route  path="/register"   render = {(props)=> <Register {...props}  {...this.props}/>} />
						<Route  path="/reset/:id"   render = {(props)=> <ResetPassword {...props}  {...this.props}/>} />
						<Route  path="/forgetpassword"   render = {(props)=> <ForgetPassword {...props}  {...this.props}/>} />
					</Indexwrapper>
					</Switch>
			  </Router>
	}
}


export default WebRouter;