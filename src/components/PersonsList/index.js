import React from "react";
import Person from "./Person";

const PersonsList = props => {
  console.log("PersonsList.js, rendering...");
  return props.persons.map((person, index) => {
    return (
      //key has to be on the outer element
      // <ErrorBoundary key={person.id}>
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      />
      // </ErrorBoundary>
    );
  });
};

export default PersonsList;
