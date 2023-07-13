import { useEffect, useState } from "react"
import axios from 'axios';
import DisplaySalary from './DisplaySalary';
import '../App.css';
import JWT from "jwt-decode";

const GetSalary = () => {
    const [List, setList] = useState([]);
    const jTokenget = localStorage.getItem('usertoken');
    var decoded = JWT(jTokenget);
    useEffect(() => {
        axios.get(`https://localhost:7055/api/Salaries/SalaryDetailList`, decoded)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((error) => {
                alert(' No Salary Details Found.');
                console.log(error);
            })
    }, []);

    console.log(List);
    const salList = List.map(sal =>
        <DisplaySalary
            sid={sal.salaryId}
            jclass={sal.jobClassId}
            acc={sal.bankAcc}
            amt={sal.amount}
            tx={sal.tax}
            bns={sal.bonus}
        />);
    return (
        <>
            {salList}
        </>);
}

export default GetSalary;