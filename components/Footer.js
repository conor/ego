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
    <div className='footer-container'>
      <p>© 2017 CONOR WADE. ALL RIGHTS RESERVED</p>
      <img src='/static/mark.svg' alt='Logo for Conor Wade' />
      <p>
        Currently in
        {' '}
        <a href='https://www.google.com/search?q=vancouver'>
          Vancouver, Canada
        </a>
      </p>
    </div>
    <style jsx>{`
      footer {
        animation: slide-in-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation-delay: 1.3s;
        padding: ${spacingExtraLarge} ${spacingLarge};
      }
      .footer-container {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
        max-width: 1550px;
        margin: 0 auto;
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
  </footer>
)

export default Footer
