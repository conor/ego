import React from 'react'

// Theme
import { spacingExtraLarge, spacingNone } from '../theme/spacing'
import { f1, regular } from '../theme/typography'

const Introduction = () => (
  <section>
    <h1>
      I have led both
      {' '}
      <strong>design</strong>
      {' '}
      &
      {' '}
      <strong>technology</strong>
      <br />
      in multiple startups, and even an agency
    </h1>

    <style jsx>{`
      section {
        padding: ${spacingExtraLarge};
        padding-top: ${spacingNone};
      }
      h1 {
        font-size: ${f1};
        font-weight: ${regular};
        margin: ${spacingNone};
      }
    `}</style>
  </section>
)

export default Introduction
