import React, {Component} from 'react';
import Config from '../../../Config';
import { Row,Col,Button  } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import AlertDismisable from '../../../Components/AlertDismissable';
import Loader from '../../../Components/Loader';

class UploadAssets extends Component {
    constructor(props){
        super(props);
        this.state = {
            files : [],
            uploadedfiles:null,
            fileerrormessage:'',
            isLoading: false
        };
    }

    componentDidMount(){
        document.title = Config.name+' Upload Assets ';
        this.props.ResetStateMessage('upload_asset');
    }


    getImageFiles = (files) =>{
        var file_names='';
        if(files.length){
            file_names =files.map((item, index) => {
                return  <div key={index} className="uploaded_image assetts_upload">
                    <div> <img src={item.base64} alt={item.name} /></div>
                </div>
            });
            return file_names;
        }
        else{
            return file_names='';
        }
    }

    getFiles(images){       
        this.props.ResetStateMessage('upload_asset'); 
        let accepted_file_types = ['image/jpg','image/jpeg','image/png','image/gif','image/tiff'];
        
        if(images.length){
            var error = [];
            error = images.map((item) => {
                if(accepted_file_types.indexOf(item.type) === -1){
                    return false;
                }else{
                    return true;
                }
            });
    
            if(error.indexOf(false) >= 0){
                this.setState({
                    files : [],
                    fileerrormessage:"The file must be a file of type: jpg, jpeg, png, gif, tiff"
                });
                return false;
            }else{
                this.setState({
                    files:this.getImageFiles(images),
                    uploadedfiles:images,
                    fileerrormessage:""
                });
                return true;
            }
        }
        return false;
    }

    static getDerivedStateFromProps(props,state){
        if(props.assetfilesstatus){
            return{
                // fileerrormessage:props.assetfilesstatus,
                isLoading:false
            }
        }
        else{
            return{
                fileerrormessage:state.fileerrormessage
            }
        }
       
    }

    UploadFiles(e){
        e.preventDefault();
        if(this.state.uploadedfiles){
            var sendvalues={
                files:this.state.uploadedfiles,
                token:this.props.token,
            }
            this.setState({
                fileerrormessage:'',
                isLoading:true
            })
            this.props.UploadAssets(sendvalues);
        }
        else{
            this.setState({
                files:[],
                uploadedfiles:null,
                fileerrormessage:'Select atleast one file to upload',
            })
        }
    }

    render(){
        return (
            <div className="files_upload">
                <Loader showloader={this.state.isLoading}/>
                <h4>Drag and Drop Files</h4>
                <form onSubmit={this.UploadFiles.bind(this)}>
                    <div className="container-fluid">
                        <Col xs={12} sm={12} md={12}>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    <div className="form-group"> 
                                    <AlertDismisable message={(this.props.assetfilesstatus && this.props.assetfilesstatus !== '') ? this.props.assetfilesstatus : this.state.fileerrormessage } color={(this.props.code === 1) ? 'success' : 'danger'} errorLog={(this.props.assetfilesmessage) ? this.props.assetfilesmessage : ''} />
                                    <div className="">
                                        <div className="upload_file text-center image_upload upload_assets"> 
                                            <FileBase64 multiple={true} onDone={ this.getFiles.bind(this) } />
                                        </div>
                                    </div>
                                    </div>
                                </Col>
                                <div className={(this.state.files.length) ? 'uploaded_image_count' : 'uploaded_image_count hide'}>
                                    You have chosen   {this.state.files.length} images
                                </div>
                                <div id="image_preview" className={(this.state.files) ? '' : 'hide'}>
                                    {this.state.files}
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
        );
    }
}

export default UploadAssets



