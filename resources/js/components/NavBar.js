import React, { useState, useRef } from 'react'

export default ({submitTodo}) => {
    const [addTodo, setAddTodo] = useState('')
    const inputTodo = useRef()

    const _hitEnter = (e) => {
        if(e.keyCode === 13) {
            if(!addTodo) {
                alert('No Todos')
            } else {
                handleSubmit()
            }
        }
    }

    const _handleChange = (e) => {
        setAddTodo(e.target.value)
    }

    const handleSubmit = () => {
        console.log('submitted', addTodo)
        setAddTodo('')
        inputTodo.current.value = ''
        submitTodo(addTodo)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Todo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-25" id="navbarNav">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Add Todo</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        ref={inputTodo}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder={addTodo}
                        onChange={(e) => _handleChange(e)}
                        onKeyDown={(e) => _hitEnter(e)}
                    />
                    <a href="#" className="btn btn-primary" onClick={() => handleSubmit()}>Submit</a>
                </div>
            </div>
        </nav>
    )
}

