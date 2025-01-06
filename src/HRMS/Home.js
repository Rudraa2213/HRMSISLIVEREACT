import React from 'react'
import './HRMSLogin/AdminDash.css'
import logo from '../assets/images/LOGO/fdalogo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="home_section">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 admin_col d-lg-flex vh-100'>
                        <div className='text-center py-5'>
                            <img src={logo} className="home_logo" alt='foto' />
                            <h3 className='h3'>Employee</h3>
                            <p>Welcome back! Please enter your credentials to access your employee dashboard.</p>
                            <Link to='/employeelogin'>
                                <button className='home_login_btn'>Employee Login</button>
                            </Link>
                        </div>
                        <div className='text-center py-5'>
                            <img src={logo} className="home_logo" alt='foto' />
                            <h3 className='h3'>Admin</h3>
                            <p>Admin Access: Please log in with your credentials to manage the system. </p>
                            <Link to='/adminlogin'>
                                <button className='home_login_btn'>Admin Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home