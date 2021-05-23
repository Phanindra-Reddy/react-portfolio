import React from 'react';
import "./Card.css";

import icon1 from '../Components/assets/resources-img.jpeg'

const useProject = ({image, name, demoUrl, codeUrL}) => {
    return (
        <>

            <div className="Card">

                <div className="content">

                    <img src={image?image:icon1} alt="" className="img"/>
                    <p>{name}</p>

                    <div className="links">
                        <a href={demoUrl} target="_blank" rel="noreferrer">Demo</a>
                        <a href={codeUrL} target="_blank" rel="noreferrer">Code</a>
                    </div>

                </div>

            </div>

        </>
    )
}

export default useProject;
