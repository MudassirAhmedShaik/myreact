import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleButtonRef = useRef(null);
  const authcontext = useContext(AuthContext);
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);
  const AssinedClasses = [];
  let btnClass = "";
  if (props.ShowPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) AssinedClasses.push(classes.red);
  if (props.personsLength <= 1) AssinedClasses.push(classes.bold);
  console.log("[Cockpit.js] rendering....");
  return (
    <div className={classes.Cockpit}>
      <h1 style={{ fontStyle: "italic" }}>{props.title}</h1>
      <p className={AssinedClasses.join(" ")}>This is really working !</p>
      {/* <StyledButton */}
      <button
        ref={toggleButtonRef}
        className={btnClass}
        // alt={this.state.showPersons}
        onClick={props.clicked}
      >
        {" "}
        Toggle
      </button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}
      <button onClick={authcontext.login}>Login</button>
      {/* </StyledButton> */}
    </div>
  );
};

export default React.memo(Cockpit);
