import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services,setServices] =useState([]);

    useEffect(() => {
       fetch('/services.json')
       .then(res=>res.json())
       .then(data=>setServices(data))
    }, [])   
    return (
        {
            services
        }
    );
};

export default useService;