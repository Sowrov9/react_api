import axios from 'axios';
import React, { useState } from 'react'

const CreateSupplier = () => {
    const[Formdata,SetFormdata]=useState({
        name:"",
        mobile:"",
        address:""
    });
 
    const handleChange=(e)=>{
        console.log(e);
        
        const{name,value}=e.target;
        SetFormdata((props)=>{
            return{
                ...props,
                [name]:value,
            };
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(Formdata);
        axios.post("http://localhost/Restaurant_management_home/admin/api/supplier/save",Formdata)
        .then((res)=>{
            console.log(res)
            // if(res.status===200){
            //     // toast.success("Customer Successfully created");
            //     // navigate("/")
            //     // window.reload(true)
            // }
        })
        
    }
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">User Information Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={handleChange} className="form-control" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="tel" onChange={handleChange} className="form-control" id="mobile" name="mobile" placeholder="Enter your mobile number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea className="form-control" onChange={handleChange} id="address" name="address" rows={3} placeholder="Enter your address" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default CreateSupplier
