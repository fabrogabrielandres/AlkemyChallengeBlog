
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatoTitle } from '../component/DatoTitle'


export const HomeScreen = () => {

    const dispatch = useDispatch()
    
    const datos = useSelector(state => state.crudReducers.datos)

    return (

        <div className="mt-4 row">
            {datos.map(dato =>
                <DatoTitle key={dato.id} dato={dato} />
            )}

        </div >

    )
}
