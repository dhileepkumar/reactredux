import { combineReducers } from 'redux';
import {reducer as reduxFormReducer } from 'redux-form'
import AuthReducer from './AuthReducer';
import CompanyNameReducer from './CompanyNameReducer';
import productListing from './ProductListingReducer';
import uploadexcelreducer from './UploadExcelReducer';
import productFilter from './ProductFilterReducer';
import uploadxmlreducer from './UploadXMLReducer';
import uploadassetsreducer from './UploadAssetsReducer';
import dashboardreducer from './DashboardReducer';
import basketreducer from './BasketReducer';
import productreducer from './ProductReducer';
import productoptionsreducer from './ProductOptionsReducer';
import subcategorylistingreducer from './SubCategoryListReducer';
import marketlistingreducer from './MarketListReducer';
import exportexcelreducer from './ExportExcelReducer';
import loadformdatareducer from './LoadFormDataReducer';
import nutritionreducer from './NutritionReducer';
//import forgotpasswordreducer from './ForgotpasswordReducer';

const RootReducer = combineReducers({
	auth:AuthReducer,
	companyname:CompanyNameReducer,
	productlisting : productListing,
	form: reduxFormReducer,
	uploadexcel : uploadexcelreducer,
	uploadxml : uploadxmlreducer,
	uploadassets : uploadassetsreducer,
	productfilter : productFilter,
	dashboard:dashboardreducer,
	basket:basketreducer,
	product:productreducer,
	productoptions:productoptionsreducer,
	subcategorylist:subcategorylistingreducer,
	marketlist:marketlistingreducer,
	exportexcel:exportexcelreducer,
	loadformdata:loadformdatareducer,
	nutritionreducer:nutritionreducer
	//forgotpassword:forgotpasswordreducer,
});

export default RootReducer;