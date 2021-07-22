import React from 'react'
import { useFormik } from 'formik';

export const Form = ({ datoInitial }) => {



    const formik = useFormik({
        initialValues: {
            id: datoInitial.id,
            title: datoInitial.title,
            userId: datoInitial.userId,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                            <div className="form-group">
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
