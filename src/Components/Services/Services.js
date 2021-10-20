import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
   const {services} = useService();
    return (
       
        <div id="services">
              <div className="services-margin">----******----</div>
            <h1 className="text-primary">Our Services</h1>
            
           
           <div className="service-container">
           {
               services.map(service => <Service
               key={service.id}
                service={service}
               ></Service>
                )
           }
           </div>
           

        </div>
    );
};

export default Services;