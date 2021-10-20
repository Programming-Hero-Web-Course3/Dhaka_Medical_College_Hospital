import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Students from '../Students/Students';
import "./Home.css"

const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Students></Students>
            <Contacts></Contacts>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;