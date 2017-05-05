import React from 'react'

// Components
import Project from './Project'

// Content
import projects from '../content/projects'

// Theme
import { brandRed, brandWhite } from '../theme/colors'
import { largeAndUp } from '../theme/screenSizes'
import {
  spacingNone,
  spacingLarge,
  spacingExtraLarge,
  spacingExtraExtraLarge
} from '../theme/spacing'
import { f2, f3, bold } from '../theme/typography'

const Work = () => (
  <section id="work" className="work">
    <h1 className="work-title">Work</h1>

    <div className="projects">
      {projects.map((project, idx) => <Project key={idx} {...project} />)}
    </div>

    <style jsx>{`
      .projects {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .work {
        background: ${brandRed};
        padding: ${spacingLarge};
        padding-bottom: ${spacingExtraLarge};
        animation: slide-in-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation-delay: 0.5s;
      }
      .work-title {
        font-size: ${f3};
        font-weight: ${bold};
        color: ${brandWhite};
        margin: ${spacingNone};
        padding-bottom: ${spacingLarge};
      }
      @media ${largeAndUp} {
        .work {
          padding: ${spacingExtraLarge};
          padding-bottom: ${spacingExtraExtraLarge};
        }
        .work-title {
          font-size: ${f2};
          padding-bottom: ${spacingExtraLarge};
        }
      }
      @keyframes slide-in-bottom {
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}</style>
  </section>
)

export default Work
