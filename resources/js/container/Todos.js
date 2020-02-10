import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import uuid from 'uuid/v1'

/**
 * Components
 */
import NavBar from '../components/NavBar'
import TodoItems from '../components/TodoItems/index.js'

const Todos = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
       axios.get('http://127.0.0.1:8000/api/todos')
           .then(res => setItems(res.data))
           .catch(err => console.log(err))
    }, [])

    const submitTodo = (todo) => {
        if(todo) {
            axios.post('http://127.0.0.1:8000/api/todos', {
                title: todo
            })
                .then(res => {
                    let { data } = res
                    setItems(items.concat(data))
                })
                .catch(err => console.log(err))
        } else {
            alert('No Todos input')
        }
    }

    //delete todo
    const handleDeleteTodo = (ind, id) => {
        axios.delete(`http://127.0.0.1:8000/api/todos/${id}`)
            .then(res => {
                const deleteItem = items.filter((x, index) => index !== ind)
                setItems(deleteItem)
            })
            .catch(err => console.log(err))
    }

    const handleEditTodo = (id, todo) => {
        axios.post(`http://127.0.0.1:8000/api/todos/${id}`, {
            title: todo
        })
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <NavBar submitTodo={submitTodo}/>
            <div className="container">
                {
                    items.map((x, index) => (
                        <TodoItems
                            i={index}
                            todoItem={x}
                            key={index}
                            deleteTodo={handleDeleteTodo}
                            isEditTodo={handleEditTodo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Todos

if (document.getElementById('app')) {
    ReactDOM.render(<Todos/>, document.getElementById('app'));
}
