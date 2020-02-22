import React from 'react';

const DataNotFound = (props) => {
    return (
        <div style={{ marginLeft: "500px" }}>
            <img src={props.imgSrc} alt="" height="20px" />{props.message}
        </div>
    )
};

export default DataNotFound;