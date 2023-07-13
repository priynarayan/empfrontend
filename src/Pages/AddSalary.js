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

export default function AddSalary() {
    const [jcid, setJcid] = useState('');
    const [bacc, setBacc] = useState('');
    const [tx, setTx] = useState('');
    const [bns, setBns] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!jcid || !bacc || !tx || !bns) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7055/api/Salaries/AddSalaryDetails", {
            jobClassId: jcid,
            bankAcc: bacc,
            tax: tx,
            bonus: bns
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("Salary Details added Sucessfully");
            }

        }).catch((error) => {
            if (error.response && error.response.status === 409) {
                alert('Salary Details already exist.');
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

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ENTER SALARY DETAILS</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='JobClass ID' id='form1' type='text' className='w-100' value={jcid} onChange={(e) => setJcid(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Bank Account No.' id='form2' type='number' value={bacc} onChange={(e) => setBacc(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Tax' id='form4' type='number' value={tx} onChange={(e) => setTx(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Bonus' id='form4' type='number' value={bns} onChange={(e) => setBns(e.target.value)} />
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
