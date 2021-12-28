import React, { useState } from "react";
import { GrammarlyTextArea } from "@grammarly/react-textarea";
export default function TextForm(props) {
  const textUppercaseHandler = () => {
    // console.log("Clicked Upper case");
    let upperText = textForm.toUpperCase();
    setTextForm(upperText);
    if (upperText === "") {
      props.showAlertHandler("Please enter text in textbox!", "danger");
    } else {
      props.showAlertHandler("Conerted to uppercase!", "success");
    }
  };
  const textLowercaseHandler = () => {
    // console.log("Clicked Upper case");
    let upperText = textForm.toLowerCase();
    setTextForm(upperText);
    if (upperText === "") {
      props.showAlertHandler("Please enter text in textbox!", "danger");
    } else {
      props.showAlertHandler("Conerted to lowercase!", "success");
    }
  };
  //Clear text
  const textClearHandler = () => {
    let clearText = "";
    setTextForm(clearText);
    if (clearText === "") {
      props.showAlertHandler("Please enter text in textbox!", "danger");
    } else {
      props.showAlertHandler("Cleared text from box", "danger");
    }
  };
  //Copy Text
  const textCopyHandler = () => {
    let copyText = document.getElementById("textform");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    copyText.value === ""
      ? props.showAlertHandler("Please enter text in textbox!", "danger")
      : props.showAlertHandler("Copied to Clipboard", "success");
  };
  //Handle Extra Space
  const handleExtraSpace = () => {
    let newText = textForm.split(/[ ]+/);
    let newValue = newText.join(" ");
    setTextForm(newText.join(" "));
    if (newValue === "") {
      props.showAlertHandler("Please enter text in textbox!", "danger");
    } else {
      props.showAlertHandler("Extraspaces removed", "success");
    }
  };
  //Case Sensitive
  const textCapitalizeCaseHandler = () => {
    const lowerCase = textForm.toLowerCase();
    const newLowertext = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

    setTextForm(newLowertext);
    if (newLowertext === "" || newLowertext === null) {
      props.showAlertHandler("Please enter text in textbox!", "danger");
    } else {
      props.showAlertHandler("Capitalized succesfully!", "success");
    }
  };
  const handleOnChange = (event) => {
    // console.log("Change Handled");
    setTextForm(event.target.value);
  };
  const [textForm, setTextForm] = useState("");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4
              className="my-2 text-center"
              style={{ color: props.mode === "light" ? "black" : "white" }}
            >
              {props.titleform}
            </h4>
            <hr />
            <div className="mb-3">
              <GrammarlyTextArea
                className="form-control"
                id="textform"
                style={{
                  backgroundColor: props.mode === "light" ? "black" : "white",
                  color: props.mode === "light" ? "white" : "black",
                }}
                onChange={handleOnChange}
                rows="6"
                value={textForm}
              />
            </div>
            <button disabled={textForm.length===0} className="btn btn-primary my-1" onClick={textUppercaseHandler}>
              Convert to UpperCase
            </button>
            &nbsp;&nbsp;
            <button disabled={textForm.length===0}
              className="btn btn-primary my-1"
              onClick={textCapitalizeCaseHandler}
            >
              Cpaitalize
            </button>
            &nbsp;&nbsp;
            <button disabled={textForm.length===0} className="btn btn-primary my-1" onClick={textLowercaseHandler}>
              Convert to LowerCase
            </button>
            &nbsp;&nbsp;
            <button disabled={textForm.length===0} className="btn btn-primary my-1" onClick={textCopyHandler}>
              Copy to Clipboard
            </button>
            &nbsp;&nbsp;
            <button disabled={textForm.length===0} className="btn btn-danger my-1" onClick={handleExtraSpace}>
              Remove Extra Space
            </button>
            &nbsp;&nbsp;
            <button disabled={textForm.length===0} className="btn btn-danger my-1" onClick={textClearHandler}>
              Clear Text
            </button>
            <div className="text-container my-3">
              <h6 style={{ color: props.mode === "light" ? "black" : "white" }}>
                Your Text Summary
              </h6>
              <p style={{ color: props.mode === "light" ? "black" : "white" }}>
             {textForm.split(" ").filter((element)=>{return element.length !==0}).length} Words and {textForm.length}{" "}
                Characters
              </p>
              <h4
                className="mt-3"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Preview
              </h4>
              <p className="py-3 px-3 card">
                {textForm.length > 0
                  ? textForm
                  : "Enter something in the textbox above to preview it here."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
