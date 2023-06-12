import React, { useState } from 'react'
import {projects} from "../../stubs/index.js";
import ProjectCard from './components/ProjectCard.jsx';
const Projects = () => {
    const [proj, setProjects] = useState([...projects]);
  return (
    <div>
        {projects.map(
            project=>
            <ProjectCard project={project}></ProjectCard>
        )}
    </div>
  )
}

export default Projects