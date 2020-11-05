import React, { Component } from "react";
// import "./App.css";
import classes from "./App.module.css";
// import styled from "styled-components";
import Person from "../components/PersonsList/Person";
// import ErrorBoundary from "./components/ErrorBoundary";

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

//Class components have properties.
//Properties are variables of a Class
class App extends Component {
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

  // Use handler to note that this is an event handler and not a method that you are actively calling.
  // Methods are essentially a property that holds a function
  // switchNameHandler = newName => {
  //   // console.log("Was Clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 26 },
  //       { name: "Alexander", age: 28 },
  //       { name: "Mina Albina", age: 4 },
  //       { name: "Loui Gabino", age: 5 }
  //     ]
  //   });
  // };

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
    let persons = null;
    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          <h1>Manipulating State</h1>
          {/* 'map' maps out every element in a given array into somethign else, by executing a method on every element */}
          {this.state.persons.map((person, index) => {
            return (
              //key has to be on the outer element
              // <ErrorBoundary key={person.id}>
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
              // </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClasses.push(classes.Red);

      //Set new background style on showPersons
      // style.backgroundColor = "red";
      // style.color = "blue";
      // //Using hover pseudo selector
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ["red", "bold"]
    }

    return (
      <div className={classes.App}>
        <div id="p1">
          {/* class joines both array items with a space inbetween */}
          <h1 className={assignedClasses.join(" ")}>Persons React App!</h1>

          <button
            className={btnClasses.join(" ")}
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </button>

          {/* Conditional content  */}
          {persons}

          <hr />
          <h1>Passing Props</h1>
          {/* Set component properties from the reusable components tag */}
          {/* If props change, the component will rerender and update the DOM  */}
          <Person name="Shelby" age="26" />
          <Person name="Alex" age="28" />
          <Person name="Mina" age="4">
            My hobbies: Sleeping
          </Person>
          <Person name="Loui" age="5" />
        </div>
      </div>

      //React.createElement method takes in at least 3 arguments, [the html element you want to render to DOM, configuration/js object, children/what is nested inside the main element
      //nested react element, what's going on behind the scenes
      // React.createElement(
      //   "div",
      //   { className: "App" },
      //   React.createElement("h1", null, "Does this work now")
      // )
    );
  }
}

//export entire class component
//Radium(App) = Higher order component, a componeent wrapping another component adding extra functionality/syntax
export default App;

// {/* 'This' refers to the class */}
// <Person
//   name={this.state.persons[0].name}
//   age={this.state.persons[0].age}
//   click={this.switchNameHandler.bind(this, "Shelby!!!")}
// />
// {/* This Person has an input on change method, for dynamically manipulating the value of state on input change */}
// <Person
//   name={this.state.persons[1].name}
//   age={this.state.persons[1].age}
//   changed={this.nameChangedHandler}
// >
//   <b>I can be changed!!</b>
// </Person>
// <Person
//   name={this.state.persons[2].name}
//   age={this.state.persons[2].age}
// />
// <Person
//   name={this.state.persons[3].name}
//   age={this.state.persons[3].age}
// />
