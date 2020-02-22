import React, { Component } from 'react';
import './home.css'
import GetLocation from '../UserLocation/getUserLocation';
import CommonModal from '../Modal/modal';
// import { StarRating } from '../../RatingStar/ratingStar';

class Home extends Component {
    state = {
        visible: false,
    }
    //handle latlng
    latlngHandler = (props) => {
        console.log(props)
    }

    //do something according to permissions
    permissionsHandler = (props) => {
        console.log(props)
    }
    //handle modal ok button
    handleOkBtn = (props) => {
        console.log("handle ok button")
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ cursor: "pointer" }} className="container" onClick={() => this.props.history.push('/user-list')}>
                    <h1>User List</h1>
                </div>
                <div style={{ cursor: "pointer" }} className="container" onClick={() => this.props.history.push('/upload-image')}>
                    <h1>Upload Image</h1>
                </div>
                <div style={{ cursor: "pointer" }} className="container" onClick={() => { this.setState({ visible: true }) }}>
                    <h1>Open Modal</h1>
                </div>
                {/* <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: StarRating(3) }}></div>
                </div> */}
                <CommonModal visible={this.state.visible} handleOkBtn={this.handleOkBtn} handleCancelBtn={() => { this.setState({ visible: false }) }} title="basic modal" content="basic content" type="basic" />
                <GetLocation latlng={this.latlngHandler} permissions={this.permissionsHandler} />
            </React.Fragment>
        );
    }
}

export default Home;