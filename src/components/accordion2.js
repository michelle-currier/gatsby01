import React from "react"

// import Accordion from "react-bootstrap"
// function AccordionFaqs( FaqsDetails ) { 
//     return (
//         <Accordion.Item>
//             <Accordion.Header>Topic 1</Accordion.Header>
//             <Accordion.Body>stuff that is more to know!</Accordion.Body>
//         </Accordion.Item>
//     )
// }

// export default AccordionFaqs
import Accordion from 'react-bootstrap/Accordion';

function ArtistAppAccordion() {
  return (
    <Accordion defaultActiveKey="0" data-bs-theme="dark" className="my-5">
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
    </Accordion>
  );
}

export default ArtistAppAccordion;