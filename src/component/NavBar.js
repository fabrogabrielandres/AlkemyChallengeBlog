import React from 'react'
import { useDispatch } from 'react-redux'
import { logOutUserAction } from '../actions/actionLogin'
import {  useHistory } from "react-router-dom";
import { clearDateAction } from '../actions/actionCrud';

export const NavBar = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const home = () => {
        dispatch(clearDateAction())
        history.push("/home")
    }
    const create = () => {
        dispatch(clearDateAction())
        history.push("/create")
    }
    const cerrar = () => dispatch(logOutUserAction())



    return (

        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <button className="btn btn-primary" onClick={home}>Home</button>
                <button className="btn btn-primary" onClick={create}>Create</button>
                <button className="btn btn-primary" onClick={cerrar}>Log-Out</button>
            </div>
        </nav>
    )
}
