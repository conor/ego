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
    <a href="/">
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
    `}</style>
  </header>
)

export default Header
