import { useState } from "react"

function Form(){
  const [data,setData] = useState("")
  const [option,setOption] = useState("")
  const [intrest,setIntrest] = useState(false)
  function handleSubmit(event){
    event.preventDefault()
    alert(`The data you have entered is ${data} and subject is ${option}`)
    console.log(data);
    console.log(option);
    console.log(intrest)
  }
  return(
    <div>
      <h1>Handle Form in React</h1>

      <form onSubmit={handleSubmit}>
      <label>Name : <input type="text" placeholder="Enter Your Name" onChange={(e)=>setData(e.target.value)} />
      </label> <br /> <br />
      <label>Select Subject :
        <select onChange={(e)=>setOption(e.target.value)}>
          <option>Select Option</option>
          <option>Mathematics</option>
          <option>Biology</option>
          <option>Commerce</option>
        </select>
        </label><br /> <br />
        <label>
          <input type="checkbox" onChange={(e)=>setIntrest(e.target.checked)} />
          <span>Accept Terms and condition</span>
        </label>
        <input type = "submit" />
      </form>
    </div>
  )
}
export default Form