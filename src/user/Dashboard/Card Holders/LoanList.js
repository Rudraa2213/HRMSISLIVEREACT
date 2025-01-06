import React from 'react'
import { Link } from 'react-router-dom'

function LoanList() {
  return (
    <div>
        <div>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Loan List</h1>
            <div className="container mt-5 pt-5"></div>
            <div className="pt-3">
                <nav class="navbar navbar-light p-4" style={{backgroundColor:"rgb(2,48,71)"}}>
                    <form class="container-fluid justify-content-center">
                        <button class="btn btn-secondary btn-outline-success shadow-lg fs-5 me-2 " type="button"><Link to="/crm/user/loan/plans" className='text-decoration-none text-light'>LOAN PLANS</Link></button>
                        <button class="btn btn-secondary btn-outline-success shadow-lg fs-5 active" type="button"><Link to='/crm/user/loan/list' className='text-decoration-none text-light'>MY LOAN LIST</Link></button>
                    </form>
                </nav>
            </div>
        </div>
      
    </div>
  )
}

export default LoanList
