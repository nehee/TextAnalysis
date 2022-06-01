//react function based component
import React from 'react'

export default function About(props) {
    
    // const [myStyle1, setMyStyle1] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '0.5px solid white'
    //     })
    // let myStyle2 =
    // {
    //     color: 'black',
    //     backgroundColor: 'white'

    // }
    // const [btnText, setBtnText] = useState("Enable Light Mode")
        
    //   const toggleStyle = () =>
    //   {
    //     if(myStyle1.color === 'white')
    //     {
    //       setMyStyle1({
    //         color: 'black',
    //         backgroundColor: 'white'
    //       })
    //       setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //       setMyStyle1({
    //         color: 'white',
    //         backgroundColor: 'black'
    //       })
    //       setBtnText("Enable Light Mode")
    //     }
    //   }
      
  return (
    
    <div className="container" style = {{color: props.mode==='dark'?'white':'#495057'}}>
        <h1 className='my-4'>About us...</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {{backgroundColor: props.mode==='dark'?'#495057':'white', color:props.mode==='dark'?'white':'black' }} >
        About TextAnalysis
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#495057':'white'}}>
        <strong>TextAnalysis</strong> is a project developed for the purpose of manipulatng the text entered by the user. It comes with features like converting the entered text to uppercase or lowercase, converting text to speech, removing the extra whitespaces and copying the text. This project was built using Bootstrap and React js. It was my first react project and took me around 4-5 days to build this one. It was a fun yet challenging project.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {{backgroundColor: props.mode==='dark'?'#495057':'white', color:props.mode==='dark'?'white':'black' }}>
       About Developer
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#495057':'white'}}>
        <strong>Hey there!! This is Nehee Bohare.</strong> I am a third year B.Tech student in Information Technology at Kalinga Institute of Industrial Technology, Bhubaneswar. Being a coding and development enthusiast, it always fascinates me to develop and work on new projects. TextAnalysis being my first react project was aimed at learning some of the basic react concepts and ofcourse building a useful utility to manipulate the entered text.
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {{backgroundColor: props.mode==='dark'?'#495057':'white', color:props.mode==='dark'?'white':'black' }}>
       Thankyou!
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#495057':'white'}}>
        <strong>A big big thanks to CodeWithHarry!</strong> This project has been developed using the information and techniques provided by CodeWithHarry from his React js tutorials. Thakyou for being my mentor and guide throughout the development of this amazing project.
      </div>
    </div>
  </div>
</div>
{/* <button className="btn btn-dark my-3" onClick={toggleStyle} type="submit" style = {myStyle2}>{btnText}</button> */}
    </div>
  )
}
