import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Details = () => {
    const {serviceId} = useParams();
    const [details,setDetails]=useState([]);
    useEffect(() => {
       fetch('./services.json')
       .then(res=>res.json())
       .then(data=>console.log(data))
    }, [])
    return (
        <div>
            <h1>this is from details{serviceId}</h1>
            <h5 className="card-title">{details?.name}</h5>
            <Link to ="/home"><button>Go to Home</button></Link>
        </div>
    );
};

export default Details;