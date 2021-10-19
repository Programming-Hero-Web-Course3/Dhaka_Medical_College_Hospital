import React from 'react';
import page404 from "../../images/273806-P5X28A-300.jpg"
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img src={page404} alt="" />
            <br /> <br />
            <button className="btn btn-primary">Go to Home</button>
        </div>
    );
};

export default NotFound;