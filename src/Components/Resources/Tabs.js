import React from 'react';

import { Link } from 'react-router-dom';
import "./Tabs.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faPodcast} from '@fortawesome/free-solid-svg-icons'


const links = [
    {
        link:'Youtube',
        icon: faYoutube
    },
    {
        link:'Websites',
        icon: faGlobe
    },
    {
        link:'Docs',
        icon: faFile
    },
    {
        link:'Books',
        icon: faBook
    },
    {
        link:'Podcast',
        icon: faPodcast
    },
    
];

const Tabs = () => {
    return (
        <div className="tabs">

            {
                links.map((link) => (
                    
                    <Link to={link.link} className="link" key={link.link}>
                        <FontAwesomeIcon icon={link.icon} className="icon"/>
                        {link.link}
                    </Link>

                ))
            }
            
        </div>
    )
}

export default Tabs
