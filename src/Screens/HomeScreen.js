
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DatoTitle } from '../component/DatoTitle'

export const HomeScreen = () => {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        const petitionGet = async () => {
            try {
                const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
                const data = responce.data
                setDatos(data);
            } catch (error) {
                console.log(error);
            }
        }
        petitionGet()
    }, [])

    console.log(datos);
    
    return (

        <div>
            {datos.map(dato =>
                <DatoTitle key={dato.id} title={dato.title} />
            )}

        </div >

    )
}
