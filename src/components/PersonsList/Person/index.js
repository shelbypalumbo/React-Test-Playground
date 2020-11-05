import React from "react";
// import styled from "styled-components";
import classes from "./style.module.css";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 15px auto;
//   border: 1px solid pink;
//   box-shadow: 0 2px 3px #cccccc;
//   padding: 15px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

//ES6 FUNCTIONAL COMPONENT SYNTAX
//Presentational / Dumb Component / Stateless Component
const Person = props => {
  console.log("Person.js, rendering...");
  return (
    <div className={classes.Person}>
      <h1 onClick={props.click}>I'm {props.name}</h1>
      <p>I'm {props.age} years old!</p>

      {/* This is how you would add dynamic online expressions for simple calculations or functions */}
      <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>

      {/* Allowing children/additional elements/components inbetween the main component opening and closing tags */}
      <p>{props.children}</p>

      {/* Value adds two way binding to allow the name state to already be available before
the handleinputchange completes */}
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};
export default Person;
