// useRef is the alternative to Ref in functional component;

import { useRef, useState } from "react"

function User(){
  let inputref= useRef(null)
  const [data,setData] = useState("")
  function Handle(data){
    console.log("This is inside Handle" ,data)
    // inputref.current.style.color = "red"
    // inputref.current.style.backgroundColor = "blue"
    // inputref.current.focus();
  }
  return(
    <div>
      <h1>useRef in React</h1>
      <input type = "text" ref ={inputref} onChange={(e)=>setData(e.target.value)}></input>
      <button onClick={()=>Handle(data)}>Handle Input</button>
    </div>
  )
}
export default User