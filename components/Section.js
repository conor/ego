import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { spacingLarge, spacingExtraLarge } from '../theme/spacing'
import { mediumAndUp, largeAndUp } from '../theme/screenSizes'
import { f2, f3 } from '../theme/typography'
import { brandWhite, brandRed } from '../theme/colors'

const capitalize = str => {
  if (typeof str === 'undefined') return

  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const Section = ({ name, color, children, animationDelay }) => {
  return (
    <section id={name} className={color} style={{ animationDelay }}>
      <div className='max-width-container'>
        <h1 className='title'>{capitalize(name)}</h1>
        {children}
      </div>

      <style jsx>{`
        section {
          padding: ${spacingLarge};
          animation: slide-in-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        .max-width-container {
          max-width: 1550px;
          margin: 0 auto;
        }
        section.red {
          background: ${brandRed};
        }
        .title {
          margin: 0 0 ${spacingLarge} 0;
          font-size: ${f3};
        }
        .red .title {
          color: ${brandWhite};
        }
        @media ${mediumAndUp} {
          section:after {
            content: "";
            display: table;
            clear: both;
          }
        }
        @media ${largeAndUp} {
          .title {
            margin: 0 0 ${spacingExtraLarge} 0;
            font-size: ${f2};
          }
          section {
            padding: ${spacingExtraLarge};
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
    </section>
  )
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  animationDelay: PropTypes.string.isRequired
}

export default Section
