import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editDatoAction } from '../actions/actionCrud';
import { useHistory } from 'react-router-dom';

export const Form = ({ datoInitial }) => {

const dispatch = useDispatch()

const history=useHistory()

    const formik = useFormik({
        initialValues: {
            id: datoInitial.id,
            title: datoInitial.title,
            userId: datoInitial.userId,
        },
        onSubmit: values => {
            dispatch(editDatoAction(values))
            history.push("/home")
        },
    });


    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Datos
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
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
