import React,{useEffect} from 'react';
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'



const Home = () => {

    useEffect(() => {
        document.write = `Phanindra Reddy | Home`
    },[])


    return (
        <section id="home">
        <div className="home_container">
            
            <div className="glass_container">
                <h1>Hello, I'm <span>Phanindra Reddy.</span></h1>
                <h1>I'm a front-end web developer.</h1>

                <div className="home_btns">
                    <button className="resume_btn">
                        Resume
                        <span>
                            <FontAwesomeIcon icon={faFileAlt} style={{margin:'0px 10px'}}/>
                        </span>
                    </button>
                    
                    <form  action="#about">
                    <button className="work_btn" type="submit">
                        View Work
                        <span>
                            <FontAwesomeIcon icon={faArrowRight} className="right_arrow" style={{margin:'0px 10px'}}/>
                        </span>
                    </button>
                    </form>

                </div>
            </div>

        </div>

        </section>
    )
}

export default Home;
