import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { loginUserAction, logOutUserAction } from './actions/actionLogin';
import { navRouter } from './Routes/navRouter';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { LoginScreen } from './Screens/LoginScreen'


export const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      dispatch(loginUserAction(token))
    }else{
      dispatch(logOutUserAction())
    }
  }, [dispatch])

  const {auth} = useSelector(state => state.loginReducers)
  console.log(auth);


  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute
            exact
            component={LoginScreen}
            path="/login"
            isAuthenticated={auth} 
          />

          <PrivateRoute
            component={navRouter}
            path="/"
            isAuthenticated={auth}
          />

          <Redirect to="/home" />

        </Switch>
      </Router>
    </div>
  )
}
