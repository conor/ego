import React from 'react'

// Theme
import { spacingExtraLarge, spacingLarge, spacingNone } from '../theme/spacing'
import { f1, f3, regular } from '../theme/typography'
import { largeAndUp } from '../theme/screenSizes'

const Introduction = () => (
  <section>
    <div className='max-width-container'>
      <h1
        data-aos='zoom-out-right'
        data-aos-delay='500'
        data-aos-once='true'
        data-aos-easing='ease-in-sine'
      >
        I am a
        {' '}
        <strong>designer/developer</strong>
        {' '}
        who turns business ideas into
        {' '}
        <strong>products</strong>
        {' '}
        &
        {' '}
        <strong>services</strong>
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
      }

      @media ${largeAndUp} {
        h1 {
          font-size: ${f1};
          width: 60%;
          display: block;
        }
        section {
          padding: ${spacingExtraLarge};
        }
      }
    `}</style>
  </section>
)

export default Introduction
