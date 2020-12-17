//Two objects that work with data in components
// 1. State Object, which contains data the component is creating itself
// 2. Props Object, which contains data recieved from other components

import {Component} from 'react';
import ListDisplay from './ListDisplay';

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: 0,
            hobbies: []
        }
        //this.happyBirthday = this.happyBirthday.bind(this)
    }

    componentDidMount(){
        this.setState({
            name: 'Matt',
            age: 28,
            hobbies: ['Coding', 'Drumming', 'Sports']
        })
    }

    happyBirthday = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render(){
        // console.log(this.props)
        return (
            <section>
                <h1>{this.props.greeting}, {this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.happyBirthday}>Happy Birthday!</button>
                <h1>Hobbies</h1>
                <ListDisplay birthdayFn={this.happyBirthday}/>
                {/* <ListDisplay hobby={this.state.hobbies[0]}/> */}
                {this.state.hobbies.map((element, i) => <ListDisplay key={i} hobby={element}/>)}
            </section>
        )
    }
}

export default ClassComponent;