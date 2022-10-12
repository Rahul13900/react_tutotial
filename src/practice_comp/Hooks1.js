// use Effect ==> contains all three -> componentDidMount,componentDidUpdate, componentWillUnmount;
// useEffect runs each time a state is updated but we can put condition for just that condition it will run;

import { useEffect, useState } from "react"

function Func(){
  const [count,setCount] = useState(0)
  const [test,setTest] = useState(0)
  useEffect(()=>{
    console.log("useEffect")
    // function Test(){
    //   console.log("Test")
    // }
  },[count])
  // this count is the condition on just this useEffect will get called
  return(
    <div className="App">
      <h1>UseEffect {count}</h1>
      <h1>UseEffect {test}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Counter</button>
      <button onClick={()=>setTest(test+1)}>Increase Counter</button>
    </div>
  )
}
export default Func