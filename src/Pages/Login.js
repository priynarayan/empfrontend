import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'mdbreact/dist/css/mdb.css';
import JWT from 'jwt-decode';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

export default function Login() {
  const emailref = useRef('');

  const passwordref = useRef('');

  const navigate = useNavigate();

  const submithandle = async (event) => {
      event.preventDefault();
      const data = {
        emailId: emailref.current.value,
          password: passwordref.current.value,
      };
      ;
      try {
          const res = await axios.post(`https://localhost:7055/api/Users/LoginUser`, data);
          localStorage.setItem("usertoken",res.data.token);
          const jToken = localStorage.getItem("usertoken");
          console.log(jToken);
          const decodedData = JWT(jToken);
          console.log(decodedData.roleName);
          //alert('Log in successfully');
          console.log(res);

          if(decodedData.roleName === "Admin")
          {
            navigate("/adminpage");
          }
          else if(decodedData.roleName === "Employee")
          {
            navigate("/employeepage");
          }
          else
          {
            navigate("/");
          }
      }

      catch (error) {
          //alert(error.response.data);
          console.log(error);
      }

  }
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100 pt-5'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-4 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">User Login</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" ref={emailref}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" ref={passwordref}/>

              <MDBBtn size='lg' type="button" onClick={submithandle}>
                Login
              </MDBBtn>

              <hr className="my-4" />
              <p style={{textAlign: 'center', size: '14'}}>All rights are reserved!</p>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}