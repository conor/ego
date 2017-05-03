import React, { Component } from 'react'

// Components
import Header from './components/Header'
import Introduction from './components/Introduction'
import Work from './components/Work'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Work />
      </div>
    )
  }
}

export default App
