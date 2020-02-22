import React, { Component } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

class CommonModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Modal
                    title={this.props.title}
                    visible={this.props.visible}
                    onOk={this.props.handleOkBtn}
                    onCancel={this.props.handleCancelBtn}
                ><p>{this.props.content}</p>
                </Modal>
            </div>
        );
    }
}

export default CommonModal;