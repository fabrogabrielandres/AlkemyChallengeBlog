import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { LoginScreen } from './Screens/LoginScreen'

export const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/login" component={LoginScreen} />
        <Redirect to="/login" />
      </Router>
    </div>
  )
}
