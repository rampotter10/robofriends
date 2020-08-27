import React,{ Component } from 'react';
import CardList from './CardList';
import {robot} from './robot.js';
import SearchBox from './SearchBox';

import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: robot,
            searchfield:''
        
        }
    }

    onSearchChange = (event) =>  {
        
        this.setState({searchfield: event.target.value})
      
    }

    render() {
        const filteredRobot = this.state.robot.filter(robot =>{ 
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
     return (
        <div className ='tc'>
            <h1 className = 'f1'>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
        <CardList robot ={filteredRobot} />
        </div>

          );
     }
    }
export default App;

