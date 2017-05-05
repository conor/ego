import React from 'react'

// Theme
import { mediumAndUp } from '../theme/screenSizes'
import { f4, f5, regular } from '../theme/typography'
import { spacingExtraLarge, spacingLarge } from '../theme/spacing'
import { brandWhite } from '../theme/colors'

const Project = ({ name, tags, logo, link }) => (
  <a href={link} target="_blank" className="project">
    <h2 className="name">{name}</h2>
    <h3 className="tags">{tags.join(', ')}</h3>
    <div className="logo-container">
      <img src={logo} className="logo" alt={`Logo for the ${name} project.`} />
    </div>

    <style jsx>{`
      .project {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        padding-right: ${spacingLarge};
        flex-basis: 100%;
      }
      .project:nth-child(3n) {
        padding-right: 0;
      }
      .project:hover {
        opacity: 0.7;
      }
      .name {
        font-size: ${f4};
        color: ${brandWhite};
        margin: 0;
      }
      .tags {
        font-size: ${f5};
        font-weight: ${regular};
        color: ${brandWhite};
        margin: 0;
      }
      .logo-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
      }
      .logo {
        margin: ${spacingExtraLarge};
      }
      @media ${mediumAndUp} {
        .project {
          flex-basis: auto;
        }
      }
    `}</style>
  </a>
)

export default Project
