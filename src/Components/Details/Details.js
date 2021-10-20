import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import "./Details.css"


const Details = () => {
    const {serviceId} = useParams();
    const {services} = useService();
    const [singleService,setSingleService] = useState([]);

    useEffect(() => {
      if(services.length>0){const Details = services?.find((service) => service.id == Number(serviceId)); 
        setSingleService(Details);

    }}, [services,serviceId]);
  
    return (
        <div className="details-body">
            <Card className="mx-auto" style={{ width: '30rem'}}>
  <Card.Img variant="top" src={singleService.image} />
  <Card.Body>
    <Card.Title className="text-primary">{singleService.name}</Card.Title>
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