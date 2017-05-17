import React from 'react'

// Components
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Work from '../components/Work'
import About from '../components/About'
import Section from '../components/Section'
import Travel from '../components/Travel'
import Footer from '../components/Footer'

// Google Analytics
import GA from '../utils/ga'
GA() // Initialize it

const Index = () => (
  <div className='app'>
    <Header />
    <Introduction />
    <Section name='work' color='red' animationDelay='700'>
      <Work />
    </Section>
    <Section name='about' color='white' animationDelay='200'>
      <About />
    </Section>
    <Section name='travels' color='red' animationDelay='200'>
      <Travel />
    </Section>
    <Footer />

    <style jsx>{`
      .app {
        overflow: hidden;
      }
    `}</style>
  </div>
)

export default Index
