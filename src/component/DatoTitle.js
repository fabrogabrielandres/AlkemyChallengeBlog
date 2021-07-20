import React from 'react'
import { ModalButton } from './ModalButton'

export const DatoTitle = ({ title }) => {


    
    return (

        <div className="col-12 col-md-6 col-lg-4 mt-3">
            <div className="card" >
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <a href="!#" className="btn btn-primary m-1">
                        Details</a>
                    <a href="!#" className="btn btn-primary m-1">
                        Delete
                    </a>
                    <a href="!#" className="btn btn-primary m-1">Edit</a>
                    <ModalButton/>

                </div>
            </div>
        </div>
    )
}
