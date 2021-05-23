import React from 'react';

import UseAnchorTag from '../../hooks/useAnchorTag';
import './Resources.css'

const Docs = () => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'white'}}>Documentation</h2>
        <div id="docs" className="resource">

            <div className="docs anchor_tags">
                
                <UseAnchorTag name="BootStrap" link="https://getbootstrap.com/" />
                <UseAnchorTag name="Material-ui" link="https://material-ui.com/"/>
                <UseAnchorTag name="Chakra-ui" link="https://chakra-ui.com/" />
                <UseAnchorTag name="MDN docs" link="https://developer.mozilla.org/en-US/docs/Learn"/>
                <UseAnchorTag name="Reactjs" link="https://reactjs.org/docs/getting-started.html"/>
                <UseAnchorTag name="React Router" link="https://reactrouter.com/"/>
                <UseAnchorTag name="Redux" link="https://redux.js.org/"/>
                <UseAnchorTag name="React Native" link="https://reactnative.dev/"/>
                
            </div>
            
        </div>
        </>
    )
}

export default Docs;

