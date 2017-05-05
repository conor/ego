import React, { Component } from 'react'

// Components
import Header from './components/Header'
import Introduction from './components/Introduction'
import Work from './components/Work'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Introduction />
        <Work />
        <About />
      </div>
    )
  }
}

export default App
