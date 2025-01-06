import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Kendradashboard.css';
import Axios from 'axios';
import BASE_URL from '../../AllRounder/Url';
import { TbPhotoEdit } from "react-icons/tb";


function Kendradashboard() {
    const [date, setDate] = useState(new Date());
    const Navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("singleuser"))
    const [dashName, setDashName] = useState("");
    const [dashUsername, setDashUsername] = useState("");
    const [dashEmail, setDashEmail] = useState("");
    const [dashMobile, setDashMobile] = useState("");
    const [dashState, setDashState] = useState("");
    const [dashToken, setDashToken] = useState("");
    const [userId, setUserId] = useState('');
    const [trx,setTrx]=useState({
        borrowAmount:'',
        depositAmount:'',
        discount:'', 
        receiptNumber :'', 
        serialNumber :'',
        specialAllowance :'',
        tid :'',
        totalAmount:'',
        transactionId :'',
        withdraw :''
    });
    const [trxCount,setTrxCount]=useState('');

    useEffect(() => {
        if (!userData) {
            Navigate("/crm/user/applyfor")
        } else {
            Axios.post(`${BASE_URL}/user/byEmailKendra/${userData.object.email}`).then(res => {
                setDashUsername(res.data.username)
                setDashEmail(res.data.email)
                setDashMobile(res.data.mobile)
                setDashState(res.data.state)
                setDashToken(res.data.token)
                setDashName(res.data.name)
                setUserId(res.data.userId)
                console.log(res.data);
                sessionStorage.setItem('kendraServiceId', "100" + res.data.userId);
            });
        }
    }, [Navigate, userData])

    const timeanddate = () => {
        setDate(new Date());
    }

    useEffect(() => {
        if (userId !== '') {
            Axios.post(`${BASE_URL}/api/transactions/getAllKendraTransaction/${userId}`).then(res => {
                console.log(res.data);
                setTrx(res.data[res.data.length-1]);
                setTrxCount(res.data.length);
            });
        } else {
            console.log("wait for it")
        }
    }, [userId])

    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Dashboard</h1>
            <div className="container mt-5 pt-5">
                <div className="row pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='ms-auto text-end text-dark w-50 h3'>
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
                        <div className="row g-0">

                            <div className="container col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 ms-0">
                                <div className="card text-white" style={{ backgroundColor: "#023047" }}>
                                    <div className="container border border-2 border-light rounded pt-1 mt-2" style={{ width: "10rem", height: '10rem', overflow: "hidden" }}>
                                        <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} className="p-1 card-img-top" height={'150rem'} alt="kendrauserdp" />
                                    </div>
                                    <div className="container text-end p-2" style={{ width: "10rem" }}>
                                        <button className='btn btn-md btn-secondary'><TbPhotoEdit /></button>
                                    </div>
                                    <div className="card-body text-start">
                                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="fs-6" >Name:  </div>
                                            <div className='fs-6 fst-italic text-warning'>{dashName}</div>
                                        </div>
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

                        </div>
                        <h2 className='text-center text-primary'>Hello! {dashName}</h2>
                        <div className="card text-white mb-3" style={{ backgroundColor: "#023047" }}>
                            <div className="card-header fs-4">KYC Verification required</div>
                            <div className="card-body">
                                <p className="card-text">Dear User, we need your KYC Data for some action. Don't hesitate to provide KYC Data, It's so much potential for us too. Don't worry, it's very much secure in our system.</p>
                                <Link className="text-decoration-none fs-5" to="/crm/kendrauser/kendra-kyc-form">Click Here to Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-xxl4 col-xl-4 col-lg-12">
                        {/* <div className="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
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
                        </div> */}
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
                                <h4>₹ {trx.totalAmount}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deposit withdraw transfer loan */}
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start" style={{ height: "8rem" }}>
                                <div className="fs-6 pt-3 pb-3">₹ {trx.depositAmount}</div>
                                <span className='fs-6 fw-bold'>Last Deposit</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start">
                                <div className="fs-6 pt-3 pb-3">₹ {trx.withdraw}</div>
                                <span className='fs-6 fw-bold'>Withdrawals</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4">
                        <div className="card text-white mb-3 dwtb">
                            <div className="card-body text-start">
                                <div className="fs-5 pt-3 pb-3">{trxCount}</div>
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
                                <div className="fs-5 pt-3 pb-3">₹ {trx.borrowAmount}</div>
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

export default Kendradashboard
