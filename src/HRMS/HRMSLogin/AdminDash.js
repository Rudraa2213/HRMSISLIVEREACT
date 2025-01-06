import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import './AdminDash.css'
import fdalogo from "../../assets/images/LOGO/fdalogo.png"
import avatar from '../../assets/images/himanshu1.jpg'
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";



import React, { Fragment, useEffect } from 'react'

function AdminDash() {

    return (
        <Fragment>
            <DashNav />
            <SideBar />
        </Fragment>
    )
}

export default AdminDash;

export const DashNav = () => {

    const storedData = JSON.parse(localStorage.getItem("adminData"));
    const navigate = useNavigate();
    useEffect(() => {
        if (!storedData) {
            localStorage.clear();
            sessionStorage.clear();
            navigate("/");
        }
    }, [navigate, storedData])

    return (
        <div className="">
            <nav className="navbar navbardash navbar-expand-lg navbar-light p-2">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-xxl-5 ms-xl-5 ms-lg-5 ps-2" to="/"><img src={fdalogo} alt="logo Of FDAIndia" height={"75px"} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='p-1'>
                            <div className="Header d-flex">
                                <div className="Navigation">
                                    <div className="Avater">
                                        <NavLink className='text-decoration-none' to='/admindash/dash'>
                                            <figure><img src={avatar} className='w-100' alt='foto avatar' /></figure>
                                            {storedData.username}
                                        </NavLink>
                                        <ul>
                                            <li>
                                                <figure><img src={avatar} className='w-100' alt='foto avatar' /></figure>
                                                <h4>{storedData.username} <span>{storedData.role}</span></h4>
                                            </li>
                                            <li>
                                                <Link to={"/admindash/logout"}>
                                                    <span><i className="fa fa-sign-out"></i></span> Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="Header d-flex d-xxl-block d-xl-block d-lg-block d-none">
                            <div className="Navigation">
                                <div className="Avater">
                                    <NavLink className='text-decoration-none' to={"/admindash/dash"}>
                                        <figure><img src={avatar} className='w-100' alt='foto avatar' /></figure>
                                        {storedData.username}
                                    </NavLink>
                                    <ul>
                                        <li>
                                            <figure><img src={avatar} className='w-100' alt='foto avatar' /></figure>
                                            <h4>{storedData.username} <span>{storedData.role}</span></h4>
                                        </li>
                                        <li>
                                            <Link to={"/admindash/logout"}>
                                                <span><i className="fa fa-sign-out"></i></span> Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const SideBar = () => {

    return (
        <Fragment>
            <div className="container-fluid p-0 d-flex">
                <nav id="bdSidebar" className="d-flex flex-column flex-shrink-0 p-3 text-white offcanvas-md offcanvas-start" style={{ borderTopRightRadius: "100px" }}>
                    <Link to={"/admindash/dash"} className="navbar-brand d-flex justify-content-between">
                        <h1 className='h1'>HRMS</h1>
                        <div className='d-block d-xxl-none d-xl-none d-lg-none d-md-none'>
                            <Link to="/" className="text-white"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#bdSidebar">
                                <ImCross className='me-5' />
                            </Link>
                        </div>
                    </Link>
                    <hr />
                    <ul className="mynav nav nav-pills flex-column mb-auto">
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/dash">
                                <span className="Icon"><i className="fa fa-tachometer"></i></span> Dashboard
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/empmanage" >
                                <span className="Icon"><i className="fa fa-user"></i></span> Employee Management
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/leavemanage">
                                <span className="Icon"><i className="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                                <span className="Text"> Leave Management</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/attandance">
                                <span className="Icon"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                <span className="Text"> Attandance & Timesheet</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/department">
                                <span className="Icon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                <span className="Text"> Department</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/payroll">
                                <span className="Icon"><i className="fa fa-line-chart"></i></span>
                                <span className="Text"> Payroll & Early Access Program</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/notification">
                                <span className="Icon"><i className="fa fa-bell" aria-hidden="true"></i></span>
                                <span className="Text"> Notifications</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/hrprofile" >
                                <span className="Icon"><i className="fa fa-users"></i></span>
                                <span className="Text"> HR Profile</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/settings">
                                <span className="Icon"><i className="fa fa-cog" aria-hidden="true"></i></span>
                                <span className="Text"> Settings</span>
                            </NavLink>
                        </li>
                        <li className={`nav-link`}>
                            <NavLink to="/admindash/logout" >
                                <span className="Icon"><i className="fa fa-sign-out"></i></span>
                                <span className="Text"> Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                    <hr />
                    <div className="d-flex">

                        <span>
                            <h6 className="mt-1 mb-0">
                                &copy; Ruraa The Devloper  &#169;
                            </h6>
                        </span>
                    </div>
                </nav>

                <div className=" bg-light flex-fill">
                    <div className="p-4 d-md-none d-flex justify-content-between text-white bg-success">
                        <div className="ms-3">Hrms Portal</div>
                        <div>
                            <Link to="/" className="text-white"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#bdSidebar">
                                <TiThMenu />
                            </Link>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

