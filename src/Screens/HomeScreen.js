
import React  from 'react'
import { useSelector } from 'react-redux'
import { CardDatos } from '../component/CardDatos'

export const HomeScreen = () => {
    
    
    const datos = useSelector(state => state.crudReducers.datos)
    return (
        <div className="mt-4 row">
            {datos.map(dato =>
                <CardDatos key={dato.id} dato={dato} />
            )}
        </div >
    )
}
