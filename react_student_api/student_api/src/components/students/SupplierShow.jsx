import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SupplierShow = () => {
  const [supplier,setSupplier]=useState([]);
  const fetchSupplier=()=>{
      axios.post("http://localhost/Restaurant_management_home/admin/api/supplier")
      .then((res)=>{
        // console.log(res.data.suppliers);
        setSupplier(res.data.suppliers);
      })
      .catch((err)=>{
        console.log(err);
        
      })

    }
  
  useEffect(()=>{
    fetchSupplier();
  },[])
  return (
    <>
      <div class="container mt-5">
        <h2 class="mb-4">Supplier</h2>
        <table class="table table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
              {supplier?.map((data,i)=>{
                return(
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.mobile}</td>
                    <td>{data.address}</td>
                    <td>{data.created_at}</td>
                    <td>{data.updated_at}</td>
                  </tr>
                )
              })}

                {/* <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>28</td>
                    <td>johndoe@example.com</td>
                </tr> */}
            </tbody>
        </table>
    </div>
    
    
    </>
  )
}

export default SupplierShow
