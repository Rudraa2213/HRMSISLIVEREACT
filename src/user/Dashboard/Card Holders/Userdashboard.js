import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Userdashboard.css";
import Axios from 'axios';
import BASE_URL from '../../AllRounder/Url';


function Userdashboard() {
    const [date, setDate] = useState(new Date());
    const Navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("singleuser"))
    const [dashName, setDashName] = useState("");
    const [dashUsername, setDashUsername] = useState("");
    const [dashEmail, setDashEmail] = useState("");
    const [dashMobile, setDashMobile] = useState("");
    const [dashState, setDashState] = useState("");
    const [dashToken, setDashToken] = useState("");
    const [dashTotalAmount, setDashTotalAmount] = useState("");
    // const [userId ,setUserId]=useState('');
    
    useEffect(() => {
        if (!userData) {
            Navigate("/crm/user/applyfor")
        } else {
            Axios.post(`${BASE_URL}/user/byEmailCard/${userData.object.email}`).then(res=>{
                setDashUsername(res.data.username)
                setDashEmail(res.data.email)
                setDashMobile(res.data.mobile)
                setDashState(res.data.state)
                setDashToken(res.data.token)
                setDashName(res.data.name)
                setDashTotalAmount(res.data.total_amount)
                // setUserId(res.data.userId);
            });
        }
    }, [Navigate, userData])

    const timeanddate = () => {
        setDate(new Date());
    }

    // useEffect(()=>{
    //     Axios.post(`${BASE_URL}/api/transactions/getAll/${userId}`).then(res=>{
    //         console.log(res.data);
    //     })
    // },[userId])
    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Dashboard</h1>
            <div className="container mt-5 pt-5">
                <div className="row pt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='ms-auto text-center bg-dark text-light w-50 h3'>
                            {date.toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </h1>

                    </div>
                </div>
                    <div className="col-12">
                        <h4 className='text-end' onClick={timeanddate}>{date.toLocaleTimeString('en-US', { hour12: true })}</h4>
                        <h2 className='text-center text-primary'>Hello! {dashName}</h2>
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047" }}>
                            <div className="card-header fs-4">KYC Verification required</div>
                            <div className="card-body">
                                <p className="card-text">Dear User, we need your KYC Data for some action. Don't hesitate to provide KYC Data, It's so much potential for us too. Don't worry, it's very much secure in our system.</p>
                                <Link className="text-decoration-none fs-5" to="/crm/user/card-kyc-form">Click Here to Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-xxl4 col-xl-4 col-lg-12">
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div className="card-body text-start">
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div className="fs-6" >Username:  </div>
                                    <div className='fs-6 fst-italic text-warning'>{dashUsername}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div className="fs-6" >Email:  </div>
                                    <div className='fs-6 fst-italic text-warning'>{dashEmail}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div className="fs-6" >Mobile: </div>
                                    <div className='fs-6 fst-italic text-warning'> {dashMobile}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div className="fs-6" >State: </div>
                                    <div className='fs-6 fst-italic text-warning'>{dashState}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div className="card-body text-center">
                                <div className="fs-6 pt-2 pb-3" >Account Number</div>
                                <h4>{dashToken}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div className="card-body text-center">
                                <div className="fs-6 pt-2 pb-3">Available Balance</div>
                                <h4>₹ {dashTotalAmount===0 ?"0.00":dashTotalAmount}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deposit withdraw transfer loan */}
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start" style={{ height: "8rem" }}>
                                <div className="fs-6 pt-3 pb-3">₹0.00</div>
                                <span className='fs-6 fw-bold'>Deposits</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start">
                                <div className="fs-6 pt-3 pb-3">₹0.00</div>
                                <span className='fs-6 fw-bold'>Withdrawals</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start">
                                <div className="fs-5 pt-3 pb-3">0</div>
                                <span className='fs-6 fw-bold'>Transactions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12">
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div className="card-body text-start">
                                <div className="fs-5 pt-3 pb-3">0</div>
                                <span className='fs-6 fw-bold'>Borrow Money</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                </div>

            </div>
        </Fragment>
    )
}

export default Userdashboard
