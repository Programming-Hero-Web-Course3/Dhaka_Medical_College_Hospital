import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import "./Details.css"


const Details = () => {
    const {serviceId} = useParams();
    const [details,setDetails]=useState([]);
    const {services} = useService();
    // console.log(serviceId);
    // console.log(services);

    // useEffect(() => {
    //    fetch('./services.json')
    //    .then(res=>res.json())
    //    .then(data=>setServices(data))
    // }, [])   
    const [singleService,setSingleService] = useState([]);


    useEffect(() => {
      if(services.length>0){const Details = services?.find((service) => service.id == Number(serviceId)); 
        setSingleService(Details);

    }}, [services,serviceId]);
    console.log(singleService)
    return (
        <div className="details-body">
            <Card className="mx-auto" style={{ width: '30rem'}}>
  <Card.Img variant="top" src={singleService.image} />
  <Card.Body>
    <Card.Title>{singleService.name}</Card.Title>
    <Card.Text>
      {singleService.description}
    </Card.Text>
    <Link to ="/home"><Button className="btn btn-info" variant="primary">Go to Home</Button></Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default Details;