import { useEffect, useState } from "react"
import axios from 'axios';
import DisplayJob from './DisplayJob';
import '../App.css';
import JWT from "jwt-decode";

const GetJob = () => {
    const [List, setList] = useState([]);
    const jTokenget = localStorage.getItem('usertoken');
    var decoded = JWT(jTokenget);
    useEffect(() => {
        axios.get(`https://localhost:7055/api/JobClasses/JobDetailList`, decoded)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((error) => {
                alert(' No Job Found.');
                console.log(error);
            })
    }, []);

    console.log(List);
    const jobList = List.map(job =>
        <DisplayJob
            jid={job.jobId}
            jdes={job.jobDescription}
            bpay={job.basicPay}
            ta={job.travelAllowance}
            ma={job.medicalAllowance}
            ha={job.houseAllowance}
        />);
    return (
        <>
            {jobList}
        </>);
}

export default GetJob;