import React, { Fragment, useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import fdalogo from '../../assets/images/LOGO/fdalogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../../user/Registration Forms/Kendra Holders/ApplyForKendra.css'
import '../HRMSLogin/AdminDash.css'
// import axios from 'axios';
// import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';
const EmployeeLogin = () => {

    const navigate = useNavigate();

    const [employeeUsername, setEmployeeUsername] = useState('Admin');
    const [employeePassword, setEmployeePassword] = useState('');
    const [loading, setLoading] = useState(false);

    const loginEmployee = async () => {
        setLoading(true)
        // try {
        //     // const response = await axios.post(`${BASE_URL_9091}/hrms/emp/login?username=${employeeUsername}&password=${employeePassword}`);
        //     if (response?.data?.status === false) {
        //         toast(response?.data?.message)
        //         console.log(response,"=====================")
        //     } else {
        //         localStorage.setItem('employeeData', JSON.stringify(response?.data));
        //         localStorage.setItem('empId',JSON.stringify(response?.data.object.id));
        //         console.log(response,"-------------------")
        //         toast(response?.data?.message)
        //         navigate("/employeedash/dash")
        //         setEmployeeUsername('')
        //         setEmployeePassword('')
        //     }


        // } catch (e) {
        //     console.log("Invalid username & password");
        // } finally {
        //     setLoading(false)
        // }
        navigate("/employeedash/dash")
    }   

    return (
        <Fragment>
            <div className="firstcontainer">
                <div className='container'>
                </div>
                <div className="container-fluid hrmsfirstdiv">
                    <div className="hrmsseconddiv me-auto ms-auto">
                        <div className="register-header">
                            <Link to={`/`}><img src={fdalogo} className='my-4' height={"100px"} style={{ mixBlendMode: "revert-layer" }} alt="foto" /></Link><br />
                            <h4 className='hrmslogin'>
                                EMPLOYEE LOGIN
                            </h4>
                        </div>

                        <div className="register-form">
                            <label htmlFor="username">
                                <FaCircleUser className='icon' />
                                <input type="text"
                                    placeholder={`Username`}
                                    value={employeeUsername}
                                    onChange={(e) => {
                                        setEmployeeUsername(e.target.value);
                                    }} />
                            </label>
                            <label htmlFor="password">
                                <BsShieldLockFill className='icon' />
                                <input type="password"

                                    placeholder="Password"
                                    value={employeePassword} onChange={(e) => {
                                        setEmployeePassword(e.target.value);
                                    }} />
                            </label>
                            <div className='d-flex ms-1 py-2 mt-2'>
                                <input type="checkbox" name='check' />
                                <span id='check' name='check' className='remember'>Remember me</span>
                            </div>
                            <div className="container text-center mt-2">
                                <h6 className=''>Forgot Password?
                                    <span className='span_click'> click here</span>
                                </h6>
                                <div className='loader_div'>
                                    <button className="register-button w-50 mt-3"
                                        onClick={() => {
                                            if (!employeeUsername || !employeePassword) {
                                                toast("please enter the require field")
                                            } else if (employeePassword.length < 5) {
                                                toast("password must be greater than 5")
                                            } else {
                                                loginEmployee();

                                            }
                                        }}
                                    >LOGIN</button>

                                    {loading && (
                                        <div className="spinner"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />

            </div>
        </Fragment>
    )
}

export default EmployeeLogin
