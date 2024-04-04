import React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
const ArtistPage = ()  => {
    return (
        <Layout pageTitle="Artist">
            <h2>Vend with us!</h2>
            <p>What we look for in an application:
            <ul>
                <li>Originality: We’re always looking for products or collections that stand out and will attract shoppers.</li>
                <li>Quality: We’re sticklers when it comes to crafts(person)ship.</li>
                <li>Your involvement: It’s important that you have a hand in the design and/or production of each product. We’re a maker’s market, after all!</li>
                <li>Branding: We look for a cohesive brand experience—from your online communications to your IRL display. That means no unfinished websites, blurry photos or confusing branding.</li>
                <li>Social presence: Speaking of your online presence, we prioritize brands with an active Instagram presence.</li>
            </ul>
            </p>

<p>Want to learn more?  Check out the <Link to="../faqs">FAQ.</Link></p>



        </Layout>
    )
} 
export const Head = () => <title>Artist</title>
export default ArtistPage