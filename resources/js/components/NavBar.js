import React from 'react'

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Todo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav justify-content-around">
                    <li className="nav-item active">
                        <a className="nav-link btn btn-primary" href="#">Add Todo <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-warning" href="#">Edit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-danger" href="#">Delete</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

