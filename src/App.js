import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import AdminSignup from './Pages/AdminSignup';
import EmpSignup from './Pages/EmpSignup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import AdminPage from './Pages/AdminPage';
import EmployeePage from './Pages/EmployeePage';
import GetJob from './Pages/GetJob';
import GetSalary from './Pages/GetSalary';
import GetUser from './Pages/GetUser';
import AddJob from './Pages/AddJob';
import AddSalary from './Pages/AddSalary';
import GetEmp from './Pages/GetEmp';
import AddPaySlip from './Pages/AddPaySlip';
import UpdateEmp from './Pages/UpdateEmp';
// import GetPaySlip from './Pages/GetPaySlip';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Navbar />}>

            <Route index element={<Home />} />

            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='adminsignup' element={<AdminSignup />} />
            <Route path='empsignup' element={<EmpSignup />} />

            </Route>

            <Route path='adminpage' element={<AdminPage />} />
            <Route path='employeepage' element={<EmployeePage />} />

            <Route path='userdetpage' element={<GetUser />} />
            <Route path='jobdetpage' element={<GetJob />} />
            <Route path='saldetpage' element={<GetSalary />} />
            <Route path='empdetbyid' element={<GetEmp />} />
            <Route path='addjobdetail' element={<AddJob />} />
            <Route path='addsalarydetail' element={<AddSalary />} />
            <Route path='payslip' element={<AddPaySlip />} />
            <Route path='updatedetl' element={<UpdateEmp />} />
            {/* <Route path='getpayslip/:payid' element={<GetPaySlip/>} /> */}
            

        </Routes>

      </Router>

    </>

  );
}

export default App;
