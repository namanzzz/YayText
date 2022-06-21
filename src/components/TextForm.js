import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('')


    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }
    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success")
    }

    const handleclearclick = () => {

        let newText = ''
        setText(newText);
        props.showAlert("Text Cleared", "success")


    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>


            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>An average of {0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview: </h2>
                <p>{text.length > 0 ? text : 'Enter Your Text To Preview'}</p>
            </div>
        </>
    )
}
