import React from "react";

const withClass = (WrappedCompoenent, ClassName) => {
  return props => (
    <div className={ClassName}>
      <WrappedCompoenent {...props} />
    </div>
  );
};

export default withClass;
