
const initialState={
    datos:[],
    datoEdit:{}
}

export const crudReducers = (state =initialState , action) => {
    switch (action.type) {
        case 'CRUD_GET_ALL_POST':
            return { ...state, datos:action.payload }
        case "CRUD_GET_ALL_POST_FAILED":
            return {...state}
        case "CRUD_DELETE_DATO":
            return {...state, datos:state.datos.filter(dato=>dato.id!==action.payload)}
        case "CRUD_SELECT_DATO":
            return {...state, datoEdit:action.payload}
        case "CRUD_EDIT_ACTION":
            return{ ...state, datos:state.datos.filter(dato=>dato.id===action.payload.id ? dato : action.payload ),datoEdit:{} }
            // return{ ...state, datos:state.datos.filter(dato=>dato.id===action.payload.id ? action.payload : dato) }
        default:
            return state
    }
}