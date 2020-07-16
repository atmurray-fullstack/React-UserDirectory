import React, { useState } from 'react';

import EmployeeComponent from '../EmployeeComponent/EmployeeComponent'
import SupervisorButton from '../SupervisorButton/SupervisorButton'


const EmployeeDirectory = (props) => {

    const { EmployeeData } = props;
    const [dept, setDept] = useState('');
    const [job, setJob] = useState('');
    const [supe, setSupe] = useState('')
    // let employees = []

    // if (supe.length > 1) {
    //     employees = EmployeeData.map((el, i) => {
    //         return el.supervisor === supe ?
    //             EmployeeData[i] :
    //             null
    //     })
    // } else if (supe.length <= 1) {
    //     employees = EmployeeData
    // }


    return (
        <div className='row'>
            <div className='col-3 d-flex flex-column mt-4'>
                <button type="button" className="btn btn-primary btn-lg mb-5 mt-3">Sort by Dept</button>
                <button type="button" className="btn btn-secondary btn-lg mb-4">Sort by Job</button>
                <SupervisorButton onClick={(event) => setSupe(event.target.id)} EmployeeData={EmployeeData} />
            </div>

            <div className='col-6 d-flex flex-column mx-auto align-center '>

                <EmployeeComponent EmployeeData={EmployeeData} />
            </div>

        </div>

    );
}


const deptSort = (event) => {
    console.log(event.target.value)
}






export default EmployeeDirectory;