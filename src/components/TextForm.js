import React,{useState} from 'react'

const TextForm = (props) => {

  const handleUpClick=()=>{
    console.log("Upper Case Button Clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLowClick=()=>{
    console.log("Lower Case Button Clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    console.log("on Change handled");
    setText(event.target.value);
  }

  const [text,setText]=useState('');

  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
