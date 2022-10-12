//  Here we use useState to change the variable using onclick button

// import { useState } from "react";

// function User(){
//   const [data,setData] = useState("Rahul")
//   function updateData(){
//     setData("Saini")
//   }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Click Me</button>
//     </div>
//   );
// }
// export default User

//--------------------------------------------Props in functional component--------------------

// function Student(props){
//   return (
//     <div>
//       <h1>Hello {props.name} your Email is {props.email}</h1>
//     </div>
//   )
// }
// export default Student

// =========================== we can update the value of props too;
// import {useState} from 'react'
// function Student(props){
//   return (
//     <div>
//       <h1>Hello {props.name} your Email is {props.email}</h1>
//     </div>
//   )
// }
// export default Student

//    

 // code snippet of app.js to update the props onclick 

// function App() {
//   const [data,setData] = useState("Rahul")
//   function update(){
//     setData("Harshit")
//   }
//  return (
//   <div className='App'>
//     <Student name={data} email={"rahulsaini13900@gmail.com"} />
//     <button onClick={update}>Update Name</button>
//   </div>
//  )
// }
