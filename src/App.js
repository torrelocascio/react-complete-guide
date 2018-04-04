import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state= {
    persons: [
      {id: '1', name: 'Torre', age: 27},
      {id: '2', name: 'Jon', age: 22},
      {id: '3', name: 'Chantal', age: 28}
    ],
    otherState: 'someOtherValue',
    showPersons: false
   
  }
deletePersonHandler = (personIndex) => {2
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person= {...this.state.persons[personIndex]}

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person
    
    this.setState({
      persons: persons
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
      key={person.id}
      changed={ (event) => this.nameChangedHandler(event, person.id)}
      click={() => this.deletePersonHandler(index)}/>
      })
    }

     </div>
    )
  }
      
    return (
<div className="App">
 
    <h1>Hi I'm A React App</h1>
    <button onClick={this.togglePersonHandler}>Show/Hide Names</button>
    {persons}
</div>

      
    );
  }
}

export default App;
