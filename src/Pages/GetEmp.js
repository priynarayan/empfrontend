import { useEffect, useState } from "react"
import axios from 'axios';
import DisplayEmp from './DisplayEmp';
import '../App.css';
import JWT from "jwt-decode";

const GetEmp = () => {
    const [List, setList] = useState([]);
    const jTokenget = localStorage.getItem('usertoken');
    var decoded = JWT(jTokenget);
    console.log(decoded.userId);
    useEffect(() => {
        axios.get(`https://localhost:7055/api/Users/EmployeeDetailById?id=${decoded.userId}`, decoded)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
                
            })
            .catch((error) => {
                alert(' No User Found.');
                console.log(error);
            })
    }, []);

    console.log(List);
    const menuList = List.map(menu =>
        <DisplayEmp
            uid={menu.userId}
            fname={menu.firstName}
            lname={menu.lastName}
            gen={menu.gender}
            email={menu.emailId}
            age={menu.age}
            phone={menu.phoneNumber}
            add={menu.userAddress}
            rol={menu.roleId}
        />);
    return (
        <>
            {menuList}
        </>);
}

export default GetEmp;