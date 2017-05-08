import React from 'react'

// Components
import Project from './Project'

// Content
import projects from '../content/projects'

const Work = () => (
  <div className='projects'>
    {projects.map((project, idx) => <Project key={idx} {...project} />)}

    <style jsx>{`
      .projects {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)

export default Work
