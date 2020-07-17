import React, { useState } from 'react';

import EmployeeComponent from '../EmployeeComponent/EmployeeComponent'
import SupervisorButton from '../SupervisorButton/SupervisorButton'


const EmployeeDirectory = (props) => {

    let { EmployeeData } = props;
    const [emp, setEmp] = useState(EmployeeData)

    const handleSupeButtonPress = (event) => {
        let arr = [];
        if (event === 'all') {
            setEmp(EmployeeData)
            return
        }
        let x = event.target.id;
        EmployeeData.forEach(el => {
            if (el.supervisor === x) {
                arr.push(el)
            }
        })
        setEmp(arr)
    }

    const typeSort = (event) => {
        let sort = ''
        let empArr = [];
        event.target.id === 'dept' ? sort = 'dept' : sort = 'job'
        let sortArr = [];
        EmployeeData.forEach((el, ind) => {
            if (sortArr.includes(el[sort])) {
                return
            }
            empArr.push(el);
            for (let i = ind + 1; i < EmployeeData.length; i++) {

                if (EmployeeData[i][sort] === el[sort]) {
                    console.log(EmployeeData[i][sort])
                    sortArr.push(EmployeeData[i][sort]);
                    empArr.push(EmployeeData[i]);
                }
            }
        })

        setEmp(empArr)
    }

    return (
        <div className='row'>
            <div className='col-3 d-flex flex-column mt-4'>
                <button id='dept' onClick={(event) => { typeSort(event) }} type="button" className="btn btn-primary btn-lg mb-5 mt-3">Sort by Dept</button>
                <button id='job' onClick={(event) => { typeSort(event) }} type="button" className="btn btn-secondary btn-lg mb-5">Sort by Job</button>
                <button type="button" className="btn btn-danger btn-lg mb-4" onClick={() => { handleSupeButtonPress('all') }}>Display All Employees</button>

                <SupervisorButton onClick={(event) => handleSupeButtonPress(event)} EmployeeData={EmployeeData} />
            </div>

            <div className='col-6 d-flex flex-column mx-auto align-center '>

                <EmployeeComponent EmployeeData={emp} />
            </div>

        </div>

    );
}



export default EmployeeDirectory;