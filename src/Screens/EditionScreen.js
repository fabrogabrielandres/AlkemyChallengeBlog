import React from 'react'
import { useSelector } from 'react-redux';
import { Form } from '../component/Form';


export const EditionScreen = () => {


    const datoInitial = useSelector(state => state.crudReducers.datoEdit)
    console.log("editionscreen");
    console.log(datoInitial);
    console.log("editionscreen");

    return (
        <>
            <Form datoInitial={datoInitial}/>
       </>
    );
}
