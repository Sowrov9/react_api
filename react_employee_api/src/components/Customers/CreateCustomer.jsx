import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateCustomer = () => {
    const navigate = useNavigate();
    const [Formdata,setFormdata]=useState({
        name:"",
        mobile:"",
        address:""
})
const [nabila,setNabila] = useState(null)

const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormdata((props)=>{
        return{
            ...props,
            [name]:value,
        };
    })
}


const handleSubmit=(e)=>{
    // e.preventDefault();
    // console.log(Formdata);
    axios.post("http://localhost/Restaurant_management_home/admin/api/customer/save",Formdata)
    .then((res)=>{
        // console.log(res)
        if(res.status===200){
            toast.success("Customer Successfully created");
            navigate("/")
            // window.reload(true)
        }
    })
    
}

  return (
    <>
        <div className="container mt-5">
  <h2 className="text-center mb-4">Create Customer</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input onChange={handleChange} type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="mobile" className="form-label">Mobile</label>
      <input onChange={handleChange} type="tel" className="form-control" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address</label>
      <textarea onChange={handleChange} className="form-control" id="address" name="address" rows={4} placeholder="Enter your address" required defaultValue={""} />
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
  </form>
</div>

    
    </>
  )
}

export default CreateCustomer