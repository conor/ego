import React from 'react'

// Components
import NavItem from './NavItem'

// Content
import navItems from '../content/navigation'

// Theme
import { largeAndUp } from '../theme/screenSizes'

const Nav = () => (
  <nav
    data-aos='zoom-out-down'
    data-aos-once='true'
    data-aos-delay='300'
    data-aos-easing='ease-in-sine'
  >
    <ul>
      {navItems.map((item, idx) => <NavItem key={idx} {...item} />)}
    </ul>

    <style jsx>{`
      nav {
        display: none;
      }
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
      }

      @media ${largeAndUp} {
        nav {
          display: block;
        }
      }
    `}</style>
  </nav>
)

export default Nav
