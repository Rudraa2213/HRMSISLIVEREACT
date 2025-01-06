import React, { Fragment, useEffect } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import card from "../crm/assets/images/card.png";
import { MdEmail } from "react-icons/md";
import Aos from 'aos';
import { Link } from 'react-router-dom';



function Footer() {
    useEffect(() => {
        Aos.init();
    })

    return (
        <Fragment>
            <div className="container-fluid Footerdiv1">
                <div className="container">
                    <div className="row text-center p-5">
                        <div className="col-lg-4 col-sm-12 col-xs-12 text-sm-start text-md-start text-lg-start">
                            <h1 className='fs-6 mt-1 fw-bold text-light'>Call Us: 10:30 AM to 4:00 PM</h1>
                            <a className='fs-5 mt-1 d-block' href='tel:+918527407839' target='__blank' style={{ color: "#bab93b", textDecoration: "none" }}><TbDeviceLandlinePhone /> +918527407839</a>
                            <a className='fs-5 mt-1' href='mailto:info@fdaindia.org' target='__blank' style={{ color: "#bab93b", textDecoration: "none" }}><MdEmail /> info@fdaindia.org</a>
                            <hr />
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <img className='w-100 mt-3' src={card} alt="" />
                            <hr />
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <h1 className='fs-6 text-white fw-bold pt-3'>FOLLOW US ON</h1>
                            <span className='ms-3'><a href="https://www.facebook.com/profile.php?id=61558780240518" target='__blank'><FaFacebook size={"1.5rem"} color='rgb(195, 172, 57)' /></a></span>
                            <span className='ms-3'><a href="https://www.youtube.com/@FdaIndia2024" target='__blank'><IoLogoYoutube size={"1.5rem"} color='rgb(195, 172, 57)' /></a></span>
                            <span className='ms-3'><a href="https://x.com/FdaIndia2024" target='__blank'><FaTwitter size={"1.5rem"} color='rgb(195, 172, 57)' /></a></span>
                            <span className='ms-3'><a href="https://www.instagram.com/fdaindia?igsh=MW90ZTh3amI1dXlhZw==" target='__blank'><FaInstagram size={"1.5rem"} color='rgb(195, 172, 57)' /></a></span>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <dir className="row" style={{ fontFamily: "poppins", letterSpacing: "2px" }}>
                        <div className="col-sm-3 ">
                            <h1 className=' text-white fs-6 fw-bold mt-3'>ADDRESS</h1><br />
                            <p className='' style={{ color: '#f7f28e', fontSize: "14px" }}>G-11, Sector 63, Noida, Uttar Pradesh, 201301</p>
                            <hr />
                        </div>
                        <div className="col-sm-3">
                            <h1 className=' text-white fs-6 fw-bold mt-3'>PAGES</h1><br />
                            <para className="d-block mt-2"><Link className='Ab' to="/About-us">About Us</Link></para>
                            <para className="d-block mt-2"><Link className='Ab' to="/">FAQ's</Link></para>
                            <para className="d-block mt-2"><Link className='Ab' to="/">Contact</Link></para>
                            <para className="d-block mt-2"><Link className='Ab' to="/">Privacy Policy</Link></para>
                        </div>
                        <div className="col-sm-3">
                            <h1 className=' text-white fs-6 fw-bold mt-3'>STAFF LOGINS</h1><br />
                            <para className="d-block mt-2"><Link className='Ab' to={`/`}>Employee</Link></para>
                            <para className="d-block mt-2"><Link className='Ab' to={`/hrmslogin`}>HRMS</Link></para>
                            <para className="d-block mt-2"><a className='Ab' href="/">Banking</a></para>
                        </div>
                        <div className="col-sm-3">
                            <h1 className=' text-white fs-6 fw-bold mt-3'>SUBSCRIBE US</h1><br />
                            <para className="d-block mt-2"><a className='Ab' href="/">Get in Touch</a></para><br />
                            <form className="d-flex bg-light rounded" action='/'>
                                <input className="form-control" type="search" placeholder="Email address..." aria-label="Search" style={{ border: "none", outline: "none" }} />
                                <button className="btn clogo pe-4 ps-5" type="submit" style={{ border: "none" }}><FaArrowRight /></button>
                            </form>
                        </div>
                    </dir>
                </div>
                <hr />
                <div className="container text-center">
                    <span><MdCopyright color='white' /></span>
                    <span style={{ color: "#909896" }}> 2024 </span>
                    <span className='fw-bold' style={{ color: "#bab93b" }}> FDA India </span>
                    <span style={{ color: "#909896" }}>. All Rights Reserved.</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
