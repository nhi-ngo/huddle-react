import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import Footer from './components/Footer/Footer'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
