import React from 'react'

// Components
import Logo from './Logo'
import Nav from './Nav'

// Theme
import {
  spacingLarge,
  spacingExtraLarge,
  spacingExtraExtraLarge,
  spacingExtraExtraExtraLarge
} from '../theme/spacing'
import { largeAndUp } from '../theme/screenSizes'

const Header = () => (
  <header>
    <a href='/'>
      <Logo />
    </a>

    <Nav />

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        padding: ${spacingLarge};
        padding-bottom: ${spacingExtraExtraLarge};
      }

      a {
        display: block;
        width: 50%;
        max-width: 9.6875rem;
        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation-delay: 0.5s;
      }

      @media ${largeAndUp} {
        a {
          max-width: 12.125rem;
        }

        header {
          padding: ${spacingExtraLarge};
          padding-bottom: ${spacingExtraExtraExtraLarge};
        }
      }

      @keyframes slide-in-left {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </header>
)

export default Header
