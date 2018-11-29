import 'whatwg-fetch'
const site_name = 'http://172.16.5.151/trustedsource/api/';
const axios = require('axios');



let UserAPI = {
    UserLogin(values){
		
			return axios.post(site_name+'login',values)
			.then((response)=>response.data)
			.catch((error)=>error)
	},

	UserRegister(values){
		return axios.post(site_name+'userregister',values)
		.then((response)=>response.data)
		.catch((error)=>error)
	},


	UserLogout(){
		return axios.post(site_name+'logout')
		.then((response)=>response.data)
		.catch((error)=>error)
	},


	CompnayName(){
		return axios.post(site_name+'companyautocomplete')
		.then((response)=>response.data)
		.catch((error)=>error)
	
	},


	ProductList(values){

		return axios.post(site_name+'productlist',values)
		.then((response)=>response.data)
		.catch((error)=>error)
		
	}
}
export default UserAPI;