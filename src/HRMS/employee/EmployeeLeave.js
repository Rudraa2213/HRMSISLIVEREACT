import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';

const EmployeeLeave = () => {

    const [getAllLeave, setGetAllLeave] = useState([]);
    const [getRequest, setRequest] = useState([]);
    const empId = localStorage.getItem("empId");
    // useEffect(() => {
    //     axios.get(`${BASE_URL_9091}/api/leave_type`).then((res) => {
    //         console.log(res.data.object, "_____________________________+");
    //         setGetAllLeave(res.data.object);
    //     })
    // }, []);
    // useEffect(() => {
    //     axios.get(`${BASE_URL_9091}/api/leave_request`).then((res) => {
    //         setRequest(res.data);
    //         console.log(res.data);
    //     })
    // }, [])


    const [formData, setFormData] = useState({
        employee: { "id": `${empId}` },
        type: '',
        startDate: '',
        endDate: '',
        reason: '',
        status: 'Pending',
        adminComment: '',
        createdAt: new Date().toISOString().slice(0, 16) // Default to current date-time
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL_9091}/api/leave_request/create`, formData).then((res) => {
            console.log(res.data);
        });
    };

    return (


        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Leave Management</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Leave Management</h4>
                    </div>
                    <div className="FilterArea">
                        <div className="FilterLeft">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        className="form-control"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDate">End Date</label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        className="form-control"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Leave Name</label>
                                    <select className="form-control" id='type' name='type' onChange={handleChange} required>
                                        <option disabled>Select</option>
                                        {getAllLeave.map((data, key) => {
                                            return (
                                                <option key={key} value={data.leaveName}>{data.leaveName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Reason</label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        className="form-control"
                                        rows="3"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        className="form-control"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option>Pending</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>&nbsp;</label>
                                    <button className="Button">Apply</button>
                                    <button className="Button Cancel"><i className="fa fa-refresh"></i></button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="TableList">
                        <table style={{ width: '120%' }}>
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Leave ID</th>
                                    <th>Applied On</th>
                                    <th>Requested Leave Date</th>
                                    <th>Leave Type</th>
                                    <th>Comments for HR</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getRequest.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.employee.name}</td>
                                            <td>{data.id}</td>
                                            <td>{data.startDate.slice(0, 10)}</td>
                                            <td>{data.endDate.slice(0, 10)}</td>
                                            <td>{data.type}</td>
                                            <td>{data.reason}</td>
                                            <td><span className="bg-dark">{data.status}</span></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="PaginationBox">
                        <div className="PaginationLeft">
                            <p>Total Records : <span>{getRequest.length}</span></p>
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

export default EmployeeLeave;
