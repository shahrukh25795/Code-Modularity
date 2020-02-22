import React, { Component } from 'react';
import SingleImageUpload from './singleUpload';
import MultiFileUpload from './multipleUpload';
// import ImageCrop from './uploadWithCrop';

class Images extends Component {
    state = {
        url: "",
        urls: [],
    }

    handleFile = (props) => {
        console.log(props)
    }

    handleUrl = (props) => {
        this.setState({
            url: props
        })
    }

    handleMultiFile = (props) => {
        console.log(props)
    }

    handleMultiUrl = (props) => {
        var urls = [...this.state.urls];
        urls.push(props)
        this.setState({
            urls: urls
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <SingleImageUpload file={this.handleFile} imgUrl={this.handleUrl} size={10} />
                </div>
                <div className="container">
                    <MultiFileUpload file={this.handleMultiFile} imgUrl={this.handleMultiUrl} size={10} />
                </div>
                {/* <div className="container">
                    <ImageCrop />
                </div> */}
                {this.state.url &&
                    <div>
                        <img src={this.state.url} alt="" height="100px" width="100px" />
                    </div>}
                {this.state.urls.length > 0 &&
                    <div>
                        {this.state.urls.map((img, index) => {
                            return <img key={index} src={img} alt="" height="100px" width="100px" style={{ padding: "5px" }} />
                        })}
                    </div>}
            </div>
        );
    }
}

export default Images;