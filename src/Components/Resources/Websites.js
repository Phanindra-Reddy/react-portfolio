import React from 'react';
import './Resources.css';

import UseAnchorTag from '../../hooks/useAnchorTag';

const Websites = () => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'white'}}>Websites</h2>
        <div id="websites" className="resource">

            <div className="websites anchor_tags">

                <UseAnchorTag name="Free Code Camp" link="https://www.freecodecamp.org/" />
                <UseAnchorTag name="Florin-POP" link="https://www.florin-pop.com/" />
                <UseAnchorTag name="CSS Tricks" link="https://css-tricks.com/" />
                <UseAnchorTag name="Flavio Copes" link="https://flaviocopes.com/" />
                <UseAnchorTag name="JavaScript 30" link="https://javascript30.com/" />
                <UseAnchorTag name="Free Frontend" link="https://freefrontend.com/" />
                <UseAnchorTag name="Web dev simplified Blog" link="https://blog.webdevsimplified.com/" />

            </div>
            
        </div>
        </>
    )
}

export default Websites;