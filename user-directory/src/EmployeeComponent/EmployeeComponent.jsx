import React from 'react';


const EmployeeDirectory = (props) => {
    const { EmployeeData } = props;

    return (
        <ul className="list-group">
            {EmployeeData.map(el => (
                <li className="list-group-item text-center" key={el.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Role: {el.job}</h6>
                            <p className="card-text">Dept.: {el.dept}</p>
                            <p className='card-text'>Employee Supervisor: {el.supervisor}</p>

                        </div>
                    </div>
                </li>
            ))}
        </ul>

    );
}

export default EmployeeDirectory;