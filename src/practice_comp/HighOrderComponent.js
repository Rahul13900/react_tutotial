// higher Order components take input as another component and output is also a component;

import { useState } from "react"

function User(){
  const [count,setCount] = useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>

    </div>
  )
}
export default User