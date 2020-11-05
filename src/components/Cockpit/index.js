import React from "react";
import classes from "./style.module.css";

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = ["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      {/* class joines both array items with a space inbetween */}
      <h1 className={assignedClasses.join(" ")}>{props.title}</h1>

      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
