import React, { Component } from "react";
// import Radium from "radium";
// import "./Person.css";
// import styled from "styled-components";
import classes from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

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
  constructor(props) {
    super(props);
    this.RefInputElement = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    // this.inputElement.focus();
    this.RefInputElement.current.focus();
  }

  render() {
    return (
      // <StyledDiv>
      // <div className="Person" style={style}>
      // <React.Fragment>
      // <div className={classes.Person}>
      <Auxiliary>
        {/* <AuthContext.Consumer>
          {context =>
            context.authenticated ? (
              <p>"Authenticated"</p>
            ) : (
              <p>"Please log in"</p>
            )
          }
        </AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>"Authenticated"</p>
        ) : (
          <p>"Please log in"</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and my age is {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEL => {
          //   this.inputElement = inputEL;
          // }}
          ref={this.RefInputElement}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
      // </div>
      // </React.Fragment>
      // </StyledDiv>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  changed: PropTypes.func,
  age: PropTypes.number
};

// export default Radium(person);
export default withClass(Person, classes.Person);
