import React, { Component } from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';

class ImageCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crop: {
                aspect: 3 / 1,
            },
            url: null,
        }
    }

    onImageLoaded = (image) => {
        this.imageRef = image;
        this.setState({
            crop: makeAspectCrop({
                x: 0,
                y: 0,
                aspect: this.state.crop.aspect,
                width: 100,
            }, image.naturalWidth / image.naturalHeight),
            image,
        });
    }

    onCropComplete = (crop, pixelCrop) => {
        this.getCroppedImg(this.imageRef, pixelCrop)
    }

    onCropChange = (crop) => {
        this.setState({ crop: crop });
    }

    getCropImg = () => {

    }

    getCroppedImg(image, pixelCrop, fileName) {
        this.setState({ is_image_change: true });
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
        var boundary = [pixelCrop.x, pixelCrop.y, (pixelCrop.x + pixelCrop.width), (pixelCrop.y + pixelCrop.height)]
        this.setState({
            boundaries: boundary
        }, () => {
        })
        return canvas.toDataURL('image/png')
    }

    onSelectFile = (evt) => {
        const reader = new FileReader();
        reader.addEventListener('load', () =>
            this.setState({ url: reader.result })
        );
        reader.readAsDataURL(evt.target.files[0]);
    }

    render() {
        return (
            <div >
                <input type="file" onChange={this.onSelectFile} />
                {this.state.url &&
                    <div>
                        <ReactCrop
                            ref={"img_ref"}
                            src={this.state.url}
                            crop={this.state.crop}
                            keepSelection={true}
                            onImageLoaded={this.onImageLoaded}
                            onComplete={this.onCropComplete}
                            onChange={this.onCropChange}
                        />
                        <button type="button" onClick={this.getCropImg}>Crop</button>
                    </div>
                }
            </div>
        );
    }
}

export default ImageCrop;