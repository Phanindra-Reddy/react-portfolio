import React from 'react'

import UseProject from '../../hooks/useProject';


const DefaultProjects = () => {
    return (
        <>
            <UseProject  
                name="React Step Form"
                image="https://phanindra-reddy.github.io/projects_images/react_step_form.jpg"
                demoUrl="https://phanindra-reddy.github.io/react-step-form/" 
                codeUrL="https://github.com/Phanindra-Reddy/react-step-form"
            />
            <UseProject  
                name="Covid Tracker"
                image="https://phanindra-reddy.github.io/projects_images/covid_tracker.jpg"
                demoUrl="https://mpr-covid-tracker.netlify.app/covid.html" 
                codeUrL="https://github.com/Phanindra-Reddy/covid-tracker"
            />
            <UseProject  
                name="React YouTube Clone"
                image="https://phanindra-reddy.github.io/projects_images/youtube_clone.png"
                demoUrl="https://phanindra-reddy.github.io/react-youtube-clone/" 
                codeUrL="https://github.com/Phanindra-Reddy/react-youtube-clone"
            />
            <UseProject  
                name="JS Contact Book"
                image="https://phanindra-reddy.github.io/projects_images/contact_book.jpg"
                demoUrl="https://phanindra-reddy.github.io/js-contact-book/login.html" 
                codeUrL="https://github.com/Phanindra-Reddy/js-contact-book/tree/gh-pages"
            />
            <UseProject  
                name="Product Landing Page"
                image="https://phanindra-reddy.github.io/projects_images/landing_page.jpg"
                demoUrl="https://phanindra-reddy.github.io/product-landing-page/" 
                codeUrL="https://github.com/Phanindra-Reddy/product-landing-page"
            />
            <UseProject  
                name="React Amazon Clone"
                image="https://phanindra-reddy.github.io/projects_images/amazon_clone.jpg"
                demoUrl="https://react--clone-6137b.web.app/" 
                codeUrL="https://github.com/Phanindra-Reddy/reactjs-amazon-clone"
            />  
        </>
    )
}

export default DefaultProjects;
