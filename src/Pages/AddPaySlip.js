import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function AddPaySlip() {
  const Navigate=useNavigate();
    const [uid, setUid] = useState('');
    const [sid, setSid] = useState('');
    const [jid, setJid] = useState('');
    const [ename, setEname] = useState('');
    const [jname, setJname] = useState('');
    const [rname, setRname] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!uid || !sid || !jid || !ename || !jname || !rname) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7055/api/Payrolls/AddUserDetail", {
            userId: uid,
            salaryId: sid,
            jobClassId: jid,
            employeeName: ename,
            jobName: jname,
            roleName: rname
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("user salary Details added Sucessfully");
            }
            Navigate(`getpayslip/${response.data}`);
        }).catch((error) => {
            if (error.response && error.response.status === 409) {
                alert('payslip for current user  already exist.');
            }
            else {
                alert('An error occurred. Please try again.');
            }
            console.log(error);
        })
    }






    return(

    <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
                <form id="form" onSubmit={handleSubmit} >
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ENTER YOUR REQUIRED DETAILS</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='User ID' id='form1' type='text' className='w-100' value={uid} onChange={(e) => setUid(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Salary ID' id='form1' type='text' className='w-100' value={sid} onChange={(e) => setSid(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Job Class ID' id='form2' type='number' value={jid} onChange={(e) => setJid(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Employee Name' id='form3' type='text' value={ename} onChange={(e) => setEname(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Job Name' id='form4' type='text' value={jname} onChange={(e) => setJname(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Role Name' id='form4' type='text' value={rname} onChange={(e) => setRname(e.target.value)} />
                            </div>

                            <MDBBtn className='mb-4' size='lg' type='submit' form='form'>Add Details</MDBBtn>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>

                    </MDBRow>
                </form>
            </MDBCardBody>
        </MDBCard>

    </MDBContainer>
    );
  
}
