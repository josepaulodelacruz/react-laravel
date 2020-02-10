import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

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

    return (
        <div>
            <NavBar submitTodo={submitTodo}/>
            <div className="container">
                {
                    items.map((x, index) => (
                        <TodoItems todoItem={x} key={index}/>
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
