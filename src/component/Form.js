import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { clearDateAction, createDatoAction, editDatoAction } from '../actions/actionCrud';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export const Form = ({ datoInitial }) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const { pathname } = location
    const history = useHistory()

    const initialValues = {
        id: datoInitial.id,
        title: datoInitial.title,
        userId: datoInitial.userId,
        body: datoInitial.body
    }

    
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            if(pathname==="/create"){
                dispatch(createDatoAction(values))
                dispatch(clearDateAction())
                history.push("/home")
            }else
            {
                dispatch(editDatoAction(values))
                dispatch(clearDateAction())
                history.push("/home")
                      
            }
        }
    });



    




    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            {(pathname !== "/create") ? "Edit Dats" : "Create Form"}
                        </h2>
                        <form onSubmit={formik.handleSubmit} >
                            <div className="form-group mb-3 ">
                                <label>Title</label>

                                <input
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                />

                                <label>Body</label>
                                <input
                                    className="form-control"
                                    id="body"
                                    name="body"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.body}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >{(pathname !== "/create") ? "Save changes" : "Create"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
