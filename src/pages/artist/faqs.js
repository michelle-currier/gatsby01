import React from "react"
import Layout from '../../components/layout'
import CardAgreement from "../../components/card"
import ArtistAppAccordion from "../../components/accordion1"
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
            
            <CardAgreement />

        </Layout>
    )
} 
export default FaqsPage