import React,{useState, useEffect} from 'react';
import './Projects.css';

import axios from 'axios';
import UseProject from '../../hooks/useProject';
import DefaultProjects from './DefaultProjects';


const Projects = () => {

    const [projects, setProjects] = useState([])
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = `Phanindra Reddy | Projects`;
    },[])


    useEffect(()=>{
        try{
            setLoading(true);
            //axios('../../projects.json', 
            axios('https://phanindra-reddy.github.io/projects-list-json-file/projects.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
            })
            .then((data) => {
                //console.log(data.data)
                let projects_list = data.data.projects;

                if (category === 'html_css') {
                    setProjects(projects_list.html_css)
                }else if(category === 'javascript'){
                    setProjects(projects_list.javascript)
                }else if(category === 'react'){
                    setProjects(projects_list.react)
                }
                
            })
            .catch(error => console.log('error', error))
        }catch(error){
            throw error;
        }finally{
            setLoading(false);
        }
        
    },[category]);


    return (
        <section id="projects">
            <h1>Projects<hr/></h1>

            <div className="select_project">
                
                <select className="Select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option  value="" defaultValue>Select Projects</option>
                    <option  value="html_css">HTML / CSS</option>
                    <option  value="javascript">JavaScript</option>
                    <option  value="react">React</option>
                </select>
                
            </div>

            <div className="project_container">

                {
                    projects?.length === 0 ?

                    <DefaultProjects/> :

                    projects.map(project => (
                        <UseProject
                            key={project.project_id} 
                            name={project.project_name}
                            image={project.project_image}
                            demoUrl={project.project_demo_url}
                            codeUrL={project.project_code_url}
                        />
                    ))
                    
                }

            </div>

            
        </section>
    )
}

export default Projects;
