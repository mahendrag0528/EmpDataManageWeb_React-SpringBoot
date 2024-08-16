import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
//import { Link } from 'react-router-dom';

const AddEmployeeComponent = ({id,isOpened,modelclose})=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [emailId,setEmailId]=useState("");

    const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,emailId};
        if(id!==0){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                modelclose(false);
                isOpened();
            }
        ).catch((err)=>{
            console.log(err);
        });
        }
        else{
        EmployeeService.saveEmployee(employee).then((response)=>{
            modelclose(false);
            isOpened();
        }
    ).catch((err)=>{
        console.log(err);
    });
}
    }

    useEffect(()=>{
        if(id!==0){
        EmployeeService.getEmployeeById(id).then(
            (response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
            }).catch((err)=>{
                console.log(err);
            });
    }},[]);

    const closeModal= ()=>{
       // window.alert("cancel is clicked!");
        modelclose(false);
        isOpened();
    }

    const title= ()=>{
        if(id){
            return <h2 className="text-center">Update Employee</h2>;
        }
        else{
            return <h2 className="text-center">Add Employee</h2>;
        }
    }
    return (<div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
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
                                <div className="form-group ">
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
                                <div className="form-group">
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
                                <button onClick={closeModal} className="btn btn-danger">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
    );
}

export default AddEmployeeComponent;
