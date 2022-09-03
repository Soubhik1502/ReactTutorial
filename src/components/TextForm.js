import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        console.log("Clear Text was clicked");
        let newText = "";
        setText(newText)
    }
    const handleCopy = () => {
        console.log("Copy Text was clicked");
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handleClearSpaces = () => {
        console.log("Clear Extra Spaces was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary me-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearSpaces}>Clear Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary: </h3>
                <p>Your text contains {text.split(" ").length} words and {text.length} characters!</p>
                <p>Your text can be read in {0.008 * text.split(" ").length} minutes</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
