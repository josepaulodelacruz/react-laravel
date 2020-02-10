import React, { useState, useRef, useEffect } from 'react'
import './index.scss'

export default ({todoItem}) => {
    const [edit, setEdit] = useState(false)
    const [todo, setTodo] = useState('Sample Todos')
    const editTodo = useRef()

    const handleInput = (e) => {
        setTodo(e.target.value)
    }

    const _handleEdit = () => {
        setEdit(true)
    }

    const handleDelete = () => {
        console.log('Delete')
    }

    const hitEnter = (event) => {
        return event.keyCode === 13 ? onSubmit() : null
    }

    const onSubmit = () => {
        console.log('Submitted')
        setEdit(false)
    }

    console.log(todoItem)


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
                           onKeyDown={(e) => hitEnter(e)}
                       /> : <h1 className="card-text">{todoItem.title}</h1>
               }


               <div className="d-flex justify-content-end">
                   {
                       edit ?
                       <a href="#" className="btn btn-primary m-1" onClick={() => onSubmit()}>
                           <strong>Submit</strong>
                       </a> :
                       <a href="#" onClick={() => _handleEdit()} className="btn btn-warning m-1">
                           <strong>Edit</strong>
                       </a>
                   }

                   <a href="#" onClick={() => handleDelete()} className={edit ? "btn btn-danger disabled m-1" : "btn btn-danger m-1"}>
                       <strong>Delete</strong>
                   </a>
               </div>

           </div>
        </div>
    )
}
