import React from 'react';
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
import Select from '../Components/Select';
import Date from '../Components/Date';
import DateOwn from '../Components/DateOwn';

var _commonfunction = {
	renderInputGroup(props){
		return <InputGroup {...props}/>;
	},

	renderInput(props){
		return <Input {...props}/>;
	},
	
	renderSelect(props){
		return <Select {...props}/>;
	},

	renderDate(props) {
		return <Date {...props} /> 
	},

	renderDateOwn(props) {
		return <DateOwn {...props} /> 
	},

	destroySession(){
		localStorage.removeItem('trustedsource');
		return {
			auth: false,
			token:'',
			name: '',
			image: '',
			authmessage:'',
			user_type:0
		}
	},

	userLogoutOption(){
		localStorage.removeItem('trustedsource');
		return {
			auth: false,
			token:'',
			name: '',
			image: '',
			authmessage:'',
			loginmessage:'Session Expired',
			logincode:0,
			user_type:0
		}
	},

	dashbaordChart(originalDoughnutDraw){
		 
		  originalDoughnutDraw.apply(this, arguments);
		  
		  var chart = this.chart;
		  var width = chart.chart.width,
			  height = chart.chart.height,
			  ctx = chart.chart.ctx;
	  
		  var fontSize = (height / 114).toFixed(2);
		  ctx.font = fontSize + "em sans-serif";
		  ctx.textBaseline = "middle";
	  
		  var text = '8  Active',
			  textX = Math.round((width - ctx.measureText(text).width) / 2),
			  textY = height / 2;
	  
		  ctx.fillText(text, textX, textY);
		
	  }
}

export default _commonfunction;