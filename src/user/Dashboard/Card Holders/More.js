import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './More.css';


function More() {
  return (
    <Fragment>
      <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Profile Setting</h1>
      <div className="container mt-5 pt-5" ></div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-light" style={{ backgroundColor: "rgba(21,48,71,.9)",fontFamily:`"Sedan", serif` }}>
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ justifyContent: "center" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold shadow-lg' exact='true' to="/crm/user/more/profile"> PROFILE </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold' to="/crm/user/more/referrel" > REFERRAL </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold' to="/crm/user/more/twofacsecurity" > 2FA SECURITY </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold' to="/crm/user/more/changepassword" > CHANGE PASSWORD </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold' to="/crm/user/more/transaction" > TRANSACTIONS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link nav-link2 fw-bold' to="/crm/user/more/support" >SUPPORT TICKETS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment >
  )
}

export default More
