import React, { useState } from "react";

export default function Textform(props) {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const convetToUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase successfully","success")
  };
  const convetToLowercase = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase successfully","success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard Successfully","success")
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };
  const removeExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space removed Successfully","success")
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <div className="mb-3 my-2">
          <h1 className="my-3">{props.text}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"#043734":"white"}}
          ></textarea>
          <button className=" btn btn-primary my-3" onClick={convetToUppercase} disabled={text.length===0}>
            Covert To Uppercase
          </button>
          <button
            className=" btn btn-primary my-3 mx-2"
            onClick={convetToLowercase}
            disabled={text.length===0}
          >
            Covert To Lowercase
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={copyText} disabled={text.length===0}>
            Copy Text
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={clearText} disabled={text.length===0}>
            Clear Text
          </button>
          <button
            className=" btn btn-primary my-3 mx-2"
            onClick={removeExtraSpace}
            disabled={text.length===0}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
      /
    </>
  );
}
