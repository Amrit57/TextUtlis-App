import React, { useEffect, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }

  function changeToUpCase() {
    setText(text.toUpperCase());
    if (text) {
      props.showAlert("Changed to UpperCase", "success");
    } else {
      props.showAlert("Please write some text first", "danger");
    }
  }
  function changeToLowCase() {
    setText(text.toLowerCase());
    if (text) {
      props.showAlert("Changed to lowerCase", "success");
    } else {
      props.showAlert("Please write some text first", "danger");
    }
  }

  function toggleCase() {
    setUpperCase((prev) => !prev);
  }
  function handleClear() {
    setText("");
    props.showAlert("Text box Cleared!", "success");
  }
  function handleCopyText() {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  function handleExtraSpace() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    if (text) {
      props.showAlert("Extra space removed!", "success");
    } else {
      props.showAlert("Text box is empty", "danger");
    }
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control "
          style={{
            background: props.mode === "dark" ? "#282b2ede" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          placeholder="Enter Text Here."
          value={text}
          onChange={handleInputChange}
          id="textBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={changeToUpCase}>
          Change to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={changeToLowCase}>
          Change To LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      {text && (
        <div className="container">
          <p>
            <b> {text.split(" ").filter((word) => word != " ").length} </b>
            words and <b> {text.length} </b>
            characters.
          </p>
          <p>
            It will take <b>{0.008 * text.split(" ").length}</b> minutes to
            read.
          </p>
        </div>
      )}
      <div className="container">
        <h2>Preview</h2>
        {text === "" ? "Enter text above for preview." : text}
      </div>
    </div>
  );
}
