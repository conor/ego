import React from 'react'

// Components
import WorldDots from './WorldDots'

// Theme
import { brandWhite } from '../theme/colors'

const Travel = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1309 643'>
    <g fill='none' fillRule='evenodd'>
      <WorldDots />
      <g fill={brandWhite} transform='translate(144.08 190.76)'>
        <animate
          xlinkHref='#back'
          attributeName='r'
          from='6'
          to='15'
          dur='3s'
          begin='0s'
          repeatCount='indefinite'
          fill='freeze'
          id='circ-anim-radius-1'
        />
        <animate
          xlinkHref='#back'
          attributeType='CSS'
          attributeName='opacity'
          from='0.7'
          to='0'
          dur='3s'
          begin='0s'
          repeatCount='indefinite'
          fill='freeze'
          id='circ-anim-opacity-1'
        />
        <animate
          xlinkHref='#back2'
          attributeName='r'
          from='6'
          to='15'
          dur='3s'
          begin='1s'
          repeatCount='indefinite'
          fill='freeze'
          id='circ-anim-radius-2'
        />
        <animate
          xlinkHref='#back2'
          attributeType='CSS'
          attributeName='opacity'
          from='0.7'
          to='0'
          dur='3s'
          begin='1s'
          repeatCount='indefinite'
          fill='freeze'
          id='circ-anim-opacity-2'
        />
        <circle cx='435.2' cy='6.9' opacity='.8' r='4' />
        <circle
          cx='468.2'
          cy='15.9'
          opacity='.8'
          r='5'
          id='front'
          className='london'
        />
        <circle cx='468.2' cy='15.9' r='6' id='back' strokeWidth='0.333' />
        <circle cx='468.2' cy='15.9' r='6' id='back2' strokeWidth='0.333' />
        <circle cx='465.2' cy='74' opacity='.8' r='4' />
        <circle cx='204.5' cy='34.6' opacity='.8' r='4' />
        <circle cx='34.5' cy='84.3' opacity='.8' r='4' />
        <circle cx='6.9' cy='13.8' r='4' className='vancouver' />
        <circle cx='989.3' cy='63.6' opacity='.8' r='4' />
        <circle cx='884.3' cy='138.2' opacity='.8' r='4' />
        <circle cx='864' cy='183.2' opacity='.8' r='4' />
        <circle cx='837.9' cy='174.9' opacity='.8' r='4' />
        <circle cx='853.9' cy='214.3' opacity='.8' r='4' />
        <circle cx='837.9' cy='203.3' opacity='.8' r='4' />
        <circle cx='867.9' cy='251.3' opacity='.8' r='4' />
        <circle cx='232.9' cy='395.9' opacity='.8' r='4' />
        <circle cx='203.9' cy='400.9' opacity='.8' r='4' />
        <circle cx='213.9' cy='349.9' opacity='.8' r='4' />
        <circle cx='243.9' cy='341.9' opacity='.8' r='4' />
        <circle cx='219.9' cy='196.9' opacity='.8' r='4' />
      </g>
    </g>
  </svg>
)

export default Travel
