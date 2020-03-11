import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (nextProps.persons !== this.props.persons) return true;
  //   else return false;
  //   // return true;
  // }
  render() {
    return this.props.persons.map((person, index) => {
      console.log("[Persons.js] rendering....");
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
