import React, { Fragment } from 'react';

const PayrollEarning = () => {
    // Example data as an array of objects
    const employees=[
        { id: 'VNU101', name: 'Kim', totalWorkingHrs: '9 hrs', overtime: '2 hrs', payPerHr: '$ 45', grossSalary: '$ 4500', perksBenefits: '$ 40', otherDeductions: '-$ 10', earlyAccess: '-$ 100', netSalary: '$ 2000' },
        { id: '23238', name: 'Rudraa', totalWorkingHrs: '9 hrs', overtime: '0 hrs', payPerHr: 'Rs 45', grossSalary: 'Rs 24000', perksBenefits: "52 Rs", otherDeductions: '-$ 10', earlyAccess: '-$ 100', netSalary: '$ 2000' },
        { id: '23212', name: 'Rohit', totalWorkingHrs: '9 hrs', overtime: '0 hrs', payPerHr: 'Rs 45', grossSalary: 'Rs 24000', perksBenefits: "52 Rs", otherDeductions: '-$ 10', earlyAccess: '-$ 100', netSalary: '$ 2000' },
        // Add more employees as needed
    ];

    return (
        <Fragment>

            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Payroll Earning</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Earnings Accessed</h4>
                        <div>
                            <a className="TitleLink m-2" href="earnings-early-wage.html">Early wage access requests</a>
                            <a href="earning-payrol.html" className="TitleLink m-2">Run Payroll</a>
                        </div>
                    </div>

                    <div className="FilterArea">
                        <div className="FilterLeft">
                            <div className="form-group">
                                <label>Search</label>
                                <input type="search" className="form-control" placeholder="Search Employee by name" />
                            </div>
                            <div className="form-group">
                                <label>From Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>To Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>&nbsp;</label>
                                <button className="Button">Apply</button>
                                <button className="Button Cancel"><i className="fa fa-refresh"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="TableList">
                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Employee Name</th>
                                        <th>Total Working Hrs</th>
                                        <th>Overtime</th>
                                        <th>Pay Per Hr</th>
                                        <th>Gross Salary</th>
                                        <th>Perks & Benefits</th>
                                        <th>Other Deductions</th>
                                        <th>Early Access</th>
                                        <th>Net Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee, index) => (
                                        <tr key={index}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.totalWorkingHrs}</td>
                                            <td>{employee.overtime}</td>
                                            <td>{employee.payPerHr}</td>
                                            <td>{employee.grossSalary}</td>
                                            <td>{employee.perksBenefits}</td>
                                            <td>{employee.otherDeductions}</td>
                                            <td>{employee.earlyAccess}</td>
                                            <td>{employee.netSalary}</td>
                                            <td>
                                                <div className="Actions">
                                                    <a className="Blue" href="earnings-details.html">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                    <a className="Green" href="earnings-details-edit.html">
                                                        <i className="fa fa-pencil"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PayrollEarning;
