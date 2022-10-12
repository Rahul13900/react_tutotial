//================this is done in the app.js =================

function App() {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  // function getData(val){
  //   setData(val.target.value)
  // }
 return (
  <div className='App'>
    {
      print?
      <h1>{data}</h1>
      :null
    } {/*this will include the check if we have clicked on print data button only then it will print the data*/}
    {/* <h1> {data}</h1> */} {/*this will print the input while we enter it*/}
    <input type = "text" onChange={(e)=>setData(e.target.value)}></input> // we take input using this syntax;
    <button onClick={()=>setPrint(true)}>Print Data</button>
  </div>
 )
}

// ====================we can even toggle the data using button i.e hide and show


// function App() {
//   const [status,setStatus]  = useState(true)
//   return(
//    <div className='App'>
//    {
//      status?
//      <h1>Hello There !</h1>
//      :null
//    }
//    <button onClick={()=>setStatus(!status)}>Toggle</button>
//    </div>
//   )
//  }
 
//  export default App;