import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

/**
 * Components
 */
import NavBar from '../components/NavBar'
import TodoItems from '../components/TodoItems/index.js'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount () {
        axios.get(`http://127.0.0.1:8000/api/todos`)
            .then((res) => {
                this.setState({items: res.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render(){
        const { items } = this.state
        return (
            <div>
                <NavBar/>
                <div className="container">
                    {
                       items.map((x, index) => (
                           <TodoItems key={index} todoItem={x}/>
                       ))
                    }
                </div>
            </div>
        )
    }
}

export default Todos

if (document.getElementById('app')) {
    ReactDOM.render(<Todos/>, document.getElementById('app'));
}
