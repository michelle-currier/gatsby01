import * as React from "react"
import '../../node_modules/react-bootstrap/dist/react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import '../components/layout.module.scss'


export const Head = () => <title>Home</title>

const IndexPage = () => {
  return (
    <Layout pageTitle="Frenchmen Art Bazaar">
      <p>I'm doing the things! this is built on netlify with gatsby and react.
      </p>
      <hr></hr>
      <p>Looking into Bootstrap as the main styles for the system and responsive blah blah.</p>
    </Layout>
  )
}
export default IndexPage


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