import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

/*export default function App(){
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Shaik", age: "25" },
      { id: 2, name: "Ahmed", age: "24" },
      { id: 3, name: "Mudassir", age: "23" }
    ],
    otherdata: "Other data",
    showPersons: false
  };

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>p.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const currentToggleStatus = this.state.showPersons;
    this.setState({ showPersons: !currentToggleStatus });
  };

  deletePersonHandler = Index => {
    const persons = [...this.state.persons];
    persons.splice(Index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColour: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };

    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event,person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is React!!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsList}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   {className: 'App'},
    //   React.createElement("h1", null, "Hello World")
    // );
  }
}

export default App;
