import React from "react"
import Layout from '../../components/layout'
export const Head = () => <title>Event Inquiry</title>
const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    //   .then(() => navigate("./thank-you/"))
    //   .catch((error) => alert(error));
    .then(() => alert("Thank you for your submission"))
    .catch((error) => alert(error));
  };
  

  export default function EventForm() {
    return (
        <Layout pageTitle="Event Inquiry">
            <form name="contact" method="POST" data-netlify="true"  onSubmit={handleSubmit}>
            <p>
                <label>Your Name:</label> <input type="text" name="name" />
            </p>
            <p>
                <label>Your Email:</label> <input type="email" name="email" />
            </p>
            <p>
                <label>Your Role:</label> <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
                </select>
            </p>
            <p>
                <label>Message:</label> <textarea name="message"></textarea>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
        </Layout>
       

    )
}