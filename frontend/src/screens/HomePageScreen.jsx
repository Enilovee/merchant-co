import React from 'react'
import homeVideo from '../assets/home-vid.mp4';
import girl1Image from '../assets/girl1.jpg'
import boy1Image from '../assets/boy1.jpg'
import girl2Image from '../assets/girl2.jpg'
import themImage from '../assets/hoddie-unisex.jpg'
import hoddieImage from '../assets/hoddie.jpg'
import tshirtImage from '../assets/tshirt.jpg'
import hermesImage from '../assets/Hermes.jpg'
import channelImage from '../assets/Chanel.jpg'
import gucciImage from '../assets/Gucci.jpg'
import pradaImage from '../assets//Prada.jpg'
import { Link } from 'react-router-dom';
import { Container, } from 'react-bootstrap';

const HomePageScreen = () => {
  return (
    <Container className='home-container'>
    <div className='video-container '>
        <video 
        src={homeVideo}  
        controls 
        autoPlay 
        loop 
        muted 
        className='home'
      />
      <div className='lay'>Elevate Your Style with Merchant</div>
    </div>

    <Container className="flex-home">
    <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}}  className='cono'>
        <img src={girl1Image} alt="Girl 1" />
        <h2>Your Refined Style</h2> 
      </Link>
      <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} className='cono'>
        <img src={boy1Image} alt="Boy 1" />
        <h2>Casual Comfort</h2> 
      </Link>
      <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} className='cono' >
        <img src={girl2Image} alt="Girl 2" />
        <h2>Chic Vibes</h2> 
      </Link>
      <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}}className='cono' >
        <img src={themImage} alt="Them" />
        <h2>Effortless Trend</h2> 
      </Link>
    </Container>
    <Container  className="third-home">
    <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >
        <img src={hoddieImage} alt="" />
        <h2>HODDIES</h2>
        <h4>Cozy Layers for All Seasons</h4>
        <div className='btn'>SHOP NOW</div>
    </Link>
    <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >
       <img src={tshirtImage} alt="" />
       <h2>T-SHIRTS</h2>
       <h4>Everyday Essentials, Effortlessly Cool</h4>
       <div className='btn'>SHOP NOW</div>
    </Link>
    </Container>
    <div className="brand-container">
    <div className="featured">
     <div className="line"></div>
     <h2>Featured Brands</h2>
      </div>
      
        <div className='brand'  >
         <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >
        <img src={hermesImage} alt=""className='brandImg' />
      </Link>
       <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >
        <img src={channelImage} alt="" className='brandImg' />
      </Link>
       <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}}  >
        <img src={gucciImage} alt="" className='brandImg'/>
      </Link>
       <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >
        <img src={pradaImage} alt=""  className='brandImg'/>
      </Link>
      </div>
      
      
    </div>
    <div className="style">
      <h2>At Merchant & Co., style meets connection</h2>
      <p>We believe that fashion is about more than clothes—it's about community, individuality, and a shared love for the craft. Merchant & Co. is where style enthusiasts gather, a place where stories unfold as people come together to discover unique pieces. Whether you're exploring our collection online or visiting in person, you'll feel the pulse of timeless trends and new ideas that make every moment magical. Embrace your style journey with us—because at Merchant & Co., every visit is a new chapter waiting to be written.</p>
    </div>
  </Container>
);
}




export default HomePageScreen