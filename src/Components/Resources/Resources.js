import React,{useEffect} from 'react';
import './Resources.css';

import Tabs from './Tabs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Youtube from './Youtube';
import Websites from './Websites';
import Docs from './Docs';
import Books from './Books';
import Podcast from './Podcast';


const Resources = () => {

    useEffect(() => {
        document.write = `Phanindra Reddy | Resources`
    },[])

    return (
        <section id="resources">
            <h1>Resources<hr/></h1>
            <p>These Resources will help you to learn Front-End Development.</p>
            
            <div className="resources_container">
                
                <Router>
                    <Tabs/>
                    <Switch>
                        <Route path="/youtube" component={Youtube} />
                        <Route path="/websites" component={Websites} />
                        <Route path="/docs" component={Docs} />
                        <Route path="/books" component={Books} />
                        <Route path="/podcast" component={Podcast} />
                    </Switch>
                </Router>
                
            </div>

            <div className="roadmaps">
                <h5>Roadmaps for front-end development</h5>
                <div className="roadmap_links">
                    <a href="https://phanindra-reddy.github.io/js-books/JS_learning_path.pdf" target="_blank" rel="noreferrer">JavaScript Path</a>
                    <a href="https://phanindra-reddy.github.io/js-books/react_learning_path.pdf" target="_blank" rel="noreferrer">React.js Path</a>
                    <a href="https://www.youtube.com/watch?v=i5zRYMc7PFw" target="_blank" rel="noreferrer">Frontend Path</a>
                </div>
                <small>Credits : <a href="https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw" target="_blank" rel="noreferrer">Codevolution</a></small>
            </div>

        </section>
    )
}

  

export default Resources;
