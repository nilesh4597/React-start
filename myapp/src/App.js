
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {
      name:'jyoti',
      age:23
    },
    {
      name:'Priya',
      age:28
    },
    {
      name:'sonali',
      age:26
    },
    {
      name:'sakshi',
      age:15
    }
  ]
}

  switchNameHandler = () => {
   console.log("was clicked");

}
  render(){
  return (
    <div className="App">
    <h1>Hi I am Nilesh Looking fore explore more on react</h1>
    <button onClick={this.switchNameHandler} >Switch Name</button>
    <Person personname={this.state.person[0].name} age={this.state.person[0].age}  />
    <Person personname={this.state.person[1].name} age={this.state.person[1].age}/>
    <Person personname={this.state.person[2].name} age={this.state.person[2].age}>My Hobbies is Playing</Person>
    <Person personname={this.state.person[3].name} age={this.state.person[3].age}/>
    </div>
  );
  }
}

export default App;