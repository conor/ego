import React from 'react'

// Components
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Work from '../components/Work'
import About from '../components/About'
import Section from '../components/Section'
import Travel from '../components/Travel'
import Footer from '../components/Footer'

// Theme

const Index = () => (
  <div className='app'>
    <Header />
    <Introduction />
    <Section name='work' color='red' animationDelay='0.5s'>
      <Work />
    </Section>
    <Section name='about' color='white' animationDelay='0.7s'>
      <About />
    </Section>
    <Section name='travels' color='red' animationDelay='0.9s'>
      <Travel />
    </Section>
    <Footer />
  </div>
)

export default Index
