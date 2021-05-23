import React from 'react';


import './Resources.css';
import UseAnchorTag from '../../hooks/useAnchorTag';


const Books = () => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'white'}}>Books</h2>
        <div id="books" className="resource">

            <div className="books anchor_tags">

                <UseAnchorTag name="You Don't Know JS Yet(Recommended)" link="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed" />
                <UseAnchorTag name="HTML &amp; CSS by Jon Ducket" link="https://phanindra-reddy.github.io/js-books/HTML and CSS.pdf" />
                <UseAnchorTag name="JavaScript &amp; Jquery by Jon Ducket" link="https://drive.google.com/file/d/1h0yCg5T6psOzODawfPPQ9a6hwSN_mVCO/preview" />
                <UseAnchorTag name="JavaScript: The Definitive Guide" link="https://phanindra-reddy.github.io/js-books/javascript the definitive guide.pdf" />
                <UseAnchorTag name="Learning React" link="https://phanindra-reddy.github.io/js-books/learningreact.pdf" />
                <UseAnchorTag name="The Road to learn React" link="https://phanindra-reddy.github.io/js-books/The Road to learn React.pdf" />

            </div>
            
        </div>
        </>
    )
}

export default Books;