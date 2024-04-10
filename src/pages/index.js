import * as React from "react"
import '../../node_modules/react-bootstrap/dist/react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/layout'
import '../components/layout.module.scss'
import { Carousel } from 'react-bootstrap'

import slide01 from "../images/bazaar1.png"
import slide02 from "../images/bazaar02.png"
import slide03 from "../images/bazaar03.png"
// import { graphql } from "gatsby"
// import Img from "gatsby-plugin-image"


export const Head = () => <title>Frenchmen Art Bazaar</title>

const IndexPage = (props) => {
  return (
    <Layout pageTitle="Home">
      <h1>Frenchmen Art Bazaar</h1>
      <h2 className="mt-3">From our hearts to your hands..</h2>
      <h2>Make love buy art!</h2>

      {/* <p className="lead">The Frenchmen Art Bazaar is a marketplace of makers, creators, designers, collectors and curators—and a community for shoppers and sellers to come together to discover and be discovered. Located at 619 Frenchmen Street where the action is abundant.</p> */}
      <p className="lead">Frenchmen Art Bazaar is proud to offer an artist self-sustained space to explore and showcase the amazing talent that pours from the heart of New Orleans Marigny.  Located at 619 Frenchmen Street where the local creators and taste-makers mix with travelers. </p>
      <hr></hr>
      <p>Looking into Bootstrap as the main styles for the system and responsive blah blah.</p>
      <Carousel>
        <Carousel.Item>
          <img src={slide01} alt="This is 01"></img>
          {/* <Img fluid={props.data.slide01ql.childImageShar.fluid} ></Img> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide02} alt="This is 02"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide03} alt="This is 03"></img>
        </Carousel.Item>
      </Carousel>
    </Layout>
  )
}
export default IndexPage

// export const query = graphql `
// query {
//   slide01ql: file(relativePath: { eq: "bazaar1.png"}) {
//     childImageSharp {
//       fluid(maxWidth: 600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }`


// Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main>
//       <h1>Welcome to my Gatsby site!</h1>
//       <Link to="/artist/artist">Artist</Link>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//     </main>
//   )
// }

// // You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

// // Step 3: Export your component
// export default IndexPage