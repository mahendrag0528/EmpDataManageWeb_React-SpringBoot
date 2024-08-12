import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
//import AddEmployeeComponent from "./AddEmployeeComponent";
import { Link } from "react-router-dom";


const ListEmployeeComponent = ()=>{

    const [employees,setEmployees]=useState([]);
    //const navigate=useNavigate();
    useEffect(()=>{
        getEmployees();
    },[]);

    const getEmployees =()=>{
        EmployeeService.getAllEmployees().then(
            (response)=>{
                setEmployees(response.data);
            }
        ).catch((err)=>{
            console.log(err);
        });
    }
    const deleteEmployee=(id)=>{
        EmployeeService.deleteEmployeeById(id).then((response)=>{
            getEmployees();
        }).catch((err)=>{
            console.log(err);
        });
    }

   
    return (
        <div className="container">
			<center><h2>List Of Empoyees</h2></center>
            <Link to="add-employee" style={{marginBottom:"5px"}} className="btn btn-primary">ADD Student</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>employee Email Id</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td><Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ListEmployeeComponent;