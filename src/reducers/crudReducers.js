
const initialState={
    // el array datos me simula una base de datos , cuando yo hago la llamda a los
    // endpoints del CRUD si se concretan los borro,creo etc segun la accion correspodiente  
    datos:[],
    // dato edit lo mantengo en null , esto lo hago porque cuando entro edition scrren me va a permitir
    //saber si la informacion va a ser editada o creada segun contenga o no informacion
    datoEdit:null
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
            //una ves que lo edito tmb purgo dato edit, 
            return{ ...state, datos:state.datos.map(dato=>dato.id===action.payload.id ? action.payload : dato )}
        case "CRUD_CLEAR_DATO_EDITorCREATE":
            return{ ...state, datoEdit:null }    
        case "CRUD_CREATE_DATO_ACTION":
            return{ ...state, datos:[action.payload,...state.datos] }
        default:
            return state
    }
}