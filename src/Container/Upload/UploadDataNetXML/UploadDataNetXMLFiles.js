import React, {Component} from 'react';
import { Row,Col,Button  } from 'react-bootstrap';
import AlertDismisable from '../../../Components/AlertDismissable';
import Config from '../../../Config';
import Loader from '../../../Components/Loader';

class UploadDataNetXML extends Component{

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            filename: null,
            uploadedfiles:null,
            fileerrormessage:'',
            isLoading: false
        };
    }

    onChange(e){
        if(e.target.files.length){
            if(e.target.files[0].type==='text/xml'){
                this.setState({
                    filename:e.target.files[0].name,
                    uploadedfiles:e.target.files[0],
                    //fileerrormessage:'uploading '+e.target.files[0].name+' file'
                })
            }
            else{
                var file_type = e.target.files[0].name.split(".");
                file_type = file_type.reverse();
                if(file_type[0]==='xml' ){
                    this.setState({
                        filename:e.target.files[0].name,
                        uploadedfiles:e.target.files[0],
                        //fileerrormessage:'uploading '+e.target.files[0].name+' file'
                    })
                }
                else{
                    this.setState({
                        filename:null,
                        uploadedfiles:null,
                        fileerrormessage:'Only XML sould be uploaded. You have uploaded '+file_type[0]+' file'
                    })


                }
            }
            return true;
        }
        return false;
    }

    static getDerivedStateFromProps(props,state){
        if(props.xmlfilemessage!==''){
            return{
                isLoading:false
            }
        }
        else if(state.fileerrormessage){
            return{
                fileerrormessage:state.fileerrormessage
            }
        }
        else{
            return null;
        }
    }

    UploadData(values){
        values.preventDefault();
        if(this.state.uploadedfiles){
            var sendvalues={
                files:this.state.uploadedfiles,
                token:this.props.token,
            }
            this.setState({
                fileerrormessage:'',
                isLoading:true
            })
            this.props.UploadDataNetXML(sendvalues);
        }
        else{
            this.setState({
                filename:null,
                uploadedfiles:null,
                fileerrormessage:'Select atleast one file to upload',
            })
        }
    }

    componentDidMount(){
        document.title = Config.name+' Upload Data Net XML ';
        this.props.ResetStateMessage('upload_xml');
    }

    render(){
        return  <div className="files_upload">
                <Loader showloader={this.state.isLoading}/>
                <h4>Drag and Drop Files - Datanet XML</h4>
                <form onSubmit={this.UploadData.bind(this)}>
                <div className="container-fluid">
                <Col xs={12} sm={12} md={12}>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="form-group"> 
                            <AlertDismisable message={(this.props.xmlfilemessage) ? this.props.xmlfilemessage : this.state.fileerrormessage } color={(this.props.code === 1) ? 'success' : 'danger'}/>
                            <div className="">
                                <div className="upload_file text-center image_excel"> 
                                    <input className="form-control excelimport" id="uploadfile" name="sample_file" type="file" onChange={this.onChange} style={{height: '300px'}}/> 
                                </div>
                            </div>
                            </div>
                        </Col>
                        <div id="image_preview" className={(this.state.filename) ? '' : 'hide'}>
                            <div className='uploaded_excel'>Selected Filename : 
                            <img src='assets/images/xml.png' alt=""/><div>{this.state.filename}</div>
                            </div>
                        </div>
                        <Col xs={12} sm={12} md={12}>
                            <div className="text-center product_button">
                                <Button className="btn btn-primary upload_btn" type="submit" value="Upload">Upload</Button>
                            </div>
                        </Col>
                    </Row>
                    </Col>
                </div>
                </form>
            </div>
    }
}

export default UploadDataNetXML;