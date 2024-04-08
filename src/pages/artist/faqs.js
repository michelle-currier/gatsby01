import React from "react"
// import { AccordionFaqs } from "../../components/accordion"
import Accordion from "../../components/accordion"
import ArtistAppAccordion from "../../components/accordion2"
import Layout from '../../components/layout'
import Card from 'react-bootstrap/Card'

import { Link } from 'gatsby'
const FaqsPage = ()  => {
    return (
        <Layout>
            <h1>FAQs Page</h1>
            <h1>What are we looking for in an application?</h1>
            
            <ArtistAppAccordion  />
            <hr></hr>
            <Card className="p-4">
                <Card.Title>Artist Agreement:</Card.Title>
                <Card.Text>
                <p>Artists are expected to maintain a professional manner with all visitors, other vendors and Bazaar management.  Any unbecoming behavior can result in removal from the Bazaar and termination of any future schedule dates.</p>
            <p>Bazaar management retains the right to adjust Bazaar policies as needed.</p>
            <h4>****Any new pieces of work must be approved before displaying.****</h4>
            <p className="fw-bolder">Artists must hand-make all items, or ensure 70% of their table displays original work.
</p>
                </Card.Text>
            </Card>
            
            
            <Accordion />
        </Layout>
    )
} 
export default FaqsPage