import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const GetPaySlip = () => {
    const { payid } = useParams();
    const [List, setList] = useState([]);
    //const jTokenget = localStorage.getItem('usertoken');
    useEffect(() => {
        axios.get(`https://localhost:7055/api/Payrolls/GetSlipById?id=${payid}`)
            .then((res) => {
                console.log(res.data);
                setList(res.data);

            })
            .catch((error) => {
                alert(' No User Found.');
                console.log(error);
            })
    }, []);
    
    return (
        <>      
                {
                    List((item)=>{
                        <li className="meal">
                            <div>
                                <div>User ID: {item.userId}</div>
                                <div>User ID: {item.salaryId}</div>
                                <div>User ID: {item.jobClassId}</div>
                                <div className="email">{item.employeeName}</div>
                                <div className="gen">{item.jobName}</div>
                                <div className='pnum'><b>Role Name: </b>{item.roleNameame}</div>
                                <div className='uadd'><b>Net Salary: </b>{item.netSalary}</div>
                                <br></br>

                                {/* <form className="form">
                                    <button className="mx-2" onClick={UpdateDet}>Edit</button>
                                </form> */}
                            </div>
                        </li>
                    })
                }
        </>);
}

export default GetPaySlip;
