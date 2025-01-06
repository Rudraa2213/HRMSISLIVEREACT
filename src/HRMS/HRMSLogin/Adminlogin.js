import React, { Fragment, useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import fdalogo from '../../assets/images/LOGO/fdalogo.png'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../../user/Registration Forms/Kendra Holders/ApplyForKendra.css'
import '../HRMSLogin/AdminDash.css'
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';

function Adminlogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Navigate = useNavigate();
    const hrmsform = (e) => {
        e.preventDefault();
        const hvalue = { username, password };
        Axios.post(`${BASE_URL_9091}/hrms/emp/hrmslogin`, hvalue).then(response => {
            if (response.data.status === true) {
                Navigate("/admindash/dash");
                localStorage.setItem("adminData", JSON.stringify(response.data));
            }
            if (response.data.status === false) {
                toast.error("Incorrent Username or Password!", {
                    position: "top-right"
                })
            }
        });

    }

    return (
        <Fragment>
            <div className="firstcontainer">
                <div className='container'>
                    <ToastContainer />
                </div>
                <div className="container-fluid hrmsfirstdiv">
                    <div className={`hrmsseconddiv me-auto ms-auto`}>
                        <div className="register-header">
                            <Link to={`/`}><img src={fdalogo} className='my-4' height={"100px"} style={{ mixBlendMode: "revert-layer" }} alt="foto" /></Link><br />
                            <h4 className='hrmslogin'>
                                HRMS LOGIN
                            </h4>
                        </div>

                        <form className="register-form" method='post' onSubmit={hrmsform}>
                            <label htmlFor="username"><FaCircleUser className='icon' />
                                <input type="text" placeholder={`Username`} required value={username} onChange={(e) => {
                                    setUsername(e.target.value);
                                }} /></label>
                            <label htmlFor="password"><BsShieldLockFill className='icon' /><input type="password" placeholder="Password" required value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} /></label>
                            <div className='d-flex ms-1 py-2 mt-2'>
                                <input type="checkbox" name='check' />
                                <span id='check' name='check' className='remember'>Remember me</span>
                            </div>
                            <div className="container text-center">
                                <h6 className=''>Forgot Password?
                                    <span className='span_click'> click here</span>
                                </h6>
                                <button className="register-button w-50 mt-3">LOGIN</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Adminlogin;
