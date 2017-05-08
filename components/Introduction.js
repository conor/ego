import React from 'react'

// Theme
import { spacingExtraLarge, spacingLarge, spacingNone } from '../theme/spacing'
import { f1, f3, regular } from '../theme/typography'
import { largeAndUp } from '../theme/screenSizes'

const Introduction = () => (
  <section>
    <div className='max-width-container'>
      <h1>
        I have led both
        {' '}
        <strong>design</strong>
        {' '}
        &
        {' '}
        <strong>technology</strong>
        {' '}
        in multiple startups, and even an agency
      </h1>
    </div>

    <style jsx>{`
      section {
        padding: ${spacingLarge};
        padding-top: ${spacingNone};
      }
      .max-width-container {
        max-width: 1550px;
        margin: 0 auto;
      }
      h1 {
        font-size: ${f3};
        font-weight: ${regular};
        margin: ${spacingNone};
        animation: slide-in-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }

      @media ${largeAndUp} {
        h1 {
          font-size: ${f1};
          width: 56.5%;
          display: block;
        }
        section {
          padding: ${spacingExtraLarge};
        }
      }

      @keyframes slide-in-left {
        0% {
          transform: translateX(-1000px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </section>
)

export default Introduction
