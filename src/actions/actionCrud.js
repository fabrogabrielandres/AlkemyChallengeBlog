import axios from "axios";

export const getAllPostAction = () => async dispatch => {

    try {
        const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const data = responce.data
        dispatch({ type: "CRUD_GET_ALL_POST", payload: data })
    } catch (error) {
        dispatch({ type: "CRUD_GET_ALL_POST_FAILED" })
        console.log(error);
    }
}

export const deleteAction = (id) => async dispatch => {
    try {
        const responce = await axios.delete(`https://jsonplaceholder.typicode.com/posts/:${id}`)
        console.log(responce);
        dispatch({ type: "CRUD_DELETE_DATO", payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const selecDatoAction = (dato) => dispatch => {
    dispatch({ type: "CRUD_SELECT_DATO", payload: dato })
}

export const editDatoAction = (dato) => async dispatch => {
    try {
        const responce = await axios.patch(`https://jsonplaceholder.typicode.com/posts/:${dato.id},${dato}`)
        console.log(responce);
        dispatch({ type: "CRUD_EDIT_ACTION", payload: dato })
        
    } catch (error) {
        console.log(error);
    }
}

export const clearDateAction = () => dispatch => {
    dispatch({type:"CRUD_CLEAR_DATO_EDITorCREATE"})
}

export const createDatoAction = (dato) =>async dispatch => {
    try {
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts",dato)
        console.log(responce);
        dispatch({ type: "CRUD_CREATE_DATO_ACTION", payload: dato })
    } catch (error) {
        console.log(error);
    }
}