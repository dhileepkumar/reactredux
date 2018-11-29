const AppValidation = {
	ValidateLoginForm(values){
		const errors = {}
		if (!values.email) {
			errors.email = 'Email is Required';
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)))
		{
			errors.email = 'Enter valid Email Address';
		} 
		else if (values.email.length > 30) {
			errors.email = 'Must be 20 characters or less';
		}
		
		if (!values.password) {
			errors.password = 'Password is Required';
		} else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters';
		}

		return errors
		  
	},

	ValidateRegistationForm(values){
		const errors = {}
		if(!values.first_name){
			errors.first_name = 'First Name is required';
		}

		if (!values.last_name){
			errors.last_name = 'Last Name is required';
		}

		if (!values.email){
			errors.email = 'Email is Required';
		}

		if (!values.email){
			errors.email = 'Must be 20 characters or less';
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
			errors.email = 'Enter valid Email Address';
		}
		else if (values.email.length > 30) {
			errors.email = 'Must be 20 characters or less';
		}

		if (!values.password) {
			errors.password = 'Password is Required';
		} else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters';
		}

		if (!values.confirmpassword) {
			errors.confirmpassword = 'Confirm Password is Required';
		} else if (values.confirmpassword.length<6){
			errors.confirmpassword = 'Confirm Password must have atleat 6 characters';
		}

		if(values.password!==values.confirmpassword){
			errors.password = 'Password must be same as confirm password';
			errors.confirmpassword = 'Confirm Password be same as password';
		}

		if (!values.companyname) {
			errors.companyname = 'Company Name is Required';
		}

		return errors;
	},
	
	ValidateProductForm(values){
		const errors = {}
		if(!values.cu_category_name){
			errors.cu_category_name = 'The category name field is required.';
		}
		if(!values.cu_sub_category_name){ 
			errors.cu_sub_category_name = 'The sub category name field is required.';
		}
		if(!values.cu_gtin_code){
			errors.cu_gtin_code = 'The gtin code field is required.';
		}else if(isNaN(Number(values.cu_gtin_code))){
			errors.cu_gtin_code = 'The gtin code must be numeric.';
		}
		// if(!values.cu_brand_name){
		// 	errors.cu_brand_name = 'The brand name field is required.';
		// }
		// if(!values.cu_functional_name){
		// 	errors.cu_functional_name = 'The functional name field is required.';
		// }
		// if(!values.cu_variant_name){
		// 	errors.cu_variant_name = 'The variant name field is required.';
		// }
		// if(!values.cu_net_content){
		// 	errors.cu_net_content = 'The net content field is required.';
		// }
		// if(!values.cu_start_availability_date){
		// 	errors.cu_start_availability_date = 'The start availability date field is required.';
		// }
		return errors;
	},

	ValidateEditProductForm(values){
		const errors = {}
		if(!values.cu_category_name){
			errors.cu_category_name = 'The category name field is required.';
		}
		if(!values.cu_sub_category_name){ 
			errors.cu_sub_category_name = 'The sub category name field is required.';
		}
		// if(!values.cu_gtin_code){
		// 	errors.cu_gtin_code = 'The gtin code field is required.';
		// }else if(isNaN(Number(values.cu_gtin_code))){
		// 	errors.cu_gtin_code = 'The gtin code must be numeric.';
		// }
		if(!values.cu_brand_name){
			errors.cu_brand_name = 'The brand name field is required.';
		}
		if(!values.cu_functional_name){
			errors.cu_functional_name = 'The functional name field is required.';
		}
		//if(!values.cu_variant_name){
		//	errors.cu_variant_name = 'The variant name field is required.';
		//}
		if(!values.cu_net_content){
			errors.cu_net_content = 'The net content field is required.';
		}
		// if(!values.cu_start_availability_date){
		// 	errors.cu_start_availability_date = 'The start availability date field is required.';
		// }
		return errors;
	},

	ForgetPassword(values){
		const errors = {}
		if(!values.email){
			errors.email = 'Email field is required.';
		}
		return errors;
	},


	ResetPassword(values){
		const errors = {}
		
		if (!values.confirmpassword) {
			errors.confirmpassword = 'Confirm Password is Required';
		} else if (values.confirmpassword.length<6){
			errors.confirmpassword = 'Confirm Password must have atleat 6 characters';
		}

		if(values.password!==values.confirmpassword){
			errors.password = 'Password must be same as confirm password';
			errors.confirmpassword = 'Confirm Password be same as password';
		}

		return errors
		  
	},

};

export default AppValidation;