import React, { Component } from "react";
import classes from "./App.module.css";
import PersonsList from "../components/PersonsList";
import Cockpit from "../components/Cockpit";

//Class components have properties.
//Properties are variables of a Class
class App extends Component {
  //recevied props
  constructor(props) {
    //Super executes the constructor of the component you are extending
    //to make sure everything gets initialized correctly
    super(props);
    console.log("App.js, constructor");
  }

  //static method
  static getDerivedStateFromProps(props, state) {
    console.log("App.js, getDerivedStateFromProps");
    return state;
  }

  componentWillMount() {
    console.log("App.js, componentWillMount");
  }
  componentDidMount() {
    console.log("App.js, componentDidMount");
  }

  // State simply is a property of the Component Class
  // Where props are set and passed from outside, into the component,
  // State is managed from inside the component
  // If state changes it will rerender the component / update the DOM
  state = {
    persons: [
      { id: "podnfksdf", name: "Shelby", age: 26 },
      { id: "ksdnewedf", name: "Alex", age: 28 },
      { id: "kwewrksdf", name: "Mina", age: 4 },
      { id: "qwffeef", name: "Loui", age: 5 }
    ],
    otherState: "some other content",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    //index of the person if the id matches the input
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //fetch the person from the above index
    //does not manipulate the original object
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //Get access to all person in the state; a copy by using spread operator
    //Spread operator spreads out the elements in this array into a list of
    //elements and added to the new array
    const persons = [...this.state.persons];
    //Removes one item of the array
    persons.splice(personIndex, 1);
    //Create a new version of this array
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //sets state to the opposite value of doesShow
    this.setState({ showPersons: !doesShow });
  };

  //renders jsx code to the DOM, checks for changes, then renders to the screen
  render() {
    console.log("App.js, render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <PersonsList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          //title set in index.js file
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {/* Conditional content  */}
        {persons}
      </div>
    );
  }
}

//export entire class component
export default App;
