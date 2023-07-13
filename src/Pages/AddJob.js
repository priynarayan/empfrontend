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

export default function AddJob() {
    const [jdes, setJdes] = useState('');
    const [bpay, setBpay] = useState('');
    const [tall, setTall] = useState('');
    const [mall, setMall] = useState('');
    const [hall, setHall] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!jdes || !bpay || !tall || !mall || !hall) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7055/api/JobClasses/AddJobDetail", {
            jobDescription: jdes,
            basicPay: bpay,
            travelAllowance: tall,
            medicalAllowance: mall,
            houseAllowance: hall
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("Job Details added Sucessfully");
            }

        }).catch((error) => {
            if (error.response && error.response.status === 409) {
                alert('Job Details already exist.');
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

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ENTER JOB DETAILS</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Job Description' id='form1' type='text' className='w-100' value={jdes} onChange={(e) => setJdes(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Basic Pay' id='form2' type='number' value={bpay} onChange={(e) => setBpay(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Travel Allowance' id='form3' type='number' value={tall} onChange={(e) => setTall(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Medical Allowance' id='form4' type='number' value={mall} onChange={(e) => setMall(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='House Allowance' id='form4' type='number' value={hall} onChange={(e) => setHall(e.target.value)} />
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
