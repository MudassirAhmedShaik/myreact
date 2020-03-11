import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  const AssinedClasses = [];
  let btnClass = "";
  if (props.ShowPersons) btnClass = classes.Red;
  if (props.persons.length <= 2) AssinedClasses.push(classes.red);
  if (props.persons.length <= 1) AssinedClasses.push(classes.bold);
  return (
    <div className={classes.Cockpit}>
      <h1 style={{ fontStyle: "italic" }}>{props.title}</h1>
      <p className={AssinedClasses.join(" ")}>This is really working !</p>
      {/* <StyledButton */}
      <button
        className={btnClass}
        // alt={this.state.showPersons}
        onClick={props.clicked}
      >
        {" "}
        Toggle
      </button>
      {/* </StyledButton> */}
    </div>
  );
};

export default Cockpit;
