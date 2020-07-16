import React from 'react';

const SupervisorButton = (props) => {

    const { EmployeeData } = props
    let supeArr = [];
    EmployeeData.forEach((el, index) => {
        return supeArr.includes(el.supervisor) ?
            null :
            supeArr.push(el.supervisor)
    })
    for (let i = 0; i < supeArr.length; i++) {
        supeArr[i] = {
            key: i,
            supervisor: supeArr[i]
        }
    }
    return (
        <>
            <h2>Filter by Supervisor</h2>
            <ul className='list-group text-left'>
                {

                    supeArr.map(el => (
                        <li className="list-group-item text-center" key={el.id}>
                            <button id={el.supervisor} onClick={props.onClick} type="button" className="btn btn-dark btn-block ">{el.supervisor}</button>
                        </li>

                    ))
                }
            </ul>
        </>

    );
}

export default SupervisorButton;