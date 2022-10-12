// it is generally advisable to avoid using ref as much as possible
// Ref has the ability to manipulate DOM directly in react js (i.e it can show/hide any component,change color or style)
// Ref is used in class component
import React,{Component,createRef} from "react";
class User extends Component{
  constructor(){
    super();
    this.inputref = createRef();
  }
  componentDidMount(){
    // console.warn(this.inputref.current.value = "1000")
  }
  getVal(){
    console.warn(this.inputref.current.value)
    this.inputref.current.style.color = "red"
    this.inputref.current.style.backgroundColor = "Blue"
  }

  render()
  {
    return(
      <div className="App">
        <h1>Ref in React</h1>
        <input type="text" ref = {this.inputref}></input>
        <button onClick={()=>this.getVal()} >Check Ref</button>
      </div>
    )
  }
}
export default User