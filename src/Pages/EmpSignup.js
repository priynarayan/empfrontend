import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput
    //MDBCheckbox,
    //MDBIcon
}
    from 'mdb-react-ui-kit';

export default function EmpSignup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [gen, setGen] = useState('');
    const [phone, setPhn] = useState('');
    const [add, setAdd] = useState('');
    const handleSubmit = (e) => {
  
      e.preventDefault();
  
      if (!fname || !lname || !email || !pass || !age || !gen || !phone || !add) {
        alert('Please fill in all fields.');
        return;
      }
      Axios.post("https://localhost:7055/api/Users/RegisterEmployee", {
        firstName: fname,
        lastName: lname,
        emailId: email,
        password: pass,
        age: age,
        gender: gen,
        phoneNumber: phone,
        userAddress: add
      }).then((response) => {
  
        console.log(response);
  
        if (response.status === 200) {
          alert("User Registered Sucessfully");
        }
  
      }).catch((error) => {
        if (error.response && error.response.status === 409) {
          alert('User already registered.');
        } 
        else {
          alert('An error occurred. Please try again.');
        }
        console.log(error);
      })  
    }


    return (
        <MDBContainer fluid>

            <div className="p-2 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-2 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-3 text-center'>

                    <h2 className="fw-bold mb-5">Employee Register</h2>
                    <form id="form" onSubmit={handleSubmit} >
                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' id='form1' label='First name' type='text' name='First_name' value={fname} onChange={(e) => setFname(e.target.value)} />
                        </MDBCol>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' name='Last_name' value={lname} onChange={(e) => setLname(e.target.value)}/>
                        </MDBCol>
                    </MDBRow>



                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Email Address' id='form1' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </MDBCol>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
                        </MDBCol>
                    </MDBRow>



                    <MDBRow>
                        <MDBCol col='6'>
                            <div className="form-outline mb-4">
                                <select id="formGender" className="form-select form-select-md" name='Gender' value={gen} onChange={(e) => setGen(e.target.value)}>
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <label className="form-label" htmlFor="formGender">Gender</label>
                            </div>
                        </MDBCol>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Age' id='form1' type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)}/>
                        </MDBCol>
                    </MDBRow>



                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='PhoneNumber' id='form1' type='tel' name='phonenum' value={phone} onChange={(e) => setPhn(e.target.value)}/>
                        </MDBCol>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='text' name='address' value={add} onChange={(e) => setAdd(e.target.value)}/>
                        </MDBCol>
                    </MDBRow>
                    </form>

                    <MDBBtn className='w-100 mb-4' size='md' type='submit' form="form">Sign Up</MDBBtn>

                    <hr className="my-4" />

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}