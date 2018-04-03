import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state= {
    persons: [
      {name: 'Torre', age: 27},
      {name: 'Jon', age: 22},
      {name: 'Chantal', age: 28}
    ]
   
  }
  switchNameHandler = (newName) => {
    this.setState ({
      persons:[
        {name: newName, age:28},
        {name: 'Jon', age: 22},
        {name: 'Chantal', age: 29}

      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Torre', age:28},
        {name: event.target.value, age: 22},
        {name: 'Chantal', age:29}
      ]
    })
  }

  render() {
    return (
<div className="App">
  <h1>Hi I'm A React App</h1>
  <button onClick={() => this.switchNameHandler.bind(this, 'Yahoo')}>Switch Name</button>
  <Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age}/>

  <Person 
  click={this.switchNameHandler.bind(this,'YEEE')} 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  changed={this.nameChangedHandler}>My Hobbies: Racing
  </Person>
  

  <Person 
  name={this.state.persons[2].name} 
  age={this.state.persons[2].age}
  />


</div>
      
    );
  }
}

export default App;
