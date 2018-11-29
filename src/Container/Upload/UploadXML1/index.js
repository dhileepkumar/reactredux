import React, {Component} from 'react';
import { Row,Col,Button  } from 'react-bootstrap';
import AlertDismisable from '../../../Components/AlertDismissable'

class UploadExcel1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filename: null,
            fileerrormessage:'',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){

        if(e.target.files.length){
            if(e.target.files[0].type==='text/xml'){
                this.setState({
                    filename:e.target.files[0].name,
                    fileerrormessage:'uploading '+e.target.files[0].name+' file'
                })
            }
            else{
                var file_type = e.target.files[0].name.split(".");
                file_type = file_type.reverse();
                if(file_type[0]==='xml' ){
                    this.setState({
                        filename:e.target.files[0].name,
                        fileerrormessage:'uploading '+e.target.files[0].name+' file'
                    })
                }
                else{
                    this.setState({
                        filename:null,
                        fileerrormessage:'Only XML Sould Be Uploaded. You Have uploaded '+file_type[0]+' file'
                    })


                }
            }
            return true;
        }
        return false;
    }

    static getDerivedStateFromProps(state){
            return{
                fileerrormessage:state.fileerrormessage
            }
    }

    UploadData(values){
        return false;
    }

    render(){
        return  <div className="files_upload">
                <h4>Drag and Drop Files - 1WS XML</h4>
                <form onSubmit={this.UploadData.bind(this)}>
                <div className="container-fluid">
                <Col xs={12} sm={12} md={12}>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="form-group"> 
                            <AlertDismisable message={this.state.fileerrormessage} color='danger'/>
                            <div className="">
                                <div className="upload_file text-center image_excel"> 
                                    <input className="form-control excelimport" id="uploadfile" name="sample_file" type="file" onChange={this.onChange} accept="xml"/> 
                                </div>
                            </div>
                            </div>
                        </Col>
                        <div id="image_preview" className={(this.state.filename) ? '' : 'hide'}>
                            <div className='uploaded_excel'>Selected Filename : 
                            <img src='assets/images/Excel.png' alt=""/><div>{this.state.filename}</div>
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

export default UploadExcel1;