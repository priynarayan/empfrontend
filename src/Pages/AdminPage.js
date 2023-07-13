import '../Styles/AdminPage.css';
//import { NavLink } from 'react-bootstrap';
//import pen from '../Assests/anime.png';
import { NavLink } from 'react-router-dom';

export default function AdminPage() {
    return (
        <>
        <div className='conname'>
        <h3 className='pt-3 adminpara'>HELLO ADMIN!</h3>
            <div className="container"> 
                <div className="box-container pb-2">
                        <div className="box">
                            <p><b>USER SECTION</b></p>
                            <hr style={{ background: 'lime', color: 'black', borderColor: 'lime', height: '4px', }} />
                            <NavLink className="navhov" to="/userdetpage"><h4 className='navhd'>Get User Details</h4></NavLink>
                        </div>
                        <div className="box">
                            <p><b>JOB SECTION</b></p>
                            <hr style={{ background: 'lime', color: 'lime', borderColor: 'lime', height: '4px', }} />
                            <NavLink className="navhov" to="/addjobdetail"><h4 className='navhd'>Add Job Details</h4></NavLink>
                            <NavLink className="navhov" to="/jobdetpage"><h4 className='navhd'>Get Job Details</h4></NavLink>
                        </div>
                        <div className="box-last">
                            <p><b>SALARY SECTION</b></p>
                            <hr style={{ background: 'lime', color: 'lime', borderColor: 'lime', height: '4px', }} />
                            <NavLink className="navhov" to="/addsalarydetail"><h4 className='navhd'>Add Salary Details</h4></NavLink>
                            <NavLink className="navhov" to="/saldetpage"><h4 className='navhd'>Get Salary Details</h4></NavLink>
                        </div>
                </div>
            </div>
            </div>
        </>
    );
}