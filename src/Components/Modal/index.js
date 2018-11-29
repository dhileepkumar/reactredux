import React, {Component} from 'react';
import {Modal,Button} from 'react-bootstrap';

class ModalComponent extends Component{

    render(){
        return (
            <Modal show={this.props.show_modal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modal_title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>{this.props.modal_label}</label>
                        <input id={this.props.id} className="form-control hsmall" name={this.props.id} type="text" value={this.props.modal_value} onChange={this.props.updateValue}/>
                        <div className="text-danger">
                            {this.props.modal_error}
                        </div>  
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.updateOptions}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;


