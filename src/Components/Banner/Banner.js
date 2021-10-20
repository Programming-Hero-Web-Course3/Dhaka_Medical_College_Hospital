import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from "../../images/banner 1.png"
import banner2 from "../../images/banner 2.png"
import banner3 from "../../images/banner 3.png"

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 >Historical Entrance of DMC</h2>
      <h4 >A Historical Place For Bangladesh,In Where The Whole Country Can Trust For Health Issues </h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="text-dark">World Class Report Checker Surgeons Are In Here</h2>
      <p className="text-dark">A Place In Where You Can Check Your Whole Body and Can get Accurate Results From Laboratories.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark">Labs And Diagonostic Processes Are Available.</h3>
      <p className="text-dark">Covid-19,TB,Blood,Skin and various Tests Are Available Here</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel>
        </>
        
    );
};

export default Banner;