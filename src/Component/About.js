import React from "react";

function About(props) {
  let setMyStyle={
    color:props.mode==="light"?"black":"white",
    backgroundColor:props.mode==="light"?"white":"#043742"
  }
  return (
    <div className="container">
        <h1 className="my-2"style={{backgroundColor:props.mode==="light"?"whitesmoke":"#043743",color:props.mode==="light"?"black":"white",padding:"10px",border:"2px solod white",borderRadius:"5px"}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={setMyStyle}
            >
               About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setMyStyle}>
              <strong>TextUtils is a text based utility which can help you to manipulate your text into different usecases like convert to uppercare,lowercase and you can count how many words and how many chracter and you can remove extra spaces .Try textutils now!</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={setMyStyle}
            >
              How to use TextUtils? 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setMyStyle}>
              <strong>How to use textutils? it is easy to use and not so much difficult to learn you can just click on buttons and you can get your results for an example you can just click on remove extra spaces so you can find you extra spaces has been removed like that you can use it. </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={setMyStyle}
            >
              Is it free? About Devloper
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setMyStyle}>
              <strong>Textutils is 100% free to use .About Devloper | Basir khan is a devloper of textutils which can devloped in 2023 
                | </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
