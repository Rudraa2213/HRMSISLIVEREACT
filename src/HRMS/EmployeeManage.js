import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL_9091 from '../user/AllRounder/HRMSUrl';

function EmployeeManage() {

    const [getAll, setGetAll] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL_9091}/employee/list`).then((res) => {
            console.log(res.data);
            setGetAll(res.data);
        });

    }, [])



    return (
        <Fragment>
            <div className="container-fluid py-4">

                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Management</li>
                    </ol>
                </nav>
                <hr />
            </div>

            <div className="container-fluid" style={{ overflow: "hidden" }}></div>
            <div class="WrapperArea">
                <div class="WrapperBox">
                    <div class="TitleBox text-nowrap">
                        <h4 class="Title">Employee Management</h4>
                        <div className="container text-end">
                            <h4 className='h4'>
                                <button className='btn btn-sm btn-primary'><Link className='text-decoration-none text-white' to="/admindash/empadd">Add New Employee</Link></button>
                            </h4>
                        </div>
                    </div>
                    <div className='container my-2'>
                        <ul className='list-group list-group-verticle'>
                            <li className='list-group-item  my-2 rounded w-75'>
                                <Link className='text-decoration-none text-nowrap' to={"/admindash/dash"}>PERFORMANCE REVIEW</Link>
                            </li>
                            <li className='list-group-item rounded w-75'>
                                <Link className='text-decoration-none text-nowrap' to={"/admindash/dash"}>DISCIPLINARY ACTIONS</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="row gx-3 gy-2 align-items-center">
                        <div class="col-auto my-2">
                            <button type="submit" className="Button dwtb">Apply</button>
                            <label>&nbsp;</label>
                            <button type='reset' className="Button Cancel"><i className="fa fa-refresh"></i></button>
                        </div>
                    </div>


                    <div class="TableList">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>
                                    <th>Phone Number</th>
                                    <th>Email Address</th>
                                    <th>Date of Birth</th>
                                    <th>Pancard Number</th>
                                    <th>Reporting Manager</th>
                                    <th>Joining Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getAll.map((data, key) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.contactNumber}</td>
                                            <td>{data.email}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.pancardNumber}</td>
                                            <td>{data.under}</td>
                                            <td>{data.dateOfJoining}</td>
                                            <td>
                                                <div class="Actions">
                                                    <label class="Switch">
                                                        <input type="checkbox" />
                                                        <span class="slider"></span>
                                                    </label>
                                                    <a class="Blue" href="employee-management-details.html">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <a class="Green" href="employee-management-edit.html">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a href="/" class="Red" data-toggle="modal" data-target="#DeleteModal">
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div class="PaginationBox">
                        <div class="PaginationLeft">
                            <p>Total Records : <span>{getAll.length}</span></p>
                        </div>
                        <div class="PaginationRight">
                            <ul className='d-flex justify-content-end me-5' >
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/"><i class="fa fa-angle-double-left"></i></a></li>
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/"><i class="fa fa-angle-left"></i></a></li>
                                <li className="list-group-item ms-2 active"><a className='text-decoration-none text-secondary' href="/">1</a></li>
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/">2</a></li>
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/">3</a></li>
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/"><i class="fa fa-angle-right"></i></a></li>
                                <li className='list-group-item ms-2'><a className='text-decoration-none text-secondary' href="/"><i class="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default EmployeeManage
