function Funcprop({clickTest}){
  return (
    <div>
      <button onClick={()=>clickTest()}>Click Me</button>
    </div>
  )
}
export default Funcprop

//------------------app part

// function App() {
//   function clickTest(){
//     console.log("Test")
//   }
//  return(
//   <div className='App'>
//     <Funcprop clickTest={clickTest}/>
//   </div>
//  )
// }

// export default App;
