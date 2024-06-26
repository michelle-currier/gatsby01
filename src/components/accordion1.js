import React from "react"
import Accordion from 'react-bootstrap/Accordion';
import '../components/component-overrides.css';
import Row from  'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ArtistAppAccordion() {
  return (
    <>
    <Row>
      <Col>
        <Accordion defaultActiveKey="0" data-bs-theme="dark" className="my-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Originality: </Accordion.Header>
            <Accordion.Body>
            We seek products crafted from raw materials, showcasing your unique creative vision. If you're a designer, share insights into your sourcing methods and the creative message guiding your artistry.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quality:</Accordion.Header>
            <Accordion.Body>
            We prioritize handmade craftsmanship, ensuring originality in every detail of your work.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Your Involvement:</Accordion.Header>
            <Accordion.Body>
            your direct involvement in the design and/or production process of each piece of work is required. We value creators who are fully engaged throughout the design and production process, we encourage you to submit videos of your artistic process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Hand made art!</Accordion.Header>
            <Accordion.Body>
            To better reiterate this, Hand made art is made from raw materials that are transformed into original art.
          Please note hand assembling is not the same as hand-made. That is assembling material that you as the artist did not make and designing something new from already produced material.
            </Accordion.Body> 
          </Accordion.Item>
        </Accordion>
      </Col>
    
      <Col>
        <Accordion defaultActiveKey="1" data-bs-theme="dark" className="my-4">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Amenities!!!</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Pole to pole booth space</li>
                <li>Umbrellas and umbrella stands, an umbrella is required for each artist booth</li>
                <li>Bathrooms	yep real bathrooms</li>
                <li>Power (20x20AMP, 110V) </li>
                <li>Broom and dustpan to clean your space before and after</li>
                <li>Cold/Hot water dispenser </li>
              </ul>    
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>We prioritize makers</Accordion.Header>
            <Accordion.Body>
            We are prioritizing artists who hand-make their work on our busiest days of Fridays and Saturdays. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What about clothing vendors?</Accordion.Header>
            <Accordion.Body>
            In regards to clothing, we are prioritizing clothing that is hand printed by the artist. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is self sustained?
            </Accordion.Header>
            <Accordion.Body>
            Self sustained means what you pack in you must pack out.
            Sweep your space before and after shift.
            Cleaning up after yourself in community space is required. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
    
    </>
  );
}

export default ArtistAppAccordion;