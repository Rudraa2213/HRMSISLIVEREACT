import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import fdalogo from "../assets/images/LOGO/fdalogo.png";
import './Banner.css'
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';

function Banner() {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand ms-xxl-5 ms-xl-5 ms-lg-5 ps-2" to="/"><img src={fdalogo} alt="logo Of FDAIndia" height={"75px"} /></NavLink>
                    <div className="collapse navbar-collapse ps-xxl-5 ps-xl-5 ps-lg-2" id="navbarNavDropdown">
                        {/* <ul className="navbar-nav ps-xxl-5 ps-xl-5 ps-lg-2 d-flex">
                            <li className="nav-item ps-xxl-5 ps-xl-5 ps-lg-2">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' exact='true' to="/" >
                                    Home
                                </NavLink>
                                <div className="mega-menu">
                                    <p>Some content for the Home mega menu</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/About-us" >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Swabhimaan-card" >
                                    Swabhimaan Card
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Swabhimaan-Kendra" >
                                    Swabhimaan Kendra
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Career" >
                                    Career
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Our-blogs" >
                                    Our Blogs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3 rounded text-light Apply-online' to="/crm/user/applyfor">
                                    Apply Online
                                </NavLink>
                            </li>
                        </ul> */}
                        <ul className="navbar-nav ps-xxl-5 ps-xl-5 ps-lg-2 d-flex">
                            <li className="nav-item py-xxl-3 py-xl-3 ps-xxl-5 ps-xl-5 ps-lg-2">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' exact='true' to="/" >
                                    Home
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}
                                    <div className="mega-menu">
                                        <div className="mega-content">

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/About-us" >
                                    About Us
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}
                                    <div className="mega-menu">
                                        <div className="mega-content">
                                            <div className="mega-column">
                                                <h3>Overview</h3>
                                                <p className='text-dark'><br />Welcome to FDAINDIA Company, where success is driven by a steadfast commitment to quality, innovation, and excellence. </p>
                                            </div>
                                            <div className="mega-column">
                                                <h3>Our Services</h3>
                                                <p><b>Swabhiman Card</b><br /><Link to={"/Swabhimaan-card"}>It Designed specifically for use at our Swabhimaan Kendras,it serves as virtual money, enabling seamless transactions for essential products</Link><br />
                                                    <b>Swabhimaan Kendras</b><br />
                                                    <Link to={"/Swabhimaan-Kendra"}>Our Swabhimaan Kendras serve as vibrant hubs offering a diverse selection of essential products, ensuring convenience and quality for every shopper</Link></p>
                                            </div>
                                            <div className="mega-column">
                                                <h3>Contact Us</h3>
                                                <p><br /><h1 className='fs-5' style={{ color: "#bab93b" }}><TbDeviceLandlinePhone /> +918527407839</h1>
                                                    <a className='fs-5' href='mailto:info@fdaindia.org' target='__blank' style={{ color: "#bab93b", textDecoration: "none" }}><MdEmail /> info@fdaindia.org</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Swabhimaan-card" >
                                    Swabhimaan Card
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}

                                    <div className="mega-menu">
                                        <div className="mega-content">
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Swabhimaan-Kendra" >
                                    Swabhimaan Kendra
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}
                                    <div className="mega-menu">
                                        <div className="mega-content">

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Career" >
                                    Career
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}
                                    <div className="mega-menu">
                                        <div className="mega-content">

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3' to="/Our-blogs" >
                                    Our Blogs
                                </NavLink>
                                <div className='d-none'>
                                    {/* <div className='d-none d-xxl-block d-xl-block d-lg-block'> */}
                                    <div className="mega-menu">
                                        <div className="mega-content">
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="nav-item py-xxl-3 py-xl-3">
                                <NavLink className='nav-link1 nav-link fw-bold ps-3 pe-3 rounded text-light Apply-online d-inline d-lg-none' to="/crm/user/applyfor">
                                    Apply Online
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className='p-2 nav-link fw-bold rounded text-light Apply-online d-none d-lg-inline' to="/crm/user/applyfor">
                        Apply Online
                    </NavLink>

                </div>
            </nav>
        </Fragment>
    )
}

export default Banner

export function Bannershopyourdream() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand ms-5 ps-2" to="/"><img src={fdalogo} alt="" height={"75px"} /></Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-5">
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" aria-current="page" to="/About-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" to="/Swabhimaan-card">Swabhimaan Card</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" to="/Swabhimaan-Kendra">Swabhimaan Kendra</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" to="/Career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" to="/crm/user/applyfor ">Apply Online</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1 nav-link fw-bold p-4" style={{ color: "#a8b324" }} to="/products">Shop Your Dream</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link1 nav-link fw-bold p-4 bapply" to="/Database">Database</Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
