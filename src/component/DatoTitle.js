
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAction } from '../actions/actionCrud'
import { ModalButton } from './ModalButton'

export const DatoTitle = ({ dato }) => {


    const dispatch = useDispatch()
    

    const  borrar =()=>dispatch(deleteAction(dato.id))
    
    return (
            <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div className="card" >
                    <div className="card-body">
                        <p className="card-title">{dato.title}</p>

                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-primary m-1" onClick={borrar}>Delete</button>
                        <ModalButton dato={dato} />

                    </div>
                </div>
            </div>
    )
}
