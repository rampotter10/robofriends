 import React,{ Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import robot from './robot';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            searchfield:''
        
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => {this.setState({robot:robot})});
        this.setState({robot:robot})
    }

    onSearchChange = (event) =>  {
        
        this.setState({searchfield: event.target.value})
      
    }

    render() {
        const filteredRobot = this.state.robot.filter(robot =>{ 
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robot.length===0) {
            return <h1>Loading</h1>
        }else {
            return (
            <div className ='tc'>
                <h1 className = 'f1'>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
            <CardList robot ={filteredRobot} />
            </Scroll>

            </div>

            );
        }
    }
}

export default App;

