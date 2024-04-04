import React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
const EventPage = ()  => {
    return (
        <Layout pageTitle="Events">
            <h3>Let's make your next event special.</h3>
<Link to="../eventForm">Make a inquiry!</Link>
        </Layout>
    )
} 
export const Head = () => <title>Events</title>
export default EventPage