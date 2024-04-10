import React from "react"

import Card from 'react-bootstrap/Card';

function CardAgreement() {
  return (
    
    <Card>
      <Card.Header><h1>Artist Agreement:</h1></Card.Header>
      <Card.Body>
        <Card.Text className="text-cyan"> 
          <h4 className="text-orange">**** Any new pieces of work must be approved before displaying. ****</h4>
          <p className="fw-bolder">Artists must hand-make all items, or ensure 70% of their table displays original work.
          </p>
          <p>Artists are expected to maintain a professional manner with all visitors, other vendors and Bazaar management.  Any unbecoming behavior can result in removal from the Bazaar and termination of any future schedule dates.</p>
          <p>Bazaar management retains the right to adjust Bazaar policies as needed.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardAgreement;