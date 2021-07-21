


const initialState={
    auth:false,
    token:null,
    loading:false,
}

export const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return{ 
                ...state,
                loading:true
             } 
        case "USER_LOGIN_SUCCESS":
            return {
                ...state, auth:true, loading:false, token:action.payload  
            }
        case "USER_LOGIN_FAILED":
            return {
                ...state, auth:false, loading:false
            }
        case "USER_LOGOUT_SUCCESS":
            return{
                initialState
            }
        default:
            return state
    }
}