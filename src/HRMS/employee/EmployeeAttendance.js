import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';

const EmployeeAttendance = () => {
    const empId = localStorage.getItem("empId");
    const [attendance, setAttendance] = React.useState([]);
    // useEffect(() => {
    //     axios.get(`${BASE_URL_9091}/api/attendance/records?employeeId=${empId}`).then(res => { console.log(res.data); setAttendance(res.data) });
    // }, [empId])

    // Example data as an array of objects
    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Attendance & Timesheet</li>
                    </ol>
                </nav>
                <hr />
            </div>

            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title pb-3">Attendance & Timeline Management</h4>
                        <Link className="TitleLink btn btn-primary text-white" to={"/employeedash/dash"}><i className="fa fa-file-excel-o"></i> Export report to Excel </Link>
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
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Attendance ID</th>
                                    <th>Attendance Date</th>
                                    <th>Working Hrs</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>
                                    <th>Late By</th>
                                    <th>Cooardinates</th>
                                    <th>Break Time</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.attendanceDate}</td>
                                        <td>9:30AM to 5:30PM</td>
                                        <td>{data?.punchInAction} {data?.punchInTime?.slice(11, 16)}</td>
                                        <td>{data?.punchOutAction} {data?.punchOutTime?.slice(11, 16)}</td>
                                        <td>--</td>
                                        <td>{data?.latitude},{data?.longitude}</td>
                                        <td>35Min</td>
                                        <td>{data.remarks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EmployeeAttendance;
