import {Component} from 'react';

class Lifecycle extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            age: 0
        }
    }

    componentDidMount(){
        console.log('componentDidMount invoked')
        this.setState({
            username: 'Matt',
            age: 28
        })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate invoked')
    }

    //render is the lifecycle method that invokes upon mounting and updating
    render(){
        console.log('render invoked')
        return (
            <section>{this.state.username}: {this.state.age}</section>
        )
    }
}

export default Lifecycle;