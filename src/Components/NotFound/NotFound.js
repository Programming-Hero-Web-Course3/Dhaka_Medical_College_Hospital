import React from 'react';
import { Link } from 'react-router-dom';
import page404 from "../../images/273806-P5X28A-300.jpg"
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img src={page404} alt="" />
            <br /> <br />
            <Link to="/home"><button className="btn btn-primary">Go to Home</button></Link>
        </div>
    );
};

export default NotFound;