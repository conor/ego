import React from 'react'

// Content
import profile from '../content/profile'

// Theme
import { spacingLarge, spacingExtraLarge } from '../theme/spacing'
import { largeAndUp, mediumAndUp } from '../theme/screenSizes'
import { f2, f3, f4, f5 } from '../theme/typography'

const About = () => (
  <section id="about">
    <h1 className="title">About</h1>
    <img className="picture" src={profile.picture} alt={profile.pictureAlt} />
    <div className="bio" dangerouslySetInnerHTML={{ __html: profile.bio }} />

    <style jsx>{`
      #about {
        padding: ${spacingLarge};
        animation: slide-in-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation-delay: 0.7s;
      }
      .title {
        margin: 0 0 ${spacingLarge} 0;
        font-size: ${f3};
      }
      .picture {
        width: 100%;
        margin: 0 0 ${spacingLarge} 0;
      }
      .bio {
        font-size: ${f5};
      }
      @media ${mediumAndUp} {
        #about:after {
          content: "";
          display: table;
          clear: both;
        }
        .picture {
          float: left;
          margin: 0 ${spacingLarge} ${spacingLarge} 0;
          width: 50%;
        }
      }
      @media ${largeAndUp} {
        #about {
          padding: ${spacingExtraLarge};
        }
        .title {
          font-size: ${f2};
          margin: 0 0 ${spacingExtraLarge} 0;
        }
        .picture {
          margin: 0 ${spacingExtraLarge} ${spacingLarge} 0;
          width: 33.33333%;
        }
        .bio {
          font-size: ${f4};
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

export default About
