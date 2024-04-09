import React from "react"
// import { AccordionFaqs } from "../../components/accordion"
import Accordion from "../../components/accordion"
import ArtistAppAccordion from "../../components/accordion1"
import Layout from '../../components/layout'
import Card from 'react-bootstrap/Card'
import FaqsAccordion from "../../components/accordion2"
// import '../../components/component-overrides.css';
const FaqsPage = ()  => {
    return (
        <Layout>
            <h1>Frequently asked questions</h1>
            <h2 className="mt-5">What are we looking for in an application?</h2>
            
            <ArtistAppAccordion  />
            <hr></hr>
            <h2 className="mt-4">So you are thinking about vending with us well here are some requirements to keep in mind.</h2>
            <FaqsAccordion></FaqsAccordion>
            <h2>And ...</h2>
            <Card data-bs-theme="dark">
                <Card.Header><h1>Artist Agreement:</h1></Card.Header>
                <Card.Body>
                <Card.Text> 
                <h4>****Any new pieces of work must be approved before displaying.****</h4>
                <p className="fw-bolder">Artists must hand-make all items, or ensure 70% of their table displays original work.
                </p>
                <p>Artists are expected to maintain a professional manner with all visitors, other vendors and Bazaar management.  Any unbecoming behavior can result in removal from the Bazaar and termination of any future schedule dates.</p>
                <p>Bazaar management retains the right to adjust Bazaar policies as needed.</p>
                </Card.Text>
                </Card.Body>
            </Card>
            
            
            {/* <Accordion /> */}

        </Layout>
    )
} 
export default FaqsPage