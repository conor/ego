import React from 'react'

// Components
import Project from './Project'

// Content
import projects from '../content/projects'

// Theme
import { brandRed, brandWhite } from '../theme/colors'
import {
  spacingExtraLarge,
  spacingNone,
  spacingExtraExtraLarge
} from '../theme/spacing'
import { f2, bold } from '../theme/typography'

const Work = () => (
  <section id="work" className="work">
    <h1 className="work-title">Work</h1>

    <ul className="projects">
      {projects.map((project, idx) => <Project key={idx} {...project} />)}
    </ul>

    <style jsx>{`
      .work {
        background: ${brandRed};
        padding: ${spacingExtraLarge};
        padding-bottom: ${spacingExtraExtraLarge};
      }
      .work-title {
        font-size: ${f2};
        font-weight: ${bold};
        color: ${brandWhite};
        margin: ${spacingNone};
        padding-bottom: ${spacingExtraLarge};
      }
      .projects {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </section>
)

export default Work
