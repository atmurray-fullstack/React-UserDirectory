import React, { useState } from 'react';


const EmployeeDirectory = (props) => {


    const { Employeedata } = props;

    return (
        <div className='row'>
            <div class='buttonContainer' className='col-3 d-flex flex-column'>
                <button type="button" className="btn btn-primary btn-lg mb-5">Sort by Dept</button>
                <button type="button" className="btn btn-secondary btn-lg">Sort by Job</button>


            </div>
            <div className='col-6 d-flex flex-column'>


            </div>

        </div>

    );
}

export default EmployeeDirectory;