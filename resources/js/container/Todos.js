import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/**
 * Components
 */
import NavBar from '../components/NavBar'
import TodoItems from '../components/TodoItems/index.js'

class Todos extends Component {
    render(){
        return (
            <div>
                <NavBar/>

                <div className="container">
                    <TodoItems/>
                </div>
            </div>
        )
    }
}

export default Todos

if (document.getElementById('app')) {
    ReactDOM.render(<Todos/>, document.getElementById('app'));
}
