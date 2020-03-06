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
    ]
  };

  switchNameHandler = () => {
    //console.log("clicked!")
    this.setState({
      persons: [
        { name: "Ahmed", age: "24" },
        { name: "Shaik", age: "25" },
        { name: "Mudassir Ahmed", age: "23" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is React!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
