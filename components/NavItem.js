import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Utils
import smoothScroll from '../utils/smoothScroll'

// Theme
import {
  spacingExtraLarge,
  spacingNone,
  spacingSmall,
  spacingExtraSmall
} from '../theme/spacing'
import { brandBlack, brandRed, brandWhite } from '../theme/colors'

export default class NavItem extends Component {
  constructor (props) {
    super(props)

    this.scrollToSection = this.scrollToSection.bind(this)
  }
  scrollToSection () {
    const sectionID = this.props.href
    const sectionEl = document.querySelector(sectionID)
    smoothScroll(sectionEl, 500)
  }

  render () {
    const { name } = this.props
    return (
      <li>
        <a onClick={this.scrollToSection}>{name}</a>

        <style jsx>{`
          li {
            margin-right: ${spacingExtraLarge};
          }
          li:last-child {
            margin-right: ${spacingNone};
          }
          a {
            cursor: pointer;
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
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}
