import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
import classes from "./App.module.css";
// import styled from "styled-components";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

/*export default function App(){
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? "red" : "green")};
//   color: white;
//   border: 1px solid blue;
//   font: inherit;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   border: "1px solid blue",
    //   font: "inherit",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
        />
      );
      // style.backgroundColor = "red";
      // style["&:hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }
    const AssinedClasses = [];
    if (this.state.persons.length <= 2) AssinedClasses.push(classes.red);
    if (this.state.persons.length <= 1) AssinedClasses.push(classes.bold);

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          ShowPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {personsList}
      </div>
      // </StyleRoot>
    );
    // return React.createElement(
    //   "div",
    //   {className: 'App'},
    //   React.createElement("h1", null, "Hello World")
    // );
  }
}

// export default Radium(App);
export default App;
