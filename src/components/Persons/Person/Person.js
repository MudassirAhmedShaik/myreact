import React, { Component } from "react";
// import Radium from "radium";
// import "./Person.css";
// import styled from "styled-components";
import classes from "./Person.module.css";

// const StyledDiv = styled.div`
//   width: 60%;
//   border: 1px solid #eee;
//   margin: 16px;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 400px) {
//     width: 350px;
//   }
// `;

class Person extends Component {
  // const style = {
  //   "@media(min-width:400px)": { width: "350px" }
  // };
  render() {
    return (
      // <StyledDiv>
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and my age is {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
      // </StyledDiv>
    );
  }
}

// export default Radium(person);
export default Person;
