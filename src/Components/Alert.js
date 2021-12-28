import React from "react";
function Alert(props) {
  const capitalize = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alertMsg && (
        <div
          className={`alert alert-${props.alertMsg.typ} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alertMsg.typ)}</strong>:{props.alertMsg.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
