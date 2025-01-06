import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
// import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RxCross1 } from "react-icons/rx";

const EmployeeDashboard = () => {
    // const [location, setLocation] = useState({ latitude: null, longitude: null });
    // const [isPunchInDisabled, setIsPunchInDisabled] = useState(false);
    // const [isPunchedIn, setIsPunchedIn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showRemarkModal, setShowRemarkModal] = useState(false);
    const [myRemark, setMyRemark] = useState("");
    // const [pendingPunchIn, setPendingPunchIn] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // setLocation({
                    //     latitude: position.coords.latitude,
                    //     longitude: position.coords.longitude,
                    // });
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);

    // useEffect(() => {
    //     const savedPunchInState = localStorage.getItem('isPunchInDisabled');
    //     const savedPunchInStatus = localStorage.getItem('isPunchedIn');
    //     if (savedPunchInState) {
    //         setIsPunchInDisabled(JSON.parse(savedPunchInState));
    //     }
    //     if (savedPunchInStatus) {
    //         setIsPunchedIn(JSON.parse(savedPunchInStatus));
    //     }

    //     const resetPunchInButton = () => {
    //         const now = moment();
    //         const nextMidnight = moment().endOf('day');
    //         const timeToMidnight = nextMidnight.diff(now);

    //         if (timeToMidnight > 0) {
    //             setTimeout(() => {
    //                 localStorage.removeItem('isPunchInDisabled');
    //                 localStorage.removeItem('isPunchedIn');
    //                 setIsPunchInDisabled(false);
    //                 setIsPunchedIn(false);
    //             }, timeToMidnight);
    //         }
    //     };

    //     resetPunchInButton();

    //     return () => {
    //         clearTimeout();
    //     };
    // }, []);

    // const handlePunchIn = () => {
    //     if (isPunchedIn) {
    //         alert("You can only punch in once per day.");
    //         return;
    //     }

    //     const currentTime = moment();
    //     const cutoffTime = moment().set({ hour: 10, minute: 10, second: 0, millisecond: 0 });

    //     if (currentTime.isAfter(cutoffTime)) {
    //         setShowRemarkModal(true);
    //         setPendingPunchIn(true);
    //     } else {
    //         handlePunchInWithRemark("Punched in before or at 10:10 AM");
    //     }
    // };

    // const handlePunchInWithRemark = async (remarks) => {
    //     const employeeData = localStorage.getItem('employeeData');
    //     const parsedData = JSON.parse(employeeData);
    //     const employeeId = parsedData?.object?.id;

    //     try {
    //         const response = await axios.post(`${BASE_URL_9091}/api/attendance/punch-in`, {
    //             employeeId,
    //             latitude: location.latitude,
    //             longitude: location.longitude,
    //             punchInAction: "In",
    //             punchOutAction: "Out",
    //             remarks
    //         });
    //         console.log(response.data);
    //         setIsPunchInDisabled(true);
    //         setIsPunchedIn(true);
    //         localStorage.setItem('isPunchInDisabled', JSON.stringify(true));
    //         localStorage.setItem('isPunchedIn', JSON.stringify(true));
    //     } catch (e) {
    //         toast("You can't punch in after punch out");
    //     }
    // };

    // const handlePunchOut = async () => {
    //     const employeeData = localStorage.getItem('employeeData');
    //     const parsedData = JSON.parse(employeeData);
    //     const employeeId = parsedData?.object?.id;

    //     const currentTime = moment();
    //     const cutoffTime = moment().set({ hour: 17, minute: 30, second: 0, millisecond: 0 });
    //     let remarks = "";
    //     if (currentTime.isAfter(cutoffTime)) {
    //         remarks = prompt("You are punching out after 5:30 PM. Please enter your remarks:");
    //     } else {
    //         remarks = "Punched out before or at 5:30 PM";
    //     }

    //     try {
    //         const response = await axios.post(`${BASE_URL_9091}/api/attendance/punch-out`, {
    //             employeeId,
    //             latitude: location.latitude,
    //             longitude: location.longitude,
    //             punchInAction: "In",
    //             punchOutAction: "Out",
    //             remarks
    //         });
    //         console.log(response.data);
    //         setIsPunchInDisabled(false);
    //         setIsPunchedIn(false);
    //         localStorage.removeItem('isPunchInDisabled');
    //         localStorage.removeItem('isPunchedIn');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const handleTime = () => {
        setDate(new Date());
    };

    // const handleModalSubmit = () => {
    //     if (myRemark.trim()) {
    //         setShowRemarkModal(false);
    //         handlePunchInWithRemark(myRemark);
    //         setMyRemark("");
    //         setPendingPunchIn(false);
    //     } else {
    //         alert("Please enter a remark.");
    //     }
    // };

    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }} className="header_time">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"></li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Dashboard</li>
                    </ol>
                    <p onClick={handleTime}>
                        <span className='time_span'>Time: </span>{moment(date).format('h:mm:ss a')}
                    </p>
                </nav>
                <hr />
            </div>
            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="WrapperArea">
                    <div className="WrapperBox">
                        <div className="TitleBox punch_div">
                            <div>
                                <h4 className="Title">Dashboard</h4>
                            </div>
                            <div className='button_sub_div'>
                                {!true ? (
                                    <button
                                        className='home_login_btn punch_in_button'
                                        // onClick={handlePunchIn}
                                        // disabled={isPunchInDisabled}
                                    >
                                        Punch In
                                    </button>
                                ) : (
                                    <button
                                        className='home_login_btn'
                                        // onClick={handlePunchOut}
                                    >
                                        Punch Out
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="TitleBox">
                            <h4 className="Title">Statics Overview</h4>
                        </div>
                        <div className="DashboardArea">
                            <div className="row">
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard1 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Today</p>
                                            <h5>{moment(date).format('dddd')}</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard2 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Date</p>
                                            <h5>{moment(date).format('D MMMM YYYY')}</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard3 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Total present in this month</p>
                                            <h5>04</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard4 dwtb">
                                        <aside><span><i className="fa fa-user"></i></span></aside>
                                        <article>
                                            <p>Total Leave Request</p>
                                            <h5>02</h5>
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
                                            <h5>50</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard6 dwtb">
                                        <aside><span><i className="fa fa-instagram"></i></span></aside>
                                        <article>
                                            <h5>200</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard7 dwtb">
                                        <aside><span><i className="fa fa-database"></i></span></aside>
                                        <article>
                                            <h5>20</h5>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-sm-4 col">
                                    <div className="DashboardBox Dashboard8 dwtb">
                                        <aside><span><i className="fa fa-server"></i></span></aside>
                                        <article>
                                            <h5>10</h5>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showRemarkModal && (
                <section className='remark_section'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12 remark_col'>
                                <div className='remark_popup'>
                                    <RxCross1 className='cross_icon'
                                        onClick={() => {
                                            setShowRemarkModal(false);
                                            // setPendingPunchIn(false);
                                            setMyRemark("");
                                        }}
                                    />
                                    <h3>You are punching in after 10:10 AM. Please enter your remarks:</h3>
                                    <input
                                        type="text"
                                        placeholder='Enter your remark'
                                        className='remark_input'
                                        value={myRemark}
                                        onChange={(e) => setMyRemark(e.target.value)}
                                    />
                                    <button >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <ToastContainer />
        </Fragment>
    );
};

export default EmployeeDashboard;
