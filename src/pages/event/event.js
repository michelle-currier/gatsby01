import React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { big } from '../../components/layout.module.scss'

const EventPage = ()  => {
    return (
        <Layout pageTitle="Events">
            <h3>Let's make your next event special.</h3>
            

            <Link to="../eventForm" className={big}>Make a inquiry!</Link>
        </Layout>
    )
} 
export const Head = () => <title>Events</title>
export default EventPage