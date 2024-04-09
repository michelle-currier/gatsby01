import React from "react"
import Accordion from 'react-bootstrap/Accordion';

function FaqsAccordion() {
  return (
    <Accordion defaultActiveKey="0" data-bs-theme="dark" className="my-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Branding: </Accordion.Header>
        <Accordion.Body>
        Present a cohesive brand identity that radiates sophistication and seamlessly translates across digital and physical platforms. Avoid unfinished websites or pixelated imagery to maintain a standard of excellence.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Social media:</Accordion.Header>
        <Accordion.Body>
        Enhance your online visibility with a  curated social media presence. We appreciate artists that authentically engage and cultivate meaningful connections, particularly on platforms such as Instagram.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Minimum artwork requirements:</Accordion.Header>
        <Accordion.Body>
        Each Applicant Must Provide:
        <ul>
          <li>Four (4) digital artwork images representing current work</li>
          <li>along with one (1) digital image of booth display</li>
        </ul> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Booth image guidelines:</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>The booth image should offer a comprehensive view of the display</li>
          <li>Showcasing artwork without any empty spaces</li>
          <li>It's essential that the booth display features the same body of work as the other four artwork images</li>
        </ul> 
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FaqsAccordion;