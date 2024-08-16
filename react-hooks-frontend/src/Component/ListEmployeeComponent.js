import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
import AddEmployeeComponent from "./AddEmployeeComponent";
import Modal from 'react-modal';
import DeleteComponent from "./DeleteComponent";

//import { Link } from 'react-router-dom';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    
  };
Modal.setAppElement('#root');
const ListEmployeeComponent = ()=>{
    const [id,setId]=useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [employees,setEmployees]=useState([]);
    const [del,setDel]=useState(false);

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
    // const deleteEmployee=(id)=>{
    //     EmployeeService.deleteEmployeeById(id).then((response)=>{
    //         getEmployees();
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // }

    const deleteEmployee=(id)=>{
        setId(id);
        setDel(true);
        setIsOpen(true);
    }
    const openModal=(e)=>{
        setDel(false);
        setId(e);
        setIsOpen(true);
      }
    
      function closeModal() {
        setDel(false);
        setIsOpen(false);
      }
     
    
    return (
        <div>
            
            {del?<Modal
        isOpen={modalIsOpen}
        onAfterOpen={()=>{}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DeleteComponent eid={id} isOpened={getEmployees} modelclose={setIsOpen}/>
        
            </Modal>:
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={()=>{}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddEmployeeComponent id={id} isOpened={getEmployees} modelclose={setIsOpen}/>
        
            </Modal>}
            <div className="container">
                <center><h2>List Of Empoyees</h2></center>
                <button style={{marginBottom:"5px"}}  onClick={()=>openModal(0)} className="btn btn-primary">ADD Student</button>
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
                                    <td><button className="btn btn-info" onClick={()=>openModal(employee.id)}>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ListEmployeeComponent;
