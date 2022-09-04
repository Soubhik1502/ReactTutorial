import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to Upper Case.", "success")
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to Lower Case.", "success")

    }
    const handleClear = () => {
        console.log("Clear Text was clicked");
        let newText = "";
        setText(newText)
        props.showAlert(" Text Box has been cleared.", "success")

    }
    const handleCopy = () => {
        console.log("Copy Text was clicked");
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to Clipboard!", "success")

    }
    const handleClearSpaces = () => {
        console.log("Clear Extra Spaces was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed.", "success")

    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#001b35' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#001b35' : 'white', color: props.mode === 'dark' ? 'white' : '#001b35' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary me-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearSpaces}>Clear Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#001b35' }}>
                <h3>Your Text Summary: </h3>
                <p>Your text contains {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters!</p>
                <p>Your text can be read in {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
