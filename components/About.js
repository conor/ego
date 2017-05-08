import React from 'react'

// Content
import profile from '../content/profile'

// Theme
import { spacingLarge, spacingExtraLarge } from '../theme/spacing'
import { largeAndUp, mediumAndUp } from '../theme/screenSizes'
import { f4, f5 } from '../theme/typography'
import { brandBlue, brandWhite } from '../theme/colors'

const About = () => (
  <div>
    <img className='picture' src={profile.picture} alt={profile.pictureAlt} />
    <div className='bio' dangerouslySetInnerHTML={{ __html: profile.bio }} />

    <style jsx>{`
      .picture {
        width: 100%;
        margin: 0 0 ${spacingLarge} 0;
      }
      .bio {
        font-size: ${f5};
      }
      div :global(a) {
        color: ${brandBlue};
        text-decoration: none;
        border-bottom: 2px solid ${brandBlue};
        margin: 0 2px;
        transition: border-bottom-color 0.3s ease-in;
      }
      div :global(a:hover) {
        border-bottom-color: ${brandWhite};
      }
      @media ${mediumAndUp} {
        .picture {
          float: left;
          margin: 0 ${spacingLarge} ${spacingLarge} 0;
          width: 50%;
        }
      }
      @media ${largeAndUp} {
        .picture {
          margin: 0 ${spacingExtraLarge} ${spacingLarge} 0;
          width: 33.33333%;
        }
        .bio {
          font-size: ${f4};
        }
      }
    `}</style>
  </div>
)

export default About
