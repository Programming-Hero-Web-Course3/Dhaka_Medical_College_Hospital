import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import './service.css'

const Service = ({service}) => {  
    const {id,name,image,description}= service;
    return (
            <div className="service pb-3">
               <img src={image} alt=""  />
               <br /><br />
               <h3>{name}</h3>
               <br />
               <p className="px-3">{description}</p>
               <Link to={`/Details/${id}`}>
               <button className="btn btn-primary">View Details of {name.toLowerCase()}</button>
               </Link>
            </div>
    );
    
};

export default Service;