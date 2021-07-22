import React from 'react'
import { useDispatch } from 'react-redux'
import { logOutUserAction } from '../actions/actionLogin'
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    const dispatch = useDispatch()
    const cerrar = () => dispatch(logOutUserAction())


    return (

        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Home</NavLink>
                <NavLink className="navbar-brand" to="/create">Create</NavLink>
                <button className="btn btn-primary" onClick={cerrar}>Log-Out</button>
            </div>
        </nav>
    )
}
