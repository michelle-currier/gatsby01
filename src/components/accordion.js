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

function BasicExample() {
  return (
    <Accordion data-bs-theme="dark" className="mt-5">
      <Accordion.Item>
        <Accordion.Header>Hand made art!</Accordion.Header>
        <Accordion.Body>
        To better reiterate this, Hand made art is made from raw materials that are transformed into original art.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Hand assembling is not the same as hand-made</Accordion.Header>
        <Accordion.Body>
        That is assembling material that you as the artist did not make and designing something new from already produced material. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>We prioritize makers</Accordion.Header>
        <Accordion.Body>
        We are prioritizing artists who hand-make their work on our busiest days of Fridays and Saturdays. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>What about clothing vendors?</Accordion.Header>
        <Accordion.Body>
        In regards to clothing, we are prioritizing clothing that is hand printed by the artist. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;