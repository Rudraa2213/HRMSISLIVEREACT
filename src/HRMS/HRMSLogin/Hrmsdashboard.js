import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';

function Hrmsdashboard() {

    const storedData = JSON.parse(localStorage.getItem("object"));
    console.log(storedData);
    const [getAll, setGetAll] = useState([]);
    useEffect(() => {

        axios.get(`${BASE_URL_9091}/employee/list`).then(res => {
            console.log(res.data);
            setGetAll(res.data);
        });

    }, []);


    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Dashboard</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="WrapperArea">
                    <div className="WrapperBox">
                        <div className="TitleBox">
                            <h4 className="Title">Dashboard</h4>
                        </div>
                        <form className="row gx-3 gy-2 align-items-center">
                            <div className="col-sm-3">
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" id="floatingInput1" />
                                    <label hrmlfor="floatingInput1">From Date</label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" id="floatingInput2" />
                                    <label hrmlfor="floatingInput2">To Date</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="Button dwtb">Apply</button>
                                <label>&nbsp;</label>
                                <button type='reset' className="Button Cancel"><i className="fa fa-refresh"></i></button>
                            </div>
                            <div className="col-auto ms-xxl-auto ms-xl-auto ms-lg-auto">
                                <div className="form-floating mb-3 d-inline">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option>Select </option>
                                        <option value="Today">Today</option>
                                        <option value="Week">This Week</option>
                                        <option value="Month">This Month</option>
                                    </select>
                                    <label hrmlfor="floatingSelect">Timeframe</label>
                                </div>
                            </div>
                        </form>

                        <div className="TitleBox">
                            <h4 className="Title">Statics Overview</h4>
                        </div>

                        <div className="DashboardArea">
                            <div className="row">
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard1 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Total Employees</p>
                                            <h5>{getAll.length}</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard2 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Employees Linked to Early Access Program</p>
                                            <h5>506</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard3 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>
                                                Total Early Amount

                                                Requested</p>
                                            <h5>$506</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard4 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>
                                                Total Leaves Requested</p>
                                            <h5>06</h5>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="TitleBox">
                            <h4 className="Title">Daily Overview</h4>
                        </div>

                        <div className="DashboardArea">
                            <div className="row">
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard5 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Total Employees on Leave

                                            </p>
                                            <h5>50</h5>
                                        </article>
                                    </div>
                                </div>

                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard6 dwtb">
                                        <aside><span><i className="fa fa-product-hunt"></i></span></aside>
                                        <article>
                                            <p>
                                                Total Employee

                                                Attendance</p>
                                            <h5>200</h5>
                                        </article>
                                    </div>
                                </div>

                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard7 dwtb">
                                        <aside><span><i className="fa fa-database"></i></span></aside>
                                        <article>
                                            <p>Pending Leave Requests</p>
                                            <h5>20</h5>
                                        </article>
                                    </div>
                                </div>

                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard8 dwtb">
                                        <aside><span><i className="fa fa-server"></i></span></aside>
                                        <article>
                                            <p>
                                                Pending Early Wage <br />
                                                Access Requested</p>
                                            <h5>10</h5>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Hrmsdashboard
