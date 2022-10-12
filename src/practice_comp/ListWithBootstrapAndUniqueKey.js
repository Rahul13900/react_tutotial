import {Table} from 'react-bootstrap'
function Func(){
  const students = [
    {name: "Rahul",contact: 1123, email: "rahul@test"},
    {name: "ankit",contact: 234, email: "ankt@test"},
    {name: "preetam",contact: 1123, email: "preetam@test"}
  ]
  return (
    <div className="App">
     <Table striped variant='dark'>
      <tbody>
      <tr>
        <td>S.no</td>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
     {
        students.map((data,i)=> // we can add conditions too , according to which the data will be displayed
        data.contact === 1123?
        <tr key={i}>
          <td>{i+1}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
        :null
      )
      }
      </tbody>
     </Table>
    </div>
  )
}
export default Func