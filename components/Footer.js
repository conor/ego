import React from "react";

// Theme
import {
  spacingLarge,
  spacingExtraLarge,
  spacingExtraExtraLarge,
} from "../theme/spacing";
import { f6, bold } from "../theme/typography";
import { brandBlue, brandWhite } from "../theme/colors";
import { largeAndUp } from "../theme/screenSizes";

const Footer = () => (
  <footer
    data-aos="zoom-out-up"
    data-aos-once="true"
    data-aos-delay="200"
    data-aos-easing="ease-in-sine"
  >
    <div className="footer-container">
      <p>© {new Date().getFullYear()} CONOR WADE. ALL RIGHTS RESERVED.</p>
      <img src="/static/mark.svg" alt="Logo for Conor Wade" />
      <p>
        Currently in{" "}
        <a href="https://www.google.com/search?q=london">London, England</a>
      </p>
    </div>
    <style jsx>{`
      footer {
        margin: ${spacingExtraLarge} ${spacingLarge};
      }
      .footer-container {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
        max-width: 1550px;
        margin: 0 auto;
      }
      p {
        flex-basis: 100%;
        font-size: ${f6};
        font-weight: ${bold};
        text-transform: uppercase;
      }
      img {
        flex-basis: 64px;
        max-width: 64px;
        margin: 0 auto;
      }
      a {
        color: ${brandBlue};
        text-decoration: none;
        border-bottom: 2px solid ${brandBlue};
        margin: 0 2px;
        transition: border-bottom-color 0.3s ease-in;
      }
      a:hover {
        border-bottom-color: ${brandWhite};
      }
      @media ${largeAndUp} {
        footer {
          padding: ${spacingExtraExtraLarge} ${spacingExtraLarge};
        }
        p,
        img {
          flex-basis: auto;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
