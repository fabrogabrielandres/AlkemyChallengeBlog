import React from 'react'
import { useSelector } from 'react-redux';
import { Form } from '../component/Form';

export const EditionScreen = () => {

    
    const datoEdit= useSelector(state => state.crudReducers.datoEdit)
    console.log(datoEdit);


    return (
        <>

        <h1>buscar</h1>
        <Form />


        </>
    );
}
