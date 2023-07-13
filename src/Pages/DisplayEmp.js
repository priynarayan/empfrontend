import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const DisplayEmp=(props)=>{
    console.log(props.data);
    const navigate = useNavigate();
    //const abc=localStorage.getItem('usertoken');
    console.log(props);
    function UpdateDet(){
        navigate('/updatedetl');
    }
     
    
return (
    <>
    <li className="meal">
<div>
    <h3>{props.uid}. {props.fname} {props.lname}</h3>
    <div className="email">{props.email}</div>
    <div className="gen">{props.gen}</div>
    <div className='pnum'><b>Phone Number: </b>{props.phone}</div>
    <div className='uadd'><b>Address: </b>{props.add}</div>
    <br></br>

    <form className="form">      
            <button className="mx-2" onClick={UpdateDet}>Edit</button>
    </form>
</div>
</li>
    </>
    );
}

export default DisplayEmp;