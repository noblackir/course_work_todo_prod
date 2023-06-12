import React from 'react'
import ProjectCard from '../pages/Projects/components/ProjectCard'
const ProjectList = ({ projects, title, remove }) => {
  if (!projects?.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Игры не найдены
      </h1>
    )
  }
  return (
    <div className='ProjectList'>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <div className='list_wrapper'>
        {projects.map(projects =>
          <ProjectCard remove={remove} project={projects} key={projects.id} />
        )}
      </div>
    </div>
  )
}

export default ProjectList