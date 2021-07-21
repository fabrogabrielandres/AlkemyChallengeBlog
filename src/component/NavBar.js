import React from 'react'
import { useDispatch } from 'react-redux'
import { logOutUserAction } from '../actions/actionLogin'


export const NavBar = () => {

    const dispatch = useDispatch()
    const cerrar = () => dispatch(logOutUserAction())
    

    return (

        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/home">Home</a>
                <a className="navbar-brand" href="/edition">Form-Edition</a>
                <button className="btn btn-primary" onClick={cerrar}>Log-Out</button>
            </div>
        </nav>
    )
}
