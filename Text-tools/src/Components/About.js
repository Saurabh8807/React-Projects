import React ,{useState} from 'react'

export default function About(props) {
   const [myStyle,newStyle ]=useState({
    backgroundColor:'lightgrey',
    color:'black'
   })
   const [myBtn,newBTN]=useState("Enable dark mode")
   const darkTheme =()=>{
    if(myStyle.backgroundColor==='lightgrey'){
      newStyle({
        backgroundColor:'black',
        color:'lightgrey'
      })
      newBTN("Enable Light mode")
    }
    else{
      newStyle({
        backgroundColor:'lightgrey',
        color:'black'
      })
      newBTN("Enable dark mode")

    }
   }
  return (<>
  <h1 style={{color:props.mode==='dark'?'white':'black',fontWeight:'bolder',fontSize:'50px',marginLeft:'12vw'}}>About</h1>
    <div style={myStyle} className="container">
    <div Style="height:150px">
      <div  className="accordion" id="accordionExample">
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Accordion Item #1</strong>
      </button>
    </h2>
    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong> Accordion Item #2 </strong>
      </button>
    </h2>
    <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={myStyle} className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Accordion Item #3</strong>
      </button>
    </h2>
    <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={myStyle} className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    <button Style ={"margin-left:11vw; margin-top:10vh"}onClick={darkTheme}>{myBtn}</button>
    </>
  )
}
