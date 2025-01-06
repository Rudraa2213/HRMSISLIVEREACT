import React, { Fragment, useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import fdalogo from "../../../assets/images/LOGO/fdalogo.png"
import dash from "../../../assets/images/dash.jpg"

function Dashboardforkendra() {

  const Navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("singleuser"))

  useEffect(() => {
    if (!userData||userData===null) {
        Navigate("/crm/user/applyfor")
    }
}, [userData, Navigate])

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top  fw-bold" style={{ backgroundColor: "rgba(29,44,57,.9)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 ps-2" to="/"><img src={fdalogo} alt="" height={"75px"} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="dashboard">DASHBOARD</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="deposit">DEPOSIT</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="withdraw">WITHDRAW</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="loan/plans">LOAN</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="transfer/own-bank/beneficiaries">TRANSFER</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="more/profile">MORE</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-warning" onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
              }}>LOGOUT</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fuild" style={{ height: "22rem", backgroundImage: `url(${dash})`, backgroundPosition: "center" }}>
        <Outlet></Outlet>
      </div>
    </Fragment>
  )
}

export default Dashboardforkendra
