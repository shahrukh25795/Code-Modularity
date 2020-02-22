import React, { Component } from 'react';

class SingleImageUpload extends Component {

    selectSingleFile = (evt) => {
        var file = evt.target.files[0],
            acceptType = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG", "gif", "GIF", "audio/mp3", "audio", "mpeg", "mp3", "mp4", "m4v", "mpg", "x-aiff", "video", "video/mp4", "video/x-msvideo", "ogv", "ogm", "ogg", "webm", "3gpp", "3gp", "txt", "xls", "xlsx", "vnd.openxmlformats-officedocument.wordprocessingml.document", "msword", "doc", "docx", "pdf", 'rar', 'zip', "ppt", "pptx"],
            type = file.type.split('/');
        if (acceptType.indexOf(type[1]) !== -1) {
            if (((file.size / 1000) / 1000).toFixed(4) <= this.props.size) {
                this.props.file(file)
                const reader = new FileReader();
                reader.onload = (e2) => {
                    this.props.imgUrl(e2.target.result)
                };
                reader.readAsDataURL(file);
            }
            else {
                //show error msg if file size in more than 10 mb
                alert('file size in more than 10 mb not supported')
                document.getElementById('file_id').innerHTML = '';
            }
        }
        else {
            //show error msg if file type is supported
            alert('file type is supported')
            document.getElementById('file_id').innerHTML = '';
        }
    }

    render() {
        return (
            <div>
                <span>Single file Upload</span>
                <input type="file" id="file_id" onChange={this.selectSingleFile} />
            </div>
        );
    }
}

export default SingleImageUpload;