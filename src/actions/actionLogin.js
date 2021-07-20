


export const loginUserAction = (token) => dispatch => {
    
    dispatch({ type:"USER_LOGIN_REQUEST"})
    try {
        dispatch({type:"USER_LOGIN_SUCCESS", payload:token})
        localStorage.setItem("token",JSON.stringify(token))
        
    } catch (error) {
        dispatch({type:"USER_LOGIN_FAILED"})
        console.log(error);
    }
}