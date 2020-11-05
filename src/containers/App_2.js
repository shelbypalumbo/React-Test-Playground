import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";

//ES6 FUNCTIONAL COMPONENET SYNTAX = STATEFUL / SMART COMPONENTS
//Functional components can manage state and can have other functions that manage state on events within them
const App2 = props => {
  //useState allows you to manage state in a functional component

  //use State returns an array with exactly two elements and always two eleements
  //the first element is always the current state object,
  //second will always be a function that allows you to update state
  //and react is aware of it to update and rerender the component
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Shelby", age: 26 },
      { name: "Alex", age: 28 },
      { name: "Mina", age: 4 },
      { name: "Loui", age: 5 }
    ]
    // otherState: "some other content"
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other content"
  });

  // Use handler to note that this is an event handler and not a method that you are actively calling.
  // Functions within a functional component are essentially a properties that holds a function
  const switchNameHandler = () => {
    // console.log("Was Clicked");
    setPersonsState({
      persons: [
        { name: "Belby", age: 26 },
        { name: "Alexander", age: 28 },
        { name: "Mina Albina", age: 4 },
        { name: "Loui Gabino", age: 5 }
      ]
      // setPersonsState will replace old state completely and remove the otherState prop, unless you copy in the original 'otherState'
      // otherState: personsState.otherState
      // to avoid having to do this, you should create multiple useState cases
    });
  };

  return (
    <div className="App">
      <div id="p1">
        <h1>Persons React App!</h1>
        <h1>Manipulating State</h1>
        <button onClick={switchNameHandler}>Switch Name</button>

        {/* This refers to the class */}
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
        <Person
          name={personsState.persons[3].name}
          age={personsState.persons[3].age}
        />

        <hr />
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
};

//export entire class component
export default App2;
