//rfc react function based component
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success ");

    }
    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success ");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success ");
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied!", "success ");
    }
    const handleWhiteSpaces = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "success ");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking!", "success ");
      }
    const [text, setText] = useState('Enter text here...');
    // text = "new text"; Wrong way to change text
    // setText("new text"); Correct way to change text 

    // const [myStyle1, setMyStyle1] = useState(
    // {
    //     color: 'white',
    //     backgroundColor: 'black',
    //     border: '0.5px solid white'
    // })
    // let myStyle2 =
    // {
    //     color: 'black',
    //     backgroundColor: 'white'

    // }
    //for dark mode
  // const toggleStyle = () =>
  // {
  //   if(myStyle1.color === 'white')
  //   {
  //     setMyStyle1({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  //   else{
  //     setMyStyle1({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  // }

//   const [btnText, setBtnText] = useState("Enable Light Mode")
  return (
      <>
    <div className="container " style = {{color: props.mode==='dark'?'white':'#495057'}} >
        <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value ={text} id="myBox" rows="10" onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'rgb(49 49 49)':'rgb(237 236 236)', color: props.mode==='dark'?'white':'#495057',border: props.mode==='dark'?'':'1px solid black'}}></textarea>
</div>
<button className="btn btn-dark my-3" onClick={handleUpClick} style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}} >Convert to UpperCase </button>
<button className="btn btn-dark mx-4" onClick={handleLoClick} style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}}>Convert to LowerCase</button>
<button className="btn btn-dark max-4" onClick={handleClearClick} style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-dark mx-4 " style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}}>Speak</button>
<button type="submit" onClick={handleCopy} className="btn btn-dark " style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}}>Copy</button>
<button type="submit" onClick={handleWhiteSpaces} className="btn btn-dark mx-3 " style = {{color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'1px solid black':'1px solid white'}}>Remove Extra Spaces</button>
{/* <button className="btn btn-dark" onClick={toggleStyle} type="submit" style = {myStyle2}>{btnText}</button> */}
    </div>

    <div className="container my-4 "  style = {{color: props.mode==='dark'?'white':'#495057'}} >
        <h3>
            Your text Summary
        </h3>
        <p className='my-2 fst-italic'>
        {text.split("\n").length} paragraphs, {text.split(" ").length} words and {text.length} characters
        </p>
        <p className='my-2 fst-italic'>
            {0.008 * text.split(" ").length} Minutes read
        </p>
        <h4 className='my-2 text-wrap'>Preview</h4>
        <p className='fst-italic'>
            {text}
        </p>
    </div>
    </>
  )
}
