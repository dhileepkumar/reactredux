import React, {Component} from 'react';
import FileBase64 from 'react-file-base64';
class UploadDataImage extends Component{
    render(){
        return <div className="form-group">
                    <FileBase64 multiple={ this.props.multiupload } onDone={ this.props.getFiles.bind(this) } />
            </div>
       
    }
}
export default UploadDataImage;