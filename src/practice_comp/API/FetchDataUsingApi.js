
// code written in app.js component;

// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap'
// function App() {

//   const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '5deb7538demsha7f151730226e38p14874djsn532d7d1acd27',
//       'X-RapidAPI-Host': 'trains.p.rapidapi.com'
//     },
//     body: '{"search":"Rajdhani"}'
//   };

//   let [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://trains.p.rapidapi.com/', options).then((result) => {
//       result.json().then((res) => {
//         setData(res)
//       })
//     })
//   }, [])
//   return (
//     <div className='App'>
//       <h1>API Data</h1>
//       <Table border={1} striped>
//         <tbody>
//           <tr>
//             <td>Train_no</td>
//             <td>Train_Name</td>
//             <td>Train_From</td>
//             <td>Train_To</td>
//           </tr>
//           {
//             data.map((item) =>
//               <tr>
//                 <td>{item.train_num}</td>
//                 <td>{item.name}</td>
//                 <td>{item.train_from}</td>
//                 <td>{item.train_to}</td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>
//     </div>
//   )

// }
// export default App;





