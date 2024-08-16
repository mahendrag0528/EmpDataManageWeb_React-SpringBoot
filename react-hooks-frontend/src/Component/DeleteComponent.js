import EmployeeService from "./EmployeeService";
import { useState } from "react";

export default function DeleteComponent({ eid,isOpened,modelclose}){
    const [data,setData]=useState({
        id:'',
        firstName:'',
        lastName:'',
        emailId:''
    });
    EmployeeService.getEmployeeById(eid).then((response)=>{
        setData(response.data);
    }).catch((err)=>{
        console.log(err);
    });
    
    const submited=()=>{
        EmployeeService.deleteEmployeeById(eid).then((response)=>{
            modelclose(false);
            isOpened();
        }).catch((err)=>{
            console.log(err);
        });
    }

    const closed=()=>{
        modelclose(false);
        isOpened();
    }
    return (
        <div>
            <h2>The data will be deleted..</h2>
            <pre>Id:{data.id} <br/>
                 First Name:{data.firstName}  <br/>
                 Last Name:{data.lastName} <br/>
                 Email Id:{data.emailId} <br/>
            </pre>
            <button onClick={closed} className="btn btn-secondary">cancel</button><button onClick={submited} className="btn btn-danger" style={{marginLeft:"8px"}}>Delete</button>
        </div>
    );
}
