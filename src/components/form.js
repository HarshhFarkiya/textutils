import React, {useState} from 'react'

export default function Form(props)
{
    const handleChange=(event)=>{
        console.log("change");
        setText(event.target.value);
    }
    const convertUppercase=()=>{
        let newText = text.toUpperCase();
        setUpText(newText);
        setText(newText);
    }
    const changeFont=()=>{

        var ele = document.getElementById("preview");
        ele.style.fontFamily="monoscape";
        
    }
    const removeSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const copyText=()=>
    {
        var ele = document.getElementById("textBox");
        ele.select();
        navigator.clipboard.writeText(ele.value);
        document.getSelection().removeAllRanges();
        props.alert("Text Copied!!", "success");
        //alert("copied");
    }
    const [text, setText]=useState("Enter text here")
    const [uptext, setUpText]=useState("Click button to convert in uppercase")
    return (
        <div className="mb-3 light" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 className='my-4' style={{color: props.mode==='dark'?'white':"black"}}>{props.heading}</h1>
    <textarea className="form-control" id="textBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':"lavender  "}} value={text} onChange={handleChange}></textarea>
    <button disabled ={text.length===0} className='btn btn-primary mx-4' onClick={changeFont}>Change Font</button>
    <button disabled ={text.length===0} className="btn btn-primary my-3 max-4" onClick={convertUppercase}>Convert to uppercase</button>
    <button disabled ={text.length===0} className="btn btn-primary my-3 mx-4" onClick={removeSpaces}>Remove spaces</button>
    <button disabled ={text.length===0} className="btn btn-primary my-3 mx-4" onClick={copyText}>copy</button>
    <h3>Text Summary</h3>
    <p>words {text.split(" ").filter((textt)=>{ return textt.length>0}).length} and characters {text.length}</p>
    <p id="preview">{text}</p>
    <p id="uppara">{uptext}</p>    
</div>
)
}