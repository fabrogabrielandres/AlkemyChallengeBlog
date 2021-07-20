import React from 'react'
import axios from "axios"
import { useFormik } from 'formik'
import { initialValues, validationSchema } from '../helpers/HelperLoginSchema'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../actions/actionLogin'



export const LoginScreen = () => {

    const dispatch = useDispatch()

    const onSubmit =async values => {
        const resp = await  axios.post("http://challenge-react.alkemy.org/",values)
        const {token}=resp.data
        dispatch(loginUserAction(token))
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom">
                            <h2 className="p-3">Login</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Username/Email</label>
                                    <input className="form-control"
                                        type='text'
                                        id='email'
                                        name='email'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='error'>{formik.errors.email}</div>
                                ) : null}
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input className="form-control"
                                        type='text'
                                        id='password'
                                        name='password'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='error'>{formik.errors.password}</div>
                                ) : null}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary text-light main-bg">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
