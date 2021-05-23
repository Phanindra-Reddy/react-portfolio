import React from 'react';
import './Resources.css';

import UseAnchorTag from '../../hooks/useAnchorTag';

const Youtube = () => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'white'}}>Youtube channels</h2>
        <div id="youtube" className="resource">

            <div className="yt_channels anchor_tags">

                <UseAnchorTag
                    name="Traversy Media" link="https://www.youtube.com/c/TraversyMedia"
                />
                <UseAnchorTag
                    name="FreeCodeCamp" link="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
                />
                <UseAnchorTag
                    name="Codevolution" link="https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw"
                /> 
                <UseAnchorTag
                    name="Hitesh Chowdary" link="https://www.youtube.com/user/hiteshitube"
                />
                <UseAnchorTag
                    name="Dev Ed" link="https://www.youtube.com/devEd"
                /> 
                <UseAnchorTag
                    name="Web Dev Simplified" link="https://www.youtube.com/WebDevSimplified"
                /> 
                <UseAnchorTag
                    name="Programming With Mosh" link="https://www.youtube.com/user/programmingwithmosh"
                /> 
                <UseAnchorTag
                    name="Clever Programmer" link="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
                /> 
                <UseAnchorTag
                    name="Florin Pop" link="https://www.youtube.com/c/FlorinPop"
                />  
                <UseAnchorTag
                    name="Akshay Saini" link="https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ"
                />
                <UseAnchorTag
                    name="Tyler Potts" link="https://www.youtube.com/TylerPotts"
                />
                <UseAnchorTag
                    name="DesignCourse" link="https://www.youtube.com/c/DesignCourse"
                />
                <UseAnchorTag
                    name="Kevin Powell" link="https://www.youtube.com/kepowob"
                />
                <UseAnchorTag
                    name="Telusko" link="https://www.youtube.com/user/javaboynavin"
                />
                
            </div>
            <p><span>*</span>Note:There are many other channels teaches web dev, but the above one's are beginner friendly.</p>
            
        </div>
        </>
    )
}

export default Youtube;
