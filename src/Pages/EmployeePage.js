import '../Styles/EmployeePage.css';
//import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function EmployeePage() {
    return (
        <>
        <div className='conname'>
        <h3 className='pt-3 adminpara'>HELLO CONTRACTOR!</h3>
            <div className="container cont">
                <div className="box-container bxct pb-2">
                        <div className="box bbxx">
                            <p><b>EMPLOYEE DETAILS ARE HERE</b></p>
                            <hr style={{ background: 'lime', color: 'lime', borderColor: 'lime', height: '4px', }} />
                            <NavLink className="navhov" to="/empdetbyid"><h3 className='navhdst'>Show My Details</h3></NavLink>
                            {/* <NavLink className="navhov" to="/payslip"><h3 className='navhdnd'>Pay Slip</h3></NavLink> */}
                        </div>
                </div>
            </div>
            </div>
        </>
    );
}