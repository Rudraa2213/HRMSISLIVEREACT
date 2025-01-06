import React, { Fragment, useEffect, useState } from 'react';
import "./ApplyForCard.css";
import { FaUser, FaMobileAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";
import { BsShieldLockFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBuildingFlag } from "react-icons/fa6";
import fdalogo from '../../../assets/images/LOGO/fdalogo.png'
// import BASE_URL from '../Url';
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../AllRounder/Url';



const ApplyForCard = () => {
  const [divshow, setDivShow] = useState(false); //for visit loginpage and registerpage 
  const Navigate = useNavigate();
  //here Registeration begin
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [passCheck, setPassCheck] = useState(true);

  const userData = localStorage.getItem("singleuser")

  useEffect(() => {
    if (!userData) {
      Navigate("/crm/user/forcard");
    } else {
      Navigate("/crm/user/dashboard")
    }
  }, [userData, Navigate]);

  const handleRegisterForm = (event) => {
    event.preventDefault();
    if (password === confirmpassword) {
      setPassCheck(true)
      const user = { name, username, email, state, mobile, password }
      // Axios.post(`https://e0ba-34-41-24-81.ngrok-free.app/user/register`, user).then(response => {
      Axios.post(`${BASE_URL}/user/registerforcard`, user).then(response => {
        console.log(response.data);
        if (response.data.status) {
          setName('')
          setUsername('')
          setEmail('')
          setState('')
          setMobile('')
          setPassword('')
          setconfirmpassword('')
          toast.success(`Successfull! ${name}`, {
            position: "top-right"
          });
        } else {
          toast.error(`${response.data.message}`, {
            position: "top-right"
          });
        }
      }).catch(err => {
        console.log(err);
      })
    } else {
      setPassCheck(false);
    }
  }
  // Login Details Here
  const handleLoginForm = (event) => {
    event.preventDefault();
    const loginBody = { username, password }
    Axios.post(`${BASE_URL}/user/loginforcard`, loginBody).then(response => {
      console.log(response.data);
      if (response.data.status) {
        localStorage.setItem("singleuser", JSON.stringify(response.data));
        Navigate("/crm/user/dashboard")
      } else {
        toast.error(`${response.data.message}`, {
          position: "top-center"
        })
      }
    })
  }
  return (
    <Fragment>
      <div className="registerbody">
        {/* <div className={`${divshow ? "d-block" : "d-none"} register-container m-3`}> */}
        <div className={`register-container ${divshow ? 'animate__animated animate__fadeOutRight d-none' : 'animate__animated animate__fadeInRight'} m-3`}>
          <div className="register-header">
            <Link to="/"><img src={fdalogo} className='my-2' height={"100px"} style={{ mixBlendMode: "revert-layer" }} alt="foto" /></Link><br />
            APPLY FOR CARD
          </div>
          <form className="register-form" onSubmit={handleRegisterForm} method='post'>
            <label htmlFor="fullname"><FaUser /><input type="text" placeholder={`Full Name`} name='fullname' value={name} required onChange={(e) => { setName(e.target.value) }} /></label>
            <label htmlFor="username"><FaCircleUser /><input type="text" placeholder={`Username`} value={username} name='username' required onChange={(e) => { setUsername(e.target.value) }} /></label>
            <label htmlFor="email"><ImMail4 /><input type="email" placeholder="Email" value={email} name='email' required onChange={(e) => { setEmail(e.target.value) }} /></label>
            <label htmlFor="mobile"><FaMobileAlt /><input type="tel" placeholder="Phone Number" value={mobile} name='mobile' pattern="[0-9]{10}" onChange={(e) => { setMobile(e.target.value) }} required /></label>
            <label htmlFor="state" ><FaBuildingFlag />
              <select name="state" id="state" value={state} onChange={(e) => { setState(e.target.value) }}><option hidden disabled required>Select State</option>
                <option value="" disabled hidden>Please Select</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="bihar">Bihar</option>
              </select>
            </label>
            <label htmlFor="password"><BsShieldLockFill /><input type="password" placeholder="Password" name='password' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} required /><span className={passCheck ? "d-none" : "d-inline"}>❌</span></label>
            <label htmlFor="cpassword"><MdOutlineSecurity /><input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(event) => {
              setconfirmpassword(event.target.value)
            }} required /></label>
            <div className='d-flex ms-1 py-2' style={{ justifyContent: "start" }}><input type="checkbox" className='mx-3' /><span >Remember me </span>
            </div>
            <h5 className='text-end'> Already have an account? <span className='text-primary' style={{ cursor: "pointer" }} onClick={() => { setDivShow(!divshow) }}>Login now</span></h5>
            <div className="container text-center">
              <button type="submit" className="register-button w-50">REGISTER</button>
            </div>
          </form>
        </div>

        {/* <div className={`${divshow ? "d-none" : "d-block"} register-container m-3`} > */}
        <div className={`register-container ${divshow ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft d-none'} m-3`}>
          <div className="register-header">
            <Link to={`/`}><img src={fdalogo} className='my-4' height={"100px"} style={{ mixBlendMode: "revert-layer" }} alt="foto" /></Link><br />
            LOGIN YOUR ACCOUNT
          </div>

          <form className="register-form" onSubmit={handleLoginForm} method='post'>
            <label htmlFor="username"><FaCircleUser /><input type="text" placeholder={`Username`} required value={username} onChange={(e) => {
              setUsername(e.target.value);
            }} /></label>
            <label htmlFor="password"><BsShieldLockFill /><input type="password" placeholder="Password" required value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} /></label>
            <div className='d-flex ms-1 py-2' style={{ justifyContent: "start" }}>
              <input type="checkbox" className='mx-3' name='check' id='check' /><span id='check' name='check'>Remember me</span>
            </div>
            <div className="container text-center">
              <h5 className='text-end mt-4 mb-2'>Don't have an account?
                <span className='text-primary' style={{ cursor: "pointer" }} onClick={() => { setDivShow(!divshow) }}> create now</span>
              </h5>
              <h6 className='text-end'>Forgot Password?
                <span className='text-primary' style={{ cursor: "pointer" }}> click here</span>
              </h6>
              <button className="register-button w-50">LOGIN</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </Fragment>
  )
}

export default ApplyForCard
