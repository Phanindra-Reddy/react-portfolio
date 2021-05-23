import React,{useEffect} from 'react';
import './About.css';

import logo from '../assets/phanindra.png';
import SocialIcons from './SocialIcons';

import html5 from '../assets/skills/html-5.svg';
import css3 from '../assets/skills/css-3.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import javascript from '../assets/skills/javascript.svg';
import reactjs from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import clanguage from '../assets/skills/clanguage.svg';
import c_plus_plus from '../assets/skills/c_plus_plus.svg';

import UseImage from '../../hooks/useImage';

const About = () => {

    useEffect(() => {
        document.write = `Phanindra Reddy | About`
    },[])

    return (
        <section id="about">
            <h1>About</h1>
            <div className="about_container">
                
                <div className="about_info">

                    <div className="logo_icons">
                        <img 
                            src={logo}
                            alt="phanindra"
                            style={{width:'200px',height:'200px'}}
                        />
                        <div className="social_icons">
                            <SocialIcons/>
                        </div>
                    </div>

                    <div className="info">
                        <p>
                            Hi, i'm Phanindra Reddy, an aspiring Full Stack Web Developer, and a Self-Taught student. 
                            I faced a lot of challenges when started to learn code.
                            FreeCodeCamp helped me a lot at beginning of my engineering.
                        </p>
                        <p>
                            Directly or indiectly a lot of teacher's like Brad, Mosh, Hitesh, Navin Reddy, Kyle, Vishwas, Qazi,
                            and many more helped through their respective YT channels made me
                            to write more clean and efficient code. Thanks for everyone who are contributing
                            their knowledge to world for completely free.
                        </p>
                        <p> 
                            I will share few resources which helped me to learn front-end web 
                            development in my resources section.
                            Self learning made me to accept any challenge in my life. 
                            finally <span>Never GIVE UP.</span>
                        </p>
                    </div>

                </div>

                <h1 id="tech_stack">Tech Stack</h1>
                <div className="skills">
                    <UseImage name={html5}/>
                    <UseImage name={css3}/>
                    <UseImage name={bootstrap}/>
                    <UseImage name={javascript}/>
                    <UseImage name={reactjs}/>
                    <UseImage name={redux}/>
                    <UseImage name={clanguage}/>
                    <UseImage name={c_plus_plus}/>
                </div>

            </div>
        </section>
    )
}

export default About
