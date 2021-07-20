import React from 'react'

export const LoginScreen = () => {
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom">
                            <h2 className="p-3">Login</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="username" className="form-label">Username/Email</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
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
