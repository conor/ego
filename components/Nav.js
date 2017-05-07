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
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation-delay: 0.4s;
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

      @keyframes slide-in-right {
        0% {
          transform: translateX(100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </nav>
)

export default Nav
