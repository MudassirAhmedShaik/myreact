import React from "react";
// import Radium from "radium";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  border: 1px solid #eee;
  margin: 16px;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 400px) {
    width: 350px;
  }
`;

const person = props => {
  // const style = {
  //   "@media(min-width:400px)": { width: "350px" }
  // };

  return (
    <StyledDiv>
      {/* <div className="Person" style={style}> */}
      <p onClick={props.click}>
        I'm a {props.name} and my age is {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      {/* </div> */}
    </StyledDiv>
  );
};

// export default Radium(person);
export default person;
