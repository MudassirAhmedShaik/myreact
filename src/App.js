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
      { name: "Ahmed", age: "24" },
      { name: "Shaik", age: "25" },
      { name: "Mudassir", age: "23" }
    ],
    otherdata: "Other data"
  };

  switchNameHandler = newName => {
    //console.log("clicked!")
    this.setState({
      persons: [
        { name: "Ahmed", age: "24" },
        { name: "Shaik", age: "25" },
        { name: newName, age: "23" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Ahmed", age: "24" },
        { name: event.target.value, age: "25" },
        { name: "Mudassir", age: "23" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColour: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>This is React!!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Mudassir Ahmed")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Mudassir!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Movies
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
