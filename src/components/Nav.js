import React from 'react'

// Components
import NavItem from './NavItem'

// Content
import navItems from '../content/navigation'

// Theme
import { largeAndUp } from '../theme/screenSizes'

const Nav = () => (
  <nav>
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
