
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteAction, selecDatoAction } from '../actions/actionCrud'
import { ModalButton } from './ModalButton'

export const CardDatos = ({ dato }) => {
    
    
    const dispatch = useDispatch()
    const history=useHistory()

    const  borrar =()=>dispatch(deleteAction(dato.id))
    const editar=(dato)=>{ 
        history.push(`/edition/${dato.id}`)
        dispatch(selecDatoAction(dato))
     } 
    
    return (
            <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div className="card" >
                    <div className="card-body">
                        <p className="card-title">{dato.title}</p>

                        <button className="btn btn-secondary m-1" onClick={()=>editar(dato)}>Edit</button>
                        <button className="btn btn-danger m-1" onClick={borrar}>Delete</button>
                        <ModalButton dato={dato} />

                    </div>
                </div>
            </div>
    )
}
