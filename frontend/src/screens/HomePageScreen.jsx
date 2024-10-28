import React from 'react'
import homeVideo from '../assets/home-vid.mp4';
import girl1Image from '../assets/girl1.jpg'
import boy1Image from '../assets/boy1.jpg'
import girl2Image from '../assets/girl2.jpg'
import themImage from '../assets/them.jpg'
import hoddieImage from '../assets/hoddie.jpg'
import tshirtImage from '../assets/tshirt.jpg'
import hermesImage from '../assets/Hermes.jpg'
import channelImage from '../assets/Chanel.jpg'
import gucciImage from '../assets/Gucci.jpg'
import pradaImage from '../assets//Prada.jpg'
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const HomePageScreen = () => {
  return (
    <ListGroup className='container'>
    <ListGroup.Item style={{}} className='video-container'>
      <video 
        src={homeVideo}  
        controls 
        autoPlay 
        loop 
        muted 
        className='home'
      ></video>
      <div className='lay'>Elevate Your Style with Merchant</div>
    </ListGroup.Item>

    <ListGroup.Item className="flex">
      <div className="one">
        <img src={girl1Image} alt="Girl 1" />
        <h2>Your Refined Style</h2> 
      </div>
      <div className="two">
        <img src={boy1Image} alt="Boy 1" />
        <h2>Casual Comfort</h2> 
      </div>
      <div className="three">
        <img src={girl2Image} alt="Girl 2" />
        <h2>Chic Vibes</h2> 
      </div>
      <div className="four">
        <img src={themImage} alt="Them" />
        <h2>Effortless Trend</h2> 
      </div>
    </ListGroup.Item>
    <div className="third">
    <div className="hod">
        <img src={hoddieImage} alt="" />
        <h2>HODDIES</h2>
        <h4>Cozy Layers for All Seasons</h4>
        <button className='btn'>SHOP NOW</button>
    </div>
    <div className="shr">
       <img src={tshirtImage} alt="" />
       <h2>T-SHIRTS</h2>
       <h4>Everyday Essentials, Effortlessly Cool</h4>
       <button className='btn'>SHOP NOW</button>
    </div>
    </div>
    <div className="brand-container">
    <div className="featured">
     <div className="line"></div>
     <h2>Featured Brands</h2>
      </div>
      
        <div className='flex flex-flex-grow-1'  >
        <div className="hermes">
        <img src={hermesImage} alt="" />
      </div>
      <div className="channel">
        <img src={channelImage} alt="" />
      </div>
      <div className="gucci">
        <img src={gucciImage} alt="" />
      </div>
      <div className="prada">
        <img src={pradaImage} alt="" />
      </div>
      </div>
      
      
    </div>
    <div className="style">
      <h2>At Merchant & Co., style meets connection</h2>
      <p>We believe that fashion is about more than clothes—it's about community, individuality, and a shared love for the craft. Merchant & Co. is where style enthusiasts gather, a place where stories unfold as people come together to discover unique pieces. Whether you're exploring our collection online or visiting in person, you'll feel the pulse of timeless trends and new ideas that make every moment magical. Embrace your style journey with us—because at Merchant & Co., every visit is a new chapter waiting to be written.</p>
    </div>
  </ListGroup>
);
}




export default HomePageScreen