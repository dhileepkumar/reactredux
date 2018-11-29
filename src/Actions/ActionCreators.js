import {AUTH_ERROR, AUTH_FAILED, AUTH_REQUESTED, AUTH_SUCCESS, 
        COMPANY_NAME_REQUESTED, COMPANY_NAME_RECIEVED, COMPANY_NAME_ERROR,
        REQUEST_LOGOUT, LOGGED_OUT, LOGOUTERROR,
        REGISTER_REQUEST, REGISTER_RECEIVED, REGISTER_ERROR,
        PRODUCT_LISTTING_REQUESTED, PRODUCT_LISTTING_RECIEVED, PRODUCT_LISTTING_ERROR,
        FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_RECEIVED, FORGET_PASSWORD_ERROR,
        RESET_PASSWORD_REQUEST, RESET_PASSWORD_RECEIVED, RESET_PASSWORD_ERROR,
        EXCEL_FILE_UPLOAD_REQUEST, EXCEL_FILE_UPLOADED, EXCEL_FILE_UPLOAD_ERROR,
        FILTER_DATA_REQUESTED,FILTER_DATA_RECEIVED,FILTER_DATA_ERROR,
        XML_FILE_UPLOAD_REQUEST, XML_FILE_UPLOADED, XML_FILE_UPLOAD_ERROR,
        ASSETS_UPLOAD_REQUEST, ASSETS_UPLOADED, ASSETS_UPLOAD_ERROR,
        DASHBOARD_REQUEST, DASHBOARD_RECEIVED, DASHBOARD_ERROR,
        ADD_OR_EDIT_BASKET_REQUESTED, ADD_OR_EDIT_BASKET_RECEIVED,ADD_OR_EDIT_BASKET_ERROR,
        INSERT_PRODUCT_REQUESTED, INSERT_PRODUCT_RECEIVED, INSERT_PRODUCT_ERROR,
        PRODUCT_OPTIONS_REQUESTED,PRODUCT_OPTIONS_RECEIVED,PRODUCT_OPTIONS_ERROR,
        SUB_CATEGORY_REQUESTED,SUB_CATEGORY_RECEIVED,SUB_CATEGORY_ERROR,
        MARKET_REQUESTED,MARKET_RECEIVED,MARKET_ERROR,
        EXPORT_EXCEL_REQUESTED,EXPORT_EXCEL_RECEIVED,EXPORT_EXCEL_ERROR,
        PRODUCT_FORM_DATA_REQUESTED,PRODUCT_FORM_DATA_RECEIVED,PRODUCT_FORM_DATA_ERROR,
        UPDATE_PRODUCT_REQUESTED, UPDATE_PRODUCT_RECEIVED, UPDATE_PRODUCT_ERROR,
        NUTRITION_REQUESTED,NUTRITION_RECEIVED,NUTRITION_ERROR
    } from './Actions';
import WebApi from '../Apis/index';
import Common from '../Common';
const FileDownload = require('js-file-download');

