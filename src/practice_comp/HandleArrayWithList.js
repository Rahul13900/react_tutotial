// we avoid using for loop while accessing the elements in the array and use map instead

import { Collapse } from "bootstrap"

// for loop cannot be used inside the return so we just use map

// function Func(){
//   const students = ['Ankit','Rahul','preetam','begu']
//   return (
//     <div>
//       {
//         students.map((data)=> 
//         <h1>{data}</h1>
//       )
//       }
//     </div>
//   )
// }
// export default Func

//--------------------------------------using objects this time--------------------

function Func(){
  const students = [
    {name: "Rahul",contact: 1223, email: "rahul@test"},
    {name: "ankit",contact: 234, email: "ankt@test"},
    {name: "preetam",contact: 34543, email: "preetam@test"}
  ]
  return (
    <div className="App">
     <table border={1}>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
     {
        students.map((data)=> 
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
      )
      }
     </table>
    </div>
  )
}
export default Func