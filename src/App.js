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
    ],
    otherState: 'someOtherValue',
    showPersons: false
   
  }
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
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

  togglePersonHandler = (event) => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
  }


  render() {

  let persons = null

  if (this.state.showPersons){
      persons = (
<div> {this.state.persons.map((person,index) => {
      return <Person 
      name={person.name} 
      age={person.age} 
      click={() => this.deletePersonHandler(index)}/>
      })
    }

     </div>
    )
  }
      
    return (
<div className="App">
 
    <h1>Hi I'm A React App</h1>
    <button onClick={this.togglePersonHandler}>Switch Name</button>
    {persons}
</div>

      
    );
  }
}

export default App;