const ActionCreators = {
    userLogin(values){
        return (dispatch) =>{
            dispatch({type:AUTH_REQUESTED, success:true, payload:'Authenticating...'})
            WebApi.UserLogin(values).then(
                (logincredits) => {
                    if(logincredits.code){
                        localStorage.setItem('trustedsource', JSON.stringify(logincredits.response));
                        
                        dispatch({type:AUTH_SUCCESS, success:true,  payload:{
                            auth:true,
                            token:logincredits.response.token,
                            name:logincredits.response.first_name,
                            information_provider_gln : logincredits.response.InformationProviderGLN,
                            image:logincredits.response.user_image,
                            user_type:parseInt(logincredits.response.user_type),
                            logincode:logincredits.code,
                            success:true,
                            loginmessage:'User Authenticated Successfully'
                        }})
                    }
                    else{
                        
                        dispatch({type:AUTH_SUCCESS, success:false,  payload:{loginmessage : logincredits.status, logincode:logincredits.code}})
                    }
                },
                (error)=>dispatch({type:AUTH_FAILED, success:false,  payload:error.message})
            )
            .catch(
                (error) => dispatch({type:AUTH_ERROR, success:false, payload:error.message})
            )
        }
    },


    userRegister(values){
        return (dispatch) =>{
            dispatch({type:REGISTER_REQUEST, success:true, payload:'Creating Your Account...'})
            WebApi.UserRegister(values).then(
                (registercredits) => {
                    if(registercredits.code){
                    
                        localStorage.setItem('trustedsource', JSON.stringify(registercredits.response));
                        dispatch({type:REGISTER_RECEIVED, success:true,  payload:{
                            auth:true,
                            token:registercredits.response.token,
                            name:registercredits.response.name,
                            information_provider_gln : registercredits.response.InformationProviderGLN,
                            image:registercredits.response.user_image,
                            user_type:parseInt(registercredits.response.user_type),
                            registercode:registercredits.code,
                            success:true,
                            registermessage:'User Account Created Successfully'
                        }})
                    }
                    else{
                        dispatch({type:REGISTER_RECEIVED, success:false,  payload:{registermessage : registercredits.status, registercode:registercredits.code}})
                    }
                },
                (error)=>dispatch({type:REGISTER_ERROR, success:false,  payload:error.message})
            )
            .catch(
                (error)=>dispatch({type:REGISTER_ERROR, success:false, payload:error.message})
            )
        }
    },


    userLogout(values){
        return (dispatch) =>{
            dispatch({type:REQUEST_LOGOUT, success:true, payload:''})
            WebApi.UserLogout(values).then(
                (logout) => {
                    dispatch({type:LOGGED_OUT, success:true, payload:Common.destroySession()})
                    window.location = '#/login';
                },
                (error)=>dispatch({type:LOGOUTERROR, success:false,  payload:error.message})
            )
            .catch(
               (error) => dispatch({type:LOGOUTERROR, success:false, payload:error.message})
              
            )
        }
    },

    ResetStateMessage(page){
        if(page === 'upload_asset'){
            return (dispatch) =>{
                dispatch({type:ASSETS_UPLOADED, success:true, payload:{assetfiles:'',assetsuploadmessage : '', code:0, assetfilesstatus : ''}});
            }
        }else if(page === 'insert_product'){
            return (dispatch) =>{
                dispatch({type:INSERT_PRODUCT_RECEIVED, success:true, payload:{insertmessage : '', insertcode:0}})
            }
        }else if(page === 'edit_product'){
            return (dispatch) =>{
                dispatch({type:UPDATE_PRODUCT_RECEIVED, success:true, payload:{updatemessage : '', updatecode:0}})
            }
        }else if(page === 'update_product'){
            return (dispatch) =>{
                dispatch({type:PRODUCT_FORM_DATA_RECEIVED, success:true, payload:{form_data : [], product_details:[]}})
            }
        }else if(page === 'upload_excel'){
            return (dispatch) =>{
                dispatch({type:EXCEL_FILE_UPLOADED, success:true, payload:{uploadmessage : '', code:0}})
            }
        }else if(page === 'upload_xml'){
            return (dispatch) =>{
                dispatch({type:XML_FILE_UPLOADED, success:true, payload:{xmluploadmessage : '', code:0}})
            }
        }else if(page === 'login'){
            return (dispatch) =>{
                dispatch({type:AUTH_SUCCESS, success:true, payload:{loginmessage : '', logincode:0}})
            }
        }else if(page === 'register'){
            return (dispatch) =>{
                dispatch({type:REGISTER_RECEIVED, success:true, payload:{registermessage : '', registercode:0}})
            }
        }else if(page === 'reset'){
            return (dispatch) =>{
                dispatch({type:RESET_PASSWORD_RECEIVED, success:true, payload:{resetmessage : '', resetcode:0}})
            }
        }else if(page === 'forget'){
            return (dispatch) =>{
                dispatch({type:FORGET_PASSWORD_RECEIVED, success:true, payload:{forgetmessage : '', forgetcode:0}})
            }
        }
    },

    userDashboard(values){
        return(dispatch) => {
            dispatch({type:DASHBOARD_REQUEST, success:true, payload:'Loading Details...'})
            WebApi.UserDashboard(values).then(
                (dashbaord) => {
                    if(dashbaord.code===1){
                        dispatch({type:DASHBOARD_RECEIVED, success:true, payload:{
                            dashboardlisting:dashbaord.response,
                            dahsboardmessage:'Dashbaord Details Listed Successfully'
                        }})
                    }
                    else if (dashbaord.code===2){

                        dispatch({type:LOGGED_OUT, success:false,payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:DASHBOARD_ERROR, success:false,  payload:'No Data in Dashbaord'})
                    }
                },
                (error)=>dispatch({type:DASHBOARD_ERROR, success:false,  payload:error.message})
            )
            .catch(
               (error) => dispatch({type:DASHBOARD_ERROR, success:false, payload:error.message})
              
            )
        }
    },

    ForgotPassword(values){
        return(dispatch) => {
            dispatch({type:FORGET_PASSWORD_REQUEST, success:true, payload:'Requesting...'})
            WebApi.ForgotPassword(values).then(
                (forgetpassword) => {
                    if(forgetpassword.code===1){
                        dispatch({type:FORGET_PASSWORD_RECEIVED, success:true, payload:{
                            forgetmessage:forgetpassword.status,
                            forgetcode:forgetpassword.code,
                        }})
                    }
                    else if (forgetpassword.code===2){
                        dispatch({type:LOGGED_OUT, success:false,payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:FORGET_PASSWORD_RECEIVED, success:false,  payload:{forgetmessage : forgetpassword.status, forgetcode:forgetpassword.code}})
                    }
                },
                (error)=> dispatch({type:FORGET_PASSWORD_ERROR, success:false, payload:error.message})
            )
            .catch(
                (error) => dispatch({type:FORGET_PASSWORD_ERROR, success:false, payload:error.message})
            )
        }
    },

    ResetPassword(values){
        return(dispatch) => {
            dispatch({type:RESET_PASSWORD_REQUEST, success:true, payload:'Requesting...'})
            WebApi.ResetPassword(values).then(
                (resetpass) => {
                    if(resetpass.code===1){
                        dispatch({type:RESET_PASSWORD_RECEIVED, success:true, payload:{
                            resetmessage:resetpass.status,
                            resetcode:resetpass.code,
                        }})
                    }
                    else if (resetpass.code===2){
                        dispatch({type:LOGGED_OUT, success:false,payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:RESET_PASSWORD_RECEIVED, success:false,   payload:{resetmessage : resetpass.status, resetcode:resetpass.code}})
                    }
                },
                (error)=> dispatch({type:RESET_PASSWORD_ERROR, success:false, payload:error.message})
            )
            .catch(
                (error) => dispatch({type:RESET_PASSWORD_ERROR, success:false, payload:error.message})
            )
        }
    },



    CompanyName(){
        return (dispatch) =>{
            dispatch({type:COMPANY_NAME_REQUESTED, success:true, payload:'Fetching Company Name...'})
            WebApi.CompnayName().then(
                (companyname) => {
                    if(companyname.length){
                            dispatch({type:COMPANY_NAME_RECIEVED, success:true, payload:{
                            companyname:companyname,
                            authmessage:'Company Name Fetched Successfully'}})
                    }
                    else{
                            if(companyname.status==='Invalid Login'){
                                dispatch({type:LOGGED_OUT, success:false,payload:Common.userLogoutOption()})
                            }
                            else{
                                dispatch({type:COMPANY_NAME_ERROR, success:false, payload:'No Company Name Exists'})
                            }
                    }
                    
                },
                (error) => dispatch({type:COMPANY_NAME_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:COMPANY_NAME_ERROR, success:false, payload:error.message})
            )
        }
    },


    ProductListing(values){
        return (dispatch) =>{
            dispatch({type:PRODUCT_LISTTING_RECIEVED, success:true, payload:{
                productlisting:[],
                productlistingmessage:''
            }})
            WebApi.ProductList(values).then(
                (productlisitng) => {
                   
                    if(productlisitng.code === 1){

                        dispatch({type:PRODUCT_LISTTING_RECIEVED, success:true, payload:{
                            productlisting:productlisitng.response.products,
                            pagenumber:productlisitng.response.page_number,
                            totalproducts:productlisitng.response.total_products,
                            showbasketproducts:productlisitng.response.basket_products,
                            productlistingmessage:'Product List Fetched Successfully'
                        }})
                    }
                    else if(productlisitng.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:PRODUCT_LISTTING_ERROR, success:false,  payload:productlisitng.response})
                    }
                },
                (error) => dispatch({type:PRODUCT_LISTTING_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:PRODUCT_LISTTING_ERROR, success:false, payload:error.message})
            )
        }
    },



    UploadExcel(values){
       
        return (dispatch) =>{
            dispatch({type:EXCEL_FILE_UPLOAD_REQUEST, success:true, payload:''})
            WebApi.UploadExcel(values).then(
                (uploadexcel) => {
                    if(uploadexcel.data)
                    {
                        if(uploadexcel.data.code === 1){
                            dispatch({type:EXCEL_FILE_UPLOADED, success:true, payload:{
                                file:uploadexcel.data.response,
                                uploadmessage:uploadexcel.data.status,
                                code:uploadexcel.data.code
                            }})
                        }
                        else if(uploadexcel.data.code === 2){
                            dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                        }
                        else{
                            dispatch({type:EXCEL_FILE_UPLOAD_ERROR, success:false,  payload:uploadexcel.data.response})
                        }
                    }
                    else{
                        dispatch({type:EXCEL_FILE_UPLOAD_ERROR, success:false,  payload:uploadexcel.response})
                    }
                },
                (error) => dispatch({type:EXCEL_FILE_UPLOAD_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:EXCEL_FILE_UPLOAD_ERROR, success:false, payload:error.message})
            )
        }
    },


    UploadXML(values){
         return (dispatch) =>{
             dispatch({type:XML_FILE_UPLOAD_REQUEST, success:true, payload:''})
             WebApi.UploadXML(values).then(
                 (uploadxml) => {
                     if(uploadxml.data)
                     {
                        if(uploadxml.data.code === 1){
                            dispatch({type:XML_FILE_UPLOADED, success:true, payload:{
                            xmlfile:uploadxml.data.response,
                            xmluploadmessage:'File Uploaded Successfully',
                            code:uploadxml.data.code
                            }})
                        }
                        else if(uploadxml.data.code === 2){
                            dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                        }
                        else{
                            dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:uploadxml.data.response})
                        }
                     }
                     else{
                         dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:uploadxml.response})
                     }
                 },
                 (error) => dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:error.message})
             )
             .catch((error)=>dispatch({type:XML_FILE_UPLOAD_ERROR, success:false, payload:error.message})
             )
         }
     },

     UploadDataNetXML(values){
        return (dispatch) =>{
            dispatch({type:XML_FILE_UPLOAD_REQUEST, success:true, payload:''})
            WebApi.UploadDataNetXML(values).then(
                (uploadxml) => {
                    if(uploadxml.data)
                    {
                       if(uploadxml.data.code === 1){
                           dispatch({type:XML_FILE_UPLOADED, success:true, payload:{
                           xmlfile:uploadxml.data.response,
                           xmluploadmessage:'File Uploaded Successfully',
                           code:uploadxml.data.code
                           }})
                       }
                       else if(uploadxml.data.code === 2){
                           dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                       }
                       else{
                           dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:uploadxml.data.response})
                       }
                    }
                    else{
                        dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:uploadxml.response})
                    }
                },
                (error) => dispatch({type:XML_FILE_UPLOAD_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:XML_FILE_UPLOAD_ERROR, success:false, payload:error.message})
            )
        }
    },

     UploadAssets(values){
        return (dispatch) =>{
            dispatch({type:ASSETS_UPLOAD_REQUEST, success:true, payload:''})
            WebApi.UploadAssets(values).then(
                (uploadassets) => {
                        if(uploadassets.code === 1){
                            dispatch({type:ASSETS_UPLOADED, success:true, payload:{
                                assetfiles:uploadassets.response,
                                assetsuploadmessage:uploadassets.response.message,
                                assetfilesstatus:uploadassets.response.status,
                                code:uploadassets.code
                            }})
                        }
                        else if(uploadassets.code === 2){
                            dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                        }
                        else{
                            dispatch({type:ASSETS_UPLOAD_ERROR, success:false,  payload:uploadassets.response})
                        }
                },
                (error) => dispatch({type:ASSETS_UPLOAD_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:ASSETS_UPLOAD_ERROR, success:false, payload:error.message})
            )
        }
    },
	
	FilterDataList(values){
        return (dispatch) =>{
            dispatch({type:FILTER_DATA_REQUESTED, success:true, payload:'Fetching Filter Data List...'})
            WebApi.FilterDataList(values).then(
                (filterdata) => {
                    if(filterdata.code === 1){
                        dispatch({type:FILTER_DATA_RECEIVED, success:true, payload:{
                            filterdata:filterdata.response,
                            filterdatamessage:'Filter Data Fetched Successfully'
                        }})
                    }
                    else if(filterdata.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:FILTER_DATA_ERROR, success:false,  payload:filterdata.response})
                    }
                },
                (error) => dispatch({type:FILTER_DATA_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:FILTER_DATA_ERROR, success:false, payload:error.message})
            )
        }
    },

    ManageBasket(values){
        return (dispatch) =>{
            dispatch({type:ADD_OR_EDIT_BASKET_REQUESTED, success:true, payload:'Add/Edit basket requested...'})
            WebApi.ManageBasket(values).then(
                (data) => {
                    if(data.code === 1){
                        dispatch({type:ADD_OR_EDIT_BASKET_RECEIVED, success:true, payload:{
                            basketcount:data.response,
                            basketmessage:data.status
                        }})
                    }
                    else if(data.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:ADD_OR_EDIT_BASKET_ERROR, success:false,  payload:data.response})
                    }
                },
                (error) => dispatch({type:ADD_OR_EDIT_BASKET_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:ADD_OR_EDIT_BASKET_ERROR, success:false, payload:error.message})
            )
        }
    },

    AddProduct(values){
        return (dispatch) =>{
            dispatch({type:INSERT_PRODUCT_REQUESTED, success:true, payload:''})
            WebApi.AddProduct(values).then(
                (result) => {
                        if(result.code === 1){
                            dispatch({type:INSERT_PRODUCT_RECEIVED, success:true, payload:{
                                insertmessage:result.response,
                                insertcode:result.code
                            }})
                        }
                        else if(result.code === 2){
                            dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                        }
                        else{
                            dispatch({type:INSERT_PRODUCT_ERROR, success:false,  payload:result.status})
                        }
                },
                (error) => dispatch({type:INSERT_PRODUCT_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:INSERT_PRODUCT_ERROR, success:false, payload:error.message})
            )
        }
    },

    UpdateProduct(values){
        return (dispatch) =>{
            dispatch({type:UPDATE_PRODUCT_REQUESTED, success:true, payload:''})
            WebApi.UpdateProduct(values).then(
                (result) => {
                        if(result.code === 1){
                            dispatch({type:UPDATE_PRODUCT_RECEIVED, success:true, payload:{
                                updatemessage:result.response,
                                updatecode:result.code
                            }})
                        }
                        else if(result.code === 2){
                            dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                        }
                        else{
                            dispatch({type:UPDATE_PRODUCT_ERROR, success:false,  payload:result.response})
                        }
                },
                (error) => dispatch({type:UPDATE_PRODUCT_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:UPDATE_PRODUCT_ERROR, success:false, payload:error.message})
            )
        }
    },

    ProductOptions(values){
        return (dispatch) =>{
            dispatch({type:PRODUCT_OPTIONS_REQUESTED, success:true, payload:'Fetching Options List...'})
            WebApi.ProductOptionsList(values).then(
                (optiondata) => {
                    if(optiondata.code === 1){
                        dispatch({type:PRODUCT_OPTIONS_RECEIVED, success:true, payload:{
                            cu_categorylist:optiondata.response.main_category,
                            shr_categorylist:optiondata.response.main_category,
                            case_categorylist:optiondata.response.main_category,
                            pallet_categorylist:optiondata.response.main_category,
                            uomlist:optiondata.response.uom,
                            countrylist:optiondata.response.country,
                            packagingtypelist:optiondata.response.packaging_type,
                            productoptionsmessage:'Options Fetched Successfully'
                        }})
                    }
                    else if(optiondata.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:PRODUCT_OPTIONS_ERROR, success:false,  payload:optiondata.response})
                    }
                },
                (error) => dispatch({type:PRODUCT_OPTIONS_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:PRODUCT_OPTIONS_ERROR, success:false, payload:error.message})
            )
        }
    },

    SubCategoryList(values,type){
        return (dispatch) =>{
            dispatch({type:SUB_CATEGORY_REQUESTED, success:true, payload:''})
            WebApi.SubCategoryList(values).then(
                (optiondata) => {
                    if(optiondata.code === 1){
                        if(type === 'cu'){
                            dispatch({type:SUB_CATEGORY_RECEIVED, success:true, payload:{
                                cu_subcategorylist:optiondata.response
                            }});
                        }else if(type === 'shr'){
                            dispatch({type:SUB_CATEGORY_RECEIVED, success:true, payload:{
                                shr_subcategorylist:optiondata.response
                            }});
                        }else if(type === 'case'){
                            dispatch({type:SUB_CATEGORY_RECEIVED, success:true, payload:{
                                case_subcategorylist:optiondata.response
                            }});
                        }else{
                            dispatch({type:SUB_CATEGORY_RECEIVED, success:true, payload:{
                                pallet_subcategorylist:optiondata.response
                            }});
                        }
                    }
                    else if(optiondata.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:SUB_CATEGORY_ERROR, success:false,  payload:optiondata.response})
                    }
                },
                (error) => dispatch({type:SUB_CATEGORY_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:SUB_CATEGORY_ERROR, success:false, payload:error.message})
            )
        }
    },


    MarketList(values,type){
        return (dispatch) =>{
            dispatch({type:MARKET_REQUESTED, success:true, payload:''})
            WebApi.MarketList(values).then(
                (optiondata) => {
                    if(optiondata.code === 1){
                        if(type === 'cu'){
                            dispatch({type:MARKET_RECEIVED, success:true, payload:{
                                cu_marketlist:optiondata.response,
                            }})
                        }else if(type === 'shr'){
                            dispatch({type:MARKET_RECEIVED, success:true, payload:{
                                shr_marketlist:optiondata.response,
                            }})
                        }else if(type === 'case'){
                            dispatch({type:MARKET_RECEIVED, success:true, payload:{
                                case_marketlist:optiondata.response,
                            }})
                        }else{
                            dispatch({type:MARKET_RECEIVED, success:true, payload:{
                                pallet_marketlist:optiondata.response,
                            }})
                        }
                    }
                    else if(optiondata.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:MARKET_ERROR, success:false,  payload:optiondata.response})
                    }
                },
                (error) => dispatch({type:MARKET_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:MARKET_ERROR, success:false, payload:error.message})
            )
        }
    },

    ExportExcel(values,type){
        return (dispatch) =>{
            dispatch({type:EXPORT_EXCEL_REQUESTED, success:true, payload:''})
            WebApi.ExportExcel(values).then(
                (exceldata) => {
                    if(exceldata.code){
                        //let blob = new Blob([exceldata.response], { type: "application/xls" }),
                        setTimeout(() => {
                            const response = {
                              file: exceldata.response,
                            };
                            // server sent the url to the file!
                            // now, let's download:
                            window.location.href = response.file;
                            // you could also do:
                            // window.open(response.file);
                          }, 100);
                        dispatch({type:EXPORT_EXCEL_RECEIVED, success:true,  payload:{
                            excel_data:exceldata.response
                        }})
                    }else{
                        dispatch({type:EXPORT_EXCEL_ERROR, success:false,  payload:exceldata.response})
                    }
                },
                (error) => dispatch({type:EXPORT_EXCEL_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:EXPORT_EXCEL_ERROR, success:false, payload:error.message})
            )
        }
    },

    loadFormData(values){
        return (dispatch) =>{
            dispatch({type:PRODUCT_FORM_DATA_REQUESTED, success:true, payload:'Form Data Requested'})
            WebApi.loadFormData(values).then(
                (formdata) => {
                    
                    if(formdata.code === 1){
                        dispatch({type:PRODUCT_FORM_DATA_RECEIVED, success:true, payload:{
                            form_data:formdata.response.form_fields,
                            product_details:formdata.response.product_details
                        }})
                    }
                    else if(formdata.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:PRODUCT_FORM_DATA_ERROR, success:false,  payload:formdata.response})
                    }
                },
                (error) => dispatch({type:PRODUCT_FORM_DATA_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:PRODUCT_FORM_DATA_ERROR, success:false, payload:error.message})
            )
        }
    },
    
    loadNutritionData(values){
        return (dispatch) =>{
            dispatch({type:NUTRITION_REQUESTED, success:true, payload:'Nutrition Requested'})
            WebApi.loadNutritionData(values).then(
                (nutritioninfo) => {

                    if(nutritioninfo.code === 1){
                        dispatch({type:NUTRITION_RECEIVED, success:true, payload:{
                            nutritioninformation:nutritioninfo.response.data,
                            nutritionmessage:''
                        }})
                    }
                    else if(nutritioninfo.code === 2){
                        dispatch({type:LOGGED_OUT, success:false, payload:Common.userLogoutOption()})
                    }
                    else{
                        dispatch({type:NUTRITION_ERROR, success:false,  payload:nutritioninfo.response})
                    }
                },
                (error) => dispatch({type:NUTRITION_ERROR, success:false,  payload:error.message})
            )
            .catch((error)=>dispatch({type:NUTRITION_ERROR, success:false, payload:error.message})
            )
        }
    },


    
}


export default ActionCreators;