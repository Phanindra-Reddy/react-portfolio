import React,{useEffect} from 'react';
import './Contact.css';


const Contact = () => {

    useEffect(() => {
        document.write = `Phanindra Reddy | Contact`
    },[])


    return (
        <section id="contact">
            <div className="contact_info">
                <h1>Contact</h1>
                <p>Have a question or want to work together?</p>
            </div>
            <div className="contact_container">
                <form >
                    <input type="text" name="name" placeholder="Enter name" required/>

                    <input  type="email" name="email" placeholder="Enter email" required/>

                    <textarea rows="5" cols="50" name="message" placeholder="Your Message" required/>

                    <button type="submit" value="Send">Let's Talk!!</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
