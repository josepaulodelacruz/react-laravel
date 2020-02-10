import React, { useState, useRef, useEffect } from 'react'
import './index.scss'

export default ({todoItem, i, deleteTodo, isEditTodo}) => {
    const [edit, setEdit] = useState(false)
    const [todo, setTodo] = useState('')
    const editTodo = useRef()

    const handleInput = (e) => {
        setTodo(e.target.value)
    }

    const _handleEdit = (id) => {
        setEdit(true)
    }

    const handleDelete = (ind, id) => {
        deleteTodo(ind, id)
    }

    const onSubmit = (id, todo) => {
        isEditTodo(id, todo)
        setEdit(false)
    }



    return (
        <div className="card todo-item-container">
           <div className="card-body">
               {
                   edit ?
                       <input
                           type="text"
                           className="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           ref={editTodo}
                           placeholder={todoItem.title}
                           onChange={(e) => handleInput(e)}
                       /> : <h1 className="card-text">{todoItem.title}</h1>
               }


               <div className="d-flex justify-content-end">
                   {
                       edit ?
                       <a href="#" className="btn btn-primary m-1" onClick={() => onSubmit(todoItem.id, todo)}>
                           <strong>Submit</strong>
                       </a> :
                       <a href="#" onClick={() => _handleEdit()} className="btn btn-warning m-1">
                           <strong>Edit</strong>
                       </a>
                   }

                   <a href="#" onClick={() => handleDelete(i, todoItem.id)} className={edit ? "btn btn-danger disabled m-1" : "btn btn-danger m-1"}>
                       <strong>Delete</strong>
                   </a>
               </div>

           </div>
        </div>
    )
}
