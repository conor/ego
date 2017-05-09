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
    <div className='max-width-container'>
      <a
        href='/'
        data-aos='zoom-out-down'
        data-aos-delay='100'
        data-aos-once='true'
        data-aos-easing='ease-in-sine'
      >
        <Logo />
      </a>

      <Nav />
    </div>

    <style jsx>{`
      header {
        padding: ${spacingLarge};
        padding-bottom: ${spacingExtraExtraLarge};
      }
      .max-width-container {
        max-width: 1550px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
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
