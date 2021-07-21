
const initialState={
    datos:[]
}

export const crudReducers = (state =initialState , action) => {
    switch (action.type) {
        case 'CRUD_GET_ALL_POST':
            return { ...state, datos:action.payload }
        case "CRUD_GET_ALL_POST_FAILED":
            return {...state}
        case "CRUD_DELETE_DATO":
            return {...state, datos:state.datos.filter(dato=>dato.id!==action.payload)}
        default:
            return state
    }
}