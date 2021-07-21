


export const loginUserAction = (token) => dispatch => {

    dispatch({ type: "USER_LOGIN_REQUEST" })
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: token })
    localStorage.setItem("token", token)

}

export const logOutUserAction = () => dispatch => {
    dispatch({ type: "USER_LOGOUT_SUCCES" })
}