import React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { big } from '../../components/layout.module.scss'

const EventPage = ()  => {
    return (
        <Layout pageTitle="Events">
            
                <div className="row">
                    <div className="col">
                        <h3>Let's make your next event special.</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Link to="../eventForm" className={big}>Make a events inquiry!</Link>
                    </div>
                </div>
           
        </Layout>
    )
} 
export const Head = () => <title>Events</title>
export default EventPage