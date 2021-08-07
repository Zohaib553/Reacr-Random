import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id : "a" ,name:"Zohaib",age: "19"},
      {id : "b" ,name:"Saeed",age: "18"},
      {id : "c" ,name:"Ahmad",age: "20"}
    ],
    showPersons : false
  }
  
    nameChangeHandler = (event,id)=>{
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        });

    const  person = [...this.state.persons]    
    person[personIndex].name = event.target.value;
    this.setState({
      persons : person
    })
      
    }

  toggleNameHandler = ()=>{
    const togglePersons = this.state.showPersons;
    this.setState({showPersons:!togglePersons})
  }

  deletePerson = (personIndex)=>{
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({persons : person})
  }

  render(){
    const style = {
      backgroundColor : "green",
      padding : "3px 7px",
      border : "2px solid purple",
      cursor : "pointer",
    }
    const classes = [];
    if(this.state.persons.length >=2){
      classes.push("red","bold");
    }

    if(this.state.persons.length <2){
      classes.push("red");
    }
    
    let persons = null;
    if(this.state.showPersons){
    persons = this.state.persons.map((person,index) =>{
      return (
        <Person 
        click = {()=>this.deletePerson(index)}
        name = {person.name} 
        age = {person.age}
        key = {index}
        changed = {(event)=>this.nameChangeHandler(event,person.id)}/>
      )
      })
        style.backgroundColor = "red";
    }
      return (
        <div className="App">
          <h1>React Crash Course ' Dude</h1>
          <p className={classes.join(' ')}>I know that react is working.</p>
          <button style={style}
          onClick={this.toggleNameHandler}>Toggle Name</button>
          {persons}
        </div>
      );
      // return( React.createElement('div',{className:'App'},React.createElement('h1',null,'It will work now!!!')));
  }
  }

export default App;


