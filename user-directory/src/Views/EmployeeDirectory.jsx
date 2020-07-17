import React, { useState } from 'react';

import EmployeeComponent from '../EmployeeComponent/EmployeeComponent'
import SupervisorButton from '../SupervisorButton/SupervisorButton'


const EmployeeDirectory = (props) => {

    let { EmployeeData } = props;
    const [dept, setDept] = useState('');
    const [job, setJob] = useState('');
    const [supe, setSupe] = useState('')
    const [emp, setEmp] = useState(EmployeeData)

    const handleSupeButtonPress = (event) => {
        let arr = [];
        if (event === 'all') {
            setEmp(EmployeeData)
            return
        }
        let x = event.target.id;
        EmployeeData.forEach(el => {
            if (el.supervisor == x) {
                arr.push(el)
            }
        })
        setEmp(arr)
    }


    return (
        <div className='row'>
            <div className='col-3 d-flex flex-column mt-4'>
                <button id='dept' onClick={(event) => { typeSort(event) }} type="button" className="btn btn-primary btn-lg mb-5 mt-3">Sort by Dept</button>
                <button id='job' type="button" className="btn btn-secondary btn-lg mb-5">Sort by Job</button>
                <button type="button" className="btn btn-danger btn-lg mb-4" onClick={() => { handleSupeButtonPress('all') }}>Display All Employees</button>

                <SupervisorButton onClick={(event) => handleSupeButtonPress(event)} EmployeeData={EmployeeData} />
            </div>

            <div className='col-6 d-flex flex-column mx-auto align-center '>

                <EmployeeComponent EmployeeData={emp} />
            </div>

        </div>

    );
}



const typeSort = (event) => {
    if (event.target.id = 'dept') {
        let sortArr = [];
        EmployeeData.forEach((el, ind) => {
            for (let i = ind + 1; i < EmployeeData.length; i++) {

            }
        })
        console.log(event.target.id)

    }
}






export default EmployeeDirectory;