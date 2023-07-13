import '../App.css';
import axios from 'axios';
import React from 'react';
const DisplaySalary=(props)=>{
    console.log(props.data);
    const abc=localStorage.getItem('usertoken');
    console.log(props);
     function del(){
       axios.delete(`https://localhost:7055/api/Salaries/DeleteSalaryDetail?id=${props.sid}`,{
            headers:{
                 'Authorization': `Bearer ${abc}`
            }
       })
        .then((response) =>{
            alert('Salary details deleted successfully');
     console.log(response);
        });
    }
return (
    <>
    <li className="meal">
<div>
    <h4>SALARY ID: {props.sid}.</h4>
    {/* <h3>Job Description: <b>{props.jdes}</b></h3> */}
    <div className="gen"><b>Job Class ID: </b>{props.jclass}</div>
    <div className="gen"><b>Bank Account: </b>{props.acc}</div>
    <div className="gen"><b>Amount: </b>RS. {props.amt}</div>
    <div className='gen'><b>Tax: </b>{props.tx}%</div>
    <div className='gen'><b>Bonus: </b>RS. {props.bns}</div>

    <form className="form">      
            <button className="mx-2" onClick={del}>Delete</button>
    </form>
</div>
</li>
    </>
    );
}

export default DisplaySalary;