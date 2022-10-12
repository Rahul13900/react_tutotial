// function Func(){
//   function apple(){
//     alert("Function Called")
//   }
//   return (
//     <div className='App'>
//       <h1>Hello World</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   );
// }
// export default Func

//----------------------------- how to update variables in react( ans ==> use state and props)---------------
// in the below case the the variable are not getting updated

// function Func(){
//   let data= "Rahul"
//   function apple(){
//     data = "Saini"
//     alert(data)
//   }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   );
// }
// export default Func