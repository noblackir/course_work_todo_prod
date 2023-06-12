import React from 'react'
import {NavLink} from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <div style={{height:'100px'}}>
            <div key={project?.id}>
                <h1><NavLink to={`/projects/${project?.id}`}>{project?.title}</NavLink></h1>
                <p>{project?.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard