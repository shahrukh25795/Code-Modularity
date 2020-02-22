import React, { Component } from 'react';

class MultiFileUpload extends Component {

    selectMultipleFile = (evt) => {
        var file = evt.target.files,
            acceptType = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG", "gif", "GIF", "audio/mp3", "audio", "mpeg", "mp3", "mp4", "m4v", "mpg", "x-aiff", "video", "video/mp4", "video/x-msvideo", "ogv", "ogm", "ogg", "webm", "3gpp", "3gp", "txt", "xls", "xlsx", "vnd.openxmlformats-officedocument.wordprocessingml.document", "msword", "doc", "docx", "pdf", 'rar', 'zip', "ppt", "pptx"];
        for (var i = 0; i < file.length; i++) {
            if (acceptType.indexOf(file[i].type.split('/')[1]) !== -1) {
                if (((file[i].size / 1000) / 1000).toFixed(4) <= this.props.size) {
                    this.props.file(file[i])
                    const reader = new FileReader();
                    reader.onload = (e2) => {
                        this.props.imgUrl(e2.target.result)
                    };
                    reader.readAsDataURL(file[i]);
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
    }

    render() {
        return (
            <div>
                <span>Multi file Upload</span>
                <input type="file" id="file_id" onChange={this.selectMultipleFile} multiple />
            </div>
        );
    }
}

export default MultiFileUpload;