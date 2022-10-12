// sending data to child is also known as LIFTING THE STATE UP

function User(props){
  const data = "Rahul" //sending this data to parent component
  return(
    <div>
      <h1>User Name: {props.data} </h1>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}
export default User


//==============code in app.js

// function App() {
//   function parentAlert(data){
//     console.log(data) // recieving data from child parent 
//   }
//  return(
//   <div className='App'>
//     <h1>Lifting State Up</h1>
//     <User alert = {parentAlert} />
//   </div>
//  )
// }

// export default App;