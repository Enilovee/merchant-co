import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            
    <div className="footer-container">
      <div className="address">
        <div className="contact">
          <h3>CONTACT US</h3>
          <h4>Address</h4>
          <p>Street:  34 Bury Rd <br />
              City:  Ham Green <br />
              Zip code:  BS20 9FP <br />
              Country calling code:   <br />
              Country:  United Kingdom</p>
        </div>
        <div className="hours">
          <h4>Hours</h4>
          <p>Mon - Tue: 10am - 5pm <br />
            Wed - Fri: 10am - 6pm <br />
            Sat: 10am - 5pm <br />
            Sun: 12pm - 6pm</p>
        </div>
        <div className="number">
          <h4>Phone Number</h4>
          <p>Phone number:  +44077 8066 7931</p>
        </div>
      
      <div className="information">
        <h3>Information</h3>
        <h4>About Us</h4>
        <h4>FAQs</h4>
        <h4>Terms of Service</h4>
      </div>
  </div>
  /</div>
  <Row>
  <Col className="text-center py-3">
    <p>merchant&co &copy; {currentYear} </p>
     </Col>
         </Row>
        </Container>
    </footer>
  )
}

export default Footer