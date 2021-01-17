
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
  persons: [
    {name:'jyoti',age:23},
    { name:'Priya', age:28}, 
    { name:'sonali', age:26 },
    { name:'sakshi', age:15 }
  ],
  otherstate: 'some other value'
}

  switchNameHandler = () => {
  //  console.log("was clicked");
  //Dont do this becuse Do not mutate state directly. Use setState()  this.state.persons[0].name="Nilesh";
  // this.state.persons[1].name="Jijaba";
  // this.state.persons[3].name=" Abhay";
  // this.state.persons[2].name="Rugved";
  // this.state.persons[0].age=23;
  // this.state.persons[1].age=30;
  // this.state.persons[2].age=2;
  // this.state.persons[3].age=13;
  this.setState({
    persons: [
   { name:"Nilesh", age:23},
   { name:"Jijaba", age:30},
   { name:"Abhay", age:13},
   { name:"Rugved", age:2},
  ]})
}
  render(){
  return (
    <div className="App">
    <h1>Hi I am Nilesh Looking fore explore more on react</h1>
    <button onClick={this.switchNameHandler} >Switch Name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies is Playing</Person>
    <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
    </div>
  );
  }
}

export default App;
