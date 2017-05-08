import React from 'react'

// Theme
import { spacingLarge, spacingExtraLarge } from '../theme/spacing'
import { mediumAndUp, largeAndUp } from '../theme/screenSizes'
import { f2, f3 } from '../theme/typography'
import { brandWhite, brandRed } from '../theme/colors'

// Monkeypatch String
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const Section = ({ name, color, children, animationDelay }) => {
  return (
    <section id={name} className={color} style={{ animationDelay }}>
      <h1 className='title'>{name.capitalize()}</h1>
      {children}

      <style jsx>{`
        section {
          padding: ${spacingLarge};
          animation: slide-in-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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

export default Section
