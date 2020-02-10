import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

/**
 * Components
 */
import NavBar from '../components/NavBar'
import TodoItems from '../components/TodoItems/index.js'

const url = 'https:///127.0.0.1:8000'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount () {
        axios.get(`${url}/api/todos`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


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
