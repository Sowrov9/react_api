import React, { useEffect, useState } from 'react'
import axios from "axios";


const MngCustomer = () => {
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlwIjoiOjoxIiwiaXNzIjoiand0LnNlcnZlciIsImF1ZCI6ImludGVscy5jbyJ9.eyJpZCI6IjEyNyIsIm5hbWUiOiJhZG1pbiIsInJvbGVfaWQiOiIxIiwiZW1haWwiOiJ0b3doaWQxQG91dGxvb2suY29tIiwiaXAiOiI6OjEiLCJpc3MiOiJqd3Quc2VydmVyIiwiYXVkIjoiaW50ZWxzLmNvIiwiZXhwIjoxNzM3MTkxMjM1fQ.FN4q6K_NxdWg_jlw9z6uRfNqUhst7d4uaM9U2A83h0U"


  const [customer, setCustomer] = useState([]);
  const fetchCustomer = () => {
    axios.post("http://localhost/Restaurant_management_home/admin/api/customer/",
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      },
    )
      .then((res) => {
        // console.log(res.data.customers);
        setCustomer(res.data.customers);
      })
      .catch((err) => {
        console.log(err);

      })
  }
  useEffect(() => {
    fetchCustomer()
  }, [])
  return (
    <>

      <div className="container mt-5">
        <h2 className="text-center mb-4">User Information</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>

            {customer?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.address}</td>
                </tr>
              )
            })}

            {/* <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>123-456-7890</td>
              <td>123 Main St, City</td>
            </tr> */}
          </tbody>
        </table>
      </div>



    </>
  )
}

export default MngCustomer