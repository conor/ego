import React from 'react'

// Theme
import { f4, f5, regular } from '../theme/typography'
import { brandWhite } from '../theme/colors'

const Project = ({ name, tags, logo }) => (
  <li>
    <h2 className="name">{name}</h2>
    <h3 className="tags">{tags.join(', ')}</h3>

    <style jsx>{`
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
    `}</style>
  </li>
)

export default Project
