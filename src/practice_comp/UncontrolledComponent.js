// in uncontrolled components input fields are handled directly by dom ==> using javaScript(i.e. getElementbyId) or using Ref

import { useRef } from "react"

function User() {
  const inputRef = useRef(null);
  const inputref = useRef(null);
  function submitForm(e){
    e.preventDefault()
    console.log("input field 1 value",inputRef.current.value)
    console.log("input field 2 value",inputref.current.value)
    let input3 = document.getElementById("input3").value
    console.log("input field 3 value",input3)
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Uncontrolled Component in React</h1>
        <input  ref={inputRef} type="text" /><br /><br />
        <input ref={inputref} type="text"/><br /><br />
        <input  id="input3" type="text"/><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default User