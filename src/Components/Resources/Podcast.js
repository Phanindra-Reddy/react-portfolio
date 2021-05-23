import React from 'react';

import './Resources.css';
import UseAnchorTag from '../../hooks/useAnchorTag';


const Podcasts = () => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'white'}}>Podcasts</h2>
        <div id="podcast" className="resource">

            <div className="podcast anchor_tags">
                
                <UseAnchorTag name="Javascript Jabber" link="https://devchat.tv/show/javascript-jabber"/>
                <UseAnchorTag name="Shoptalk Show" link="https://shoptalkshow.com/"/>
                <UseAnchorTag name="LadyBug" link="https://www.ladybug.dev/episodes/level-up-javascript"/>
                <UseAnchorTag name="Syntax" link="https://syntax.fm/" />
                <UseAnchorTag name="The React Podcast" link="https://reactpodcast.simplecast.com/" />
                <UseAnchorTag name="JavaScript Air" link="https://javascriptair.com/" />
                <UseAnchorTag name="React 30" link="https://react30.com/" />
                <UseAnchorTag name="React Native Radio" link="https://reactnativeradio.com/" />
                <UseAnchorTag name="React Wednesdays" link="https://www.telerik.com/react-wednesdays" />

            </div>
            
        </div>
        </>
    )
}

export default Podcasts;