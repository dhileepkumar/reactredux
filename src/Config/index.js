const WebConfig = {
    name:'Trusted Source',
    logo:'img/brand/logo.svg',
    logo_white:'img/brand/logo-white.png',
    logominimized:'img/brand/sygnet.svg',
  
    // basepath:'http://202.129.196.139:5112/',    
    // assetspath:'http://202.129.196.139:5112/ts_new/public/uploaded_files/',

    //basepath:'http://172.16.20.71/trustedsource/api',    
    //assetspath:'http://172.16.20.71/trustedsource/api/public/uploaded_files/',

    // basepath:'https://tsourceapi.azurewebsites.net/',    
    // assetspath:'https://tsourceapi.azurewebsites.net/public/uploaded_files/',

    // basepath:'https://trustedsource.azurewebsites.net/api',    
    // assetspath:'https://trustedsource.azurewebsites.net/api/public/uploaded_files/',

    // basepath:'http://localhost/trustedsource/api/',    
    // assetspath:'http://localhost/trustedsource/api/public/uploaded_files/',

    basepath:'https://trustedsourcepilot.azurewebsites.net/api',    
    assetspath:'https://trustedsourcepilot.azurewebsites.net/api/public/uploaded_files/',
    
    thumbnail_img_path:'https://trustedsourcepilot.azurewebsites.net/api/public/uploaded_files/productdetailthumbnail/',
    detail_img_path:'https://trustedsourcepilot.azurewebsites.net/api/public/uploaded_files/productdetailimage/',

    userTypes : {Supplier:1,Retailer:2,GS1User:3,TrustedSource:4},
    userTypesText : {1:'Supplier',2:'Retailer',3:'GS1',4:'Trusted Source'},
    userPath : {1:'/supplier/',2:'/retailer/',3:'/gs1/',4:'/trustedsource/'},

    suppliermenu : [
        {weblinkname:'Dashboard',weblink:'/supplier/dashboard', ref:'dashboard', icon:'fa fa-dashboard', },
		{weblinkname:'Product Browser',weblink:'/supplier/productbrowser', ref:'productbrowser', icon:'fa fa-list'},
        {weblinkname:'Insert New Product',weblink:'/supplier/insertproduct', ref:'insertproduct', icon:'fa fa-plus-circle'},
        {weblinkname:'Enrich from Excel',weblink:'/supplier/importexcelfile', ref:'importexcelfile', icon:'fa fa-magic'},
        {weblinkname:'Upload Assets',weblink:'/supplier/assetview', ref:'assetview', icon:'fa fa-arrow-circle-up'},
        {weblinkname:'1WS XML',weblink:'/supplier/xmldata', ref:'xmldata', icon:'fa fa-file-excel-o'},
        {weblinkname:'Datanet XML',weblink:'/supplier/datanetxml', ref:'datanetxml', icon:'fa fa-file-excel-o'},
    ],

    retailermenu : [
        {weblinkname:'Dashboard',weblink:'/retailer/dashboard', ref:'dashboard', icon:'fa fa-dashboard', },
		{weblinkname:'Product Browser',weblink:'/retailer/productbrowser', ref:'productbrowser', icon:'fa fa-list'},
       // {weblinkname:'Insert New Product',weblink:'/retailer/insertproduct', ref:'insertproduct', icon:'assets/images/icon5.png'},
    ],

    // gs1menu : [
    //     {weblinkname:'Dashboard',weblink:'/gs1/dashboard', ref:'dashboard', icon:'assets/images/icon1.png', },
	// 	{weblinkname:'Product Browser',weblink:'/gs1/productbrowser', ref:'productbrowser', icon:'assets/images/icon2.png'},
    //     {weblinkname:'Insert New Product',weblink:'/gs1/insertproduct', ref:'insertproduct', icon:'assets/images/icon5.png'},
    //     {weblinkname:'Quality Control',weblink:'/gs1/qualitycontrol', ref:'qualitycontrol', icon:'assets/images/icon6.png'},
    //     {weblinkname:'Notifications',weblink:'/gs1/notifications/inbox', ref:'notificationsmain', icon:'assets/images/icon6.png',
    //     submenu :[
    //         {weblinkname:'Inbox',weblink:'/gs1/notifications/inbox', ref:'notificationsinbox', icon:''},
    //         {weblinkname:'Compose',weblink:'/gs1/notifications/compose', ref:'notificationscompose', icon:''},
    //     ],},
    // ],


    gs1menu : [
        {weblinkname:'Dashboard',weblink:'/gs1/dashboard', ref:'dashboard', icon:'fa fa-dashboard', },
		{weblinkname:'Product Browser',weblink:'/gs1/productbrowser', ref:'productbrowser', icon:'fa fa-list'},
      //  {weblinkname:'Insert New Product',weblink:'/gs1/insertproduct', ref:'insertproduct', icon:'assets/images/icon5.png'},
       
    ],

    supplierrightmenu:[
        {weblinkname:'Dashboard',weblink:'/supplier/productbrowser', ref:'dashboard', icon:'fa fa-bell-o', classname:"notification"},
        {weblinkname:'messages',weblink:'/supplier/productbrowser', ref:'messages', icon:'fa fa-envelope-o', classname:"messages"},
    ]
};

export default WebConfig;