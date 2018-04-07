import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {

  let assignedClasses = []
  if (props.persons.length<3){
    assignedClasses.push('red')
  }
  if (props.persons.length<2){
    assignedClasses.push('bold')
  }
  let btnClass=''
  if(props.showPersons){
  btnClass = classes.red
  }

  return (
  <div className={classes.Cockpit}>
    <h1>Hi I'm A React App</h1>
    <p className={assignedClasses.join(' ')}>This App is Working</p>
    <button className={btnClass} onClick={props.clicked}>Show/Hide Names</button>
  </div>
  )
}

export default Cockpit