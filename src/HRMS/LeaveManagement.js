import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import BASE_URL_9091 from '../user/AllRounder/HRMSUrl';
//import './LeaveManagement.css';  Make sure to create appropriate CSS for responsiveness

const LeaveManagement = () => {
    const [getAllLeave, setGetAllLeave] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL_9091}/api/leave_type`).then((res) => {
            console.log(res.data.object);
            setGetAllLeave(res.data.object);
        })
    }, [])
    return (


        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Leave Management</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Leave Management</h4>
                        <a className="TitleLink" href="employee-management-add.html">Add New Employee</a>
                    </div>

                    <div className="CommonTabs2">
                        <ul>
                            <li><a href="leave-balance-type.html">Leave Balance & type</a></li>
                            <li><a href="leave-policy.html">Leave Policy</a></li>
                        </ul>
                    </div>

                    <div className="FilterArea">
                        <div className="FilterLeft">
                            <div className="form-group">
                                <label>Search</label>
                                <input type="text" className="form-control" placeholder="Search Employee by name" />
                            </div>
                            <div className="form-group">
                                <label>From</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>To</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Leave Name</label>
                                <select className="form-control">
                                    <option disabled>Select</option>
                                    {getAllLeave.map((data, key) => {
                                        return (
                                            <option key={key} value={data.leaveName}>{data.leaveName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control">
                                    <option>Pending</option>
                                    <option>Approve</option>
                                    <option>Reject</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>&nbsp;</label>
                                <button className="Button">Apply</button>
                                <button className="Button Cancel"><i className="fa fa-refresh"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="TableList">
                        <table style={{ width: '120%' }}>
                            <thead>
                                <tr>
                                    <th>Leave ID</th>
                                    <th>Employee Name</th>
                                    <th>Applied On</th>
                                    <th>Requested Leave Date</th>
                                    <th>Leave Type</th>
                                    <th>Comments for HR</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>VNU101</td>
                                        <td>Kim</td>
                                        <td>April 10 at 10:00 PM</td>
                                        <td>May 22 ' 2024</td>
                                        <td>Casual Leave</td>
                                        <td>I want some urgent work</td>
                                        <td><span className="Green">Accepted</span></td>
                                        <td>
                                            <span className="Green">Accepted</span>
                                            <span className="Red">Reject</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="PaginationBox">
                        <div className="PaginationLeft">
                            <p>Total Records : <span>200</span></p>
                        </div>
                        <div className="PaginationRight">
                            <ul>
                                <li><a href='/'><i className="fa fa-angle-double-left"></i></a></li>
                                <li><a href='/'><i className="fa fa-angle-left"></i></a></li>
                                <li className="active"><a href='/'>1</a></li>
                                <li><a href='/'>2</a></li>
                                <li><a href='/'>3</a></li>
                                <li><a href='/'><i className="fa fa-angle-right"></i></a></li>
                                <li><a href='/'><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LeaveManagement;
