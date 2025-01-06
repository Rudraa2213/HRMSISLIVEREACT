import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';


function DashNavBanner() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg text-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ justifyContent: "center" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link text-light nav-link2 fw-bold shadow-lg' exact='true' to="/crm/user/transfer/own-bank/beneficiaries"> BENEFICIARIES </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link text-light nav-link2 fw-bold' to="/crm/user/transfer/own-bank/within" > WITHIN FDA INDIA </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link text-light nav-link2 fw-bold' to="/crm/user/transfer/own-bank/otherbank" > OTHER BANK </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link text-light nav-link2 fw-bold' to="/crm/user/transfer/own-bank/wiretransfer" > WIRE TRANSFER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link text-light nav-link2 fw-bold' to="/crm/user/transfer/own-bank/history" >HISTORY</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </Fragment>
  )
}

export default DashNavBanner
