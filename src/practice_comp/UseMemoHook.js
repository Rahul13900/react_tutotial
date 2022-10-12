// useMemo is the alternative for the pure component in the functional components;

// useMemo is used to remove all the unwanted calls of the different functions by providing condition to useMemo;

// import logo from './logo.svg';
// import './App.css';
// import React, { useMemo, useState } from 'react';
// import Func from './practice_comp/NestedListFromNestedArray';
// import User from './practice_comp/SendDataToChild';
// function App() {
//   const [count,setCount] = useState(0)
//   const [item,setItem] = useState(10)
//   const multiCount = useMemo(function multiCount(){
//     console.warn("multiCount")
//     return count*5;
//   },[count]) // it will be rendered only when there is any update in count;
//  return(
//   <div className='App'>
//     <h1>useMemo Hook in React</h1>
//     <h2>count : {count}</h2>
//     <h2>item: {item} </h2>
//     <h2>{multiCount}</h2>
//     <button onClick={()=>setCount(count+1)}>Update Count</button>
//     <button onClick={()=>setItem(item*10)}>Update Item</button>
//   </div>
//  )
// }

// export default App;