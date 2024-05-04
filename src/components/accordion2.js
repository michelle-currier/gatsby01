import React from "react"
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function FaqsAccordion() {
  return (
    <>
    <Row>
      <Col>
    <Accordion defaultActiveKey="2" data-bs-theme="dark" className="my-4">
      <Accordion.Item eventKey="2">
        <Accordion.Header>Branding: </Accordion.Header>
        <Accordion.Body>
        Present a cohesive brand identity that radiates sophistication and seamlessly translates across digital and physical platforms. Avoid unfinished websites or pixelated imagery to maintain a standard of excellence.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Social media:</Accordion.Header>
        <Accordion.Body>
        Enhance your online visibility with a  curated social media presence. We appreciate artists that authentically engage and cultivate meaningful connections, particularly on platforms such as Instagram.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Minimum artwork requirements:</Accordion.Header>
        <Accordion.Body>
        Each Applicant Must Provide:
        <ul>
          <li>Four (4) digital artwork images representing current work</li>
          <li>along with one (1) digital image of booth display</li>
        </ul> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Booth image guidelines:</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>The booth image should offer a comprehensive view of the display</li>
          <li>Showcasing artwork without any empty spaces</li>
          <li>It's essential that the booth display features the same body of work as the other four artwork images</li>
        </ul> 
        <p className="fw-bolder">Any work appearing in the booth image that falls outside of the medium and context of the four submitted images will not be allowed to be displayed. 
                        </p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </Col>
      <Col>
      <Accordion defaultActiveKey="3" data-bs-theme="dark" className="my-4">   
      <Accordion.Item eventKey="3">
        <Accordion.Header>Artist need to bring</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Display (including tables, chairs, linens,tarps etc.)	</li>
            <li>Extension cords, power strips, tarps Display lighting etc</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Rental Supplies</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>We have certain items like clamp lights and extension cords for rental for $5 each. If light bulbs are borrowed they must be returned by the end of the shift.</li>
            <li>Clamp lights, extension cords and light bulbs are also available for purchase. </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Parking</Accordion.Header>
        <Accordion.Body>None provided, there are paid lots and street parking in the area</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Rain Cover</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Artist need to provide</li>			
            <li>NO pop-up tents are allowed, we really recommend that everyone purchases clear shower curtains that you can hook onto your umbrella on rainy days so that patrons can still see your work while it is protected from the elements. </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    </Row>
    </>
  );
}

export default FaqsAccordion;