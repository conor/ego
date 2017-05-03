import React from 'react'

// Theme
import {
  spacingExtraLarge,
  spacingNone,
  spacingSmall,
  spacingExtraSmall
} from '../theme/spacing'
import { brandBlack, brandRed, brandWhite } from '../theme/colors'

const NavItem = ({ name, href }) => (
  <li>
    {/* This is a hack for react-snapshot */}
    <a data-href={href}>{name}</a>

    <style jsx>{`
      li {
        margin-right: ${spacingExtraLarge};
      }
      li:last-child {
        margin-right: ${spacingNone};
      }
      a {
        color: ${brandBlack};
        font-weight: 700;
        font-size: 1.25rem;
        text-decoration: none;
        position: relative;
      }
      a::after {
        content: '';
        background: ${brandWhite};
        width: ${spacingSmall};
        height: ${spacingSmall};
        border-radius: ${spacingSmall};
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -${spacingExtraSmall};
        transition: background 0.3s ease-in;
      }
      a.active::after,
      a:hover::after {
        background: ${brandRed};
      }
    `}</style>
  </li>
)

export default NavItem
