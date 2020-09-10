import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

import './global.scss'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" />
          </Switch>
          <HeroSection />
        </div>
      </Router>
    </div>
  )
}

export default App
