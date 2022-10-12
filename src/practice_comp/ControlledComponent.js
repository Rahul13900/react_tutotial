import { useState } from "react"

function User(){
  let [val,setVal] = useState("000")
  return(
    <div>
      <h1>Controlled Component in React</h1>
      <input type = "text" value={val} onChange = {(e)=>setVal(e.target.value)}></input>
      <h2>value: {val}</h2>
    </div>
  )
}
export default User

// controlled component uses states to manipulate the input fields
// in uncontrolled components input fields are handled directly by dom ==> using javaScript(i.e. getElementbyId) or using Ref