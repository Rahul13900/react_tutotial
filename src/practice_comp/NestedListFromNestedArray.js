import { Table } from 'react-bootstrap'
function Func() {
  const students = [
    {
      name: "Rahul", contact: 1123, email: "rahul@test", address: [
        { Hno: "1", city: "Noida", country: "India" },
        { Hno: "2", city: "Delhi", country: "India" },
        { Hno: "3", city: "Bangalore", country: "India" }
      ]
    },
    {
      name: "ankit", contact: 234, email: "ankt@test", address: [
        { Hno: "1", city: "Noida", country: "India" },
        { Hno: "2", city: "Delhi", country: "India" },
        { Hno: "3", city: "Bangalore", country: "India" }
      ]
    },
    {
      name: "preetam", contact: 1123, email: "preetam@test", address: [
        { Hno: "1", city: "Noida", country: "India" },
        { Hno: "2", city: "Delhi", country: "India" },
        { Hno: "3", city: "Bangalore", country: "India" }
      ]
    }
  ]
  return (
    <div className="App">
      <Table  variant='dark'>
        <tbody>
          <tr>
            <td>S.no</td>
            <td>Name</td>
            <td>Email</td>
            {/* <td>Contact</td> */}
            <td>Address</td>
          </tr>
          {
            students.map((data, i) => // we can add conditions too , according to which the data will be displayed

              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                {/* <td>{data.contact}</td> */}
                <td>
                  <Table striped variant='dark'>
                    <tbody>
                      {
                        data.address.map((item,k) =>
                          <tr key={k}>
                            <td>{item.Hno}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}
export default Func