import React from 'react'
import { useSelector } from 'react-redux';
import { Form } from '../component/Form';
import { uuid } from 'uuidv4';


export const EditionScreen = () => {
    let datoInitial = useSelector(state => state.crudReducers.datoEdit)
    // en esta parte lo que hago es si viene vacio es porque hay que crear y si tiene info es porque hay que editar
    
    
    return (
        <>
            <Form datoInitial={datoInitial ? datoInitial :
                datoInitial = {
                    userId: uuid(),
                    id: "",
                    title: "",
                    body: ""
                }
            } />
        </>
    );
}
