import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = ()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [emailId,setEmailId]=useState("");
    const {id}=useParams();
  const navigate=useNavigate();
    const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,emailId};
        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                navigate(`/`);
            }
        ).catch((err)=>{
            console.log(err);
        });
        }
        else{
        EmployeeService.saveEmployee(employee).then((response)=>{
            navigate(`/`);
        }
    ).catch((err)=>{
        console.log(err);
    });
}
    }

    useEffect(()=>{

        EmployeeService.getEmployeeById(id).then(
            (response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
            }).catch((err)=>{
                console.log(err);
            });
    },[]);

    const title= ()=>{
        if(id){
            return <h2 className="text-center">Update Employee</h2>;
        }
        else{
            return <h2 className="text-center">Add Employee</h2>;
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name:</label>
                                    <input
                                    type="text"
                                    placeholder="enter first name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name:</label>
                                    <input
                                    type="text"
                                    placeholder="enter last name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email Id:</label>
                                    <input
                                    type="text"
                                    placeholder="enter email Id"
                                    name="emailId"
                                    className="form-control"
                                    value={emailId}
                                    onChange={(e)=>setEmailId(e.target.value)}
                                    ></input>
                                </div>

                                <button type="button" className="btn btn-success" onClick={(e)=>saveEmployee(e)}>Submit</button>
                                <Link to={`/`} className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;