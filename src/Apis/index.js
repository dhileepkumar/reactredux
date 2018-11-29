import 'whatwg-fetch'
import { post } from 'axios';

//  const site_name = 'http://202.129.196.139:5112/trustedsource/api/';
// const site_name = 'http://172.16.20.71/trustedsource/api/api/';
// const site_name = 'http://tsourceapi.azurewebsites.net/api/';
// const site_name = 'https://trustedsource.azurewebsites.net/api/api/';
// const site_name = 'http://localhost/trustedsource/api/api/';
const site_name = 'https://trustedsourcepilot.azurewebsites.net/api/api/';
// const site_name = 'http://localhost/trustedsource_api/api/';
let UserAPI = {
    UserLogin(values){
			return fetch(site_name+'login',{
				method: "POST",
				body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	UserRegister(values){
			return fetch(site_name+'userregister',{
				method: "POST",
				body: JSON.stringify(values),
		}).then((response)=>response.json());
	},


	// UserLogout(){
	// 	return fetch(site_name+'logout',{
	// 		method: "GET",
	// 	}).then((response)=>response.json());
	// },

	UserLogout(values){
			return fetch(site_name+'logout',{
				method: "POST",
				body: JSON.stringify(values),
		}).then((response)=>response.json());
	},
	
	ForgotPassword(values){
		return fetch(site_name+'rememberme',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	ResetPassword(values){
		return fetch(site_name+'resetrequest',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	

	UserDashboard(values){
		return fetch(site_name+'dashboard',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},


	CompnayName(){
		return fetch(site_name+'companyautocomplete',{
				method: "POST",
		}).then((response)=>response.json());
	},


	ProductList(values){
		return fetch(site_name+'productlist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	UploadExcel(file){
		const url = site_name+'excelimport';
		const formData = new FormData();
		formData.append('file_upload',file.files)
		formData.append('token',file.token)
		return  post(url, formData)
	},

	UploadXML(file){
		const url = site_name+'xmlimport';
		const formData = new FormData();
		formData.append('file_upload',file.files)
		formData.append('token',file.token)
		return  post(url, formData)
	},

	UploadDataNetXML(file){
		const url = site_name+'datanetxmlimport';
		const formData = new FormData();
		formData.append('file_upload',file.files)
		formData.append('token',file.token)
		return  post(url, formData)
	},

	UploadAssets(files){
		return fetch(site_name+'assetimport',{
			method: "POST",
			body: JSON.stringify(files),
		}).then((response)=>response.json());
	},

	FilterDataList(values){
		return fetch(site_name+'filter_product_details',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},
	
	ManageBasket(values){
		return fetch(site_name+'manage_basket_products',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},
	
	AddProduct(values){
		return fetch(site_name+'addproduct',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	UpdateProduct(values){
		return fetch(site_name+'editproduct',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	ProductOptionsList(values){
		return fetch(site_name+'productoptionslist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	SubCategoryList(values){
		return fetch(site_name+'subcategorylist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	MarketList(values){
		return fetch(site_name+'targetmarketlist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	ExportExcel(values){
		return fetch(site_name+'exportexcelfile',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	loadFormData(values){
		return fetch(site_name+'editproductlist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},

	loadNutritionData(values){
		return fetch(site_name+'nutritionlist',{
			method: "POST",
			body: JSON.stringify(values),
		}).then((response)=>response.json());
	},
	
}
export default UserAPI;