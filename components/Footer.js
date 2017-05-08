import React from 'react'

// Theme
import {
  spacingLarge,
  spacingExtraLarge,
  spacingExtraExtraLarge
} from '../theme/spacing'
import { f6, bold } from '../theme/typography'
import { brandBlue, brandWhite } from '../theme/colors'
import { largeAndUp } from '../theme/screenSizes'

const Footer = () => (
  <footer>
    <p>© 2017 CONOR WADE. ALL RIGHTS RESERVED</p>
    <img src='/static/mark.svg' alt='Logo for Conor Wade' />
    <p>
      Currently in
      {' '}
      <a href='https://www.google.com/search?q=vancouver'>Vancouver, Canada</a>
    </p>
    <style jsx>{`
      footer {
        padding: ${spacingExtraLarge} ${spacingLarge};
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
      }
      p {
        flex-basis: 100%;
        font-size: ${f6};
        font-weight: ${bold};
        text-transform: uppercase;
      }
      img {
        flex-basis: 100%;
      }
      a {
        color: ${brandBlue};
        text-decoration: none;
        border-bottom: 2px solid ${brandBlue};
        margin: 0 2px;
        transition: border-bottom-color 0.3s ease-in;
      }
      a:hover {
        border-bottom-color: ${brandWhite};
      }
      @media ${largeAndUp} {
        footer {
          padding: ${spacingExtraExtraLarge} ${spacingExtraLarge};
        }
        p, img {
          flex-basis: auto;
        }
      }
    `}</style>
  </footer>
)

export default Footer
