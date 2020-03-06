import React, { useState } from "react";
import "./styles.css";
import Person from "./Person/Person";



const app =  props => {
    const [PersonsSate, setPersonsState] =  useState(
      {persons: [
        { name: "Ahmed", age: "24" },
        { name: "Shaik", age: "25" },
        { name: "Mudassir", age: "23" }
      ]}
    );
const [Otherdata, setOtherData] = useState(
  "other state data"
);
console.log({PersonsSate},{Otherdata});
    const switchNameHandler = () => {
      //console.log("clicked!")
      setPersonsState({
        persons: [
          { name: "Ahmed", age: "24" },
          { name: "Shaik", age: "25" },
          { name: "Mudassir Ahmed", age: "23" }
        ]
      });
    };

    return (
      <div className="App">
        <h1>This is React!!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={PersonsSate.persons[0].name}
          age={PersonsSate.persons[0].age}
        />
        <Person
          name={PersonsSate.persons[1].name}
          age={PersonsSate.persons[1].age}
        >
          My Hobbies: Movies
        </Person>
        <Person
          name={PersonsSate.persons[2].name}
          age={PersonsSate.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   {className: 'App'},
    //   React.createElement("h1", null, "Hello World")
    // );
  
}

export default app;




