import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { loginUserAction } from './actions/actionLogin';
import { navRouter } from './Routes/navRouter';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { LoginScreen } from './Screens/LoginScreen'


export const App = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  if (token) {
    dispatch(loginUserAction(token))
  }
  const auth = useSelector(state => state.loginReducers.auth)


  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={auth}
          />
          <PrivateRoute
            path="/"
            component={navRouter}
            isAuthenticated={auth}
          />
        </Switch>
      </div>
    </Router>
  )
}
