import '../App.css';
import axios from 'axios';
import React from 'react';
const DisplayUser=(props)=>{
    console.log(props.data);
    const abc=localStorage.getItem('usertoken');
    console.log(props);
     function del(){
       axios.delete(`https://localhost:7055/api/Users/DeleteList?id=${props.uid}`,{
            headers:{
                 'Authorization': `Bearer ${abc}`
            }
       })
        .then((response) =>{
            alert('User deleted successfully');
            console.log(response);
        });
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

    <form className="form">      
            <button className="mx-2" onClick={del}>Delete</button>
    </form>
</div>
</li>
    </>
    );
}

export default DisplayUser;