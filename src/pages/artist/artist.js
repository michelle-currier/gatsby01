import React from "react"
import Layout from '../../components/layout'
import { purple } from '../../components/layout.module.scss'
import { Link } from 'gatsby'
const ArtistPage = ()  => {
    return (
        <Layout pageTitle="Artist" pageColor="purple">
            <p>Frenchmen Art Bazaar is proud to offer an artist self-sustained space to explore and showcase the amazing talent that pours from the heart of New Orleans. </p>
            <p>Self sustained means what you pack in you must pack out. </p>
            <p>Sweep your space before and after shift. </p>
            <p>Cleaning up after yourself in community space is required. </p>
            <p>Use the link in the email to confirm any dates you are available to join us. Once we gather requests, we will loop back to confirm your spot. </p>				
            <p>All scheduling requests and confirmations will be conducted through bazaar@619frenchmen.com. If you have any questions please email.</p> 	
            {/* <h2>Vend with us!</h2>
            <p>What we look for in an application:
            <ul>
                <li>Originality: We’re always looking for products or collections that stand out and will attract shoppers.</li>
                <li>Quality: We’re sticklers when it comes to crafts(person)ship.</li>
                <li>Your involvement: It’s important that you have a hand in the design and/or production of each product. We’re a maker’s market, after all!</li>
                <li>Branding: We look for a cohesive brand experience—from your online communications to your IRL display. That means no unfinished websites, blurry photos or confusing branding.</li>
                <li>Social presence: Speaking of your online presence, we prioritize brands with an active Instagram presence.</li>
            </ul>
            </p> */}

<p>Want to learn more?  Check out the <Link to="../faqs">FAQ.</Link></p>



        </Layout>
    )
} 
export const Head = () => <title>Artist</title>
export default ArtistPage