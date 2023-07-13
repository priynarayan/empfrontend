import '../App.css';
import axios from 'axios';
import React from 'react';
const DisplayJob=(props)=>{
    console.log(props.data);
    const abc=localStorage.getItem('usertoken');
    console.log(props);
     function del(){
       axios.delete(`https://localhost:7055/api/JobClasses/DeleteJobList?id=${props.jid}`,{
            headers:{
                 'Authorization': `Bearer ${abc}`
            }
       })
        .then((response) =>{
            alert('job details deleted successfully');
     console.log(response);
        });
    }
return (
    <>
    <li className="meal">
<div>
    <h4>JOB ID: {props.jid}.</h4>
    <h3>Job Description: <b>{props.jdes}</b></h3>
    <div className="gen"><b>Basic Pay: </b>{props.bpay}</div>
    <div className="gen"><b>Travel Allowance: </b>{props.ta}</div>
    <div className='gen'><b>Medical Allowance: </b>{props.ma}</div>
    <div className='gen'><b>House Allowance: </b>{props.ha}</div>

    <form className="form">      
            <button className="mx-2" onClick={del}>Delete</button>
    </form>
</div>
</li>
    </>
    );
}

export default DisplayJob;