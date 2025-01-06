import React, { Fragment } from 'react';
import './Beneficiary.css'
import DashNavBanner from './DashNavBanner';

function Beneficiaries() {
    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Beneficiaries of FDA India</h1>
            <div className="container mt-5 pt-5"></div>
            <DashNavBanner/>
            <div className="container-fluid transferdashboard">
                <div className='container mt-5'>
                    <div className="container mb-3">
                        <input type='button' value={"FDA India"} className='btn btn-md ms-2 text-light' style={{ backgroundColor: "rgb(2, 48, 71)" }} />
                        <input type='button' value={"Other Banks"} className='btn btn-info btn-md ms-2 text-light' />
                    </div>
                    <div className="container d-flex" style={{ justifyContent: 'end' }}>
                        <button className='btn btn-md ms-2 text-light' style={{ backgroundColor: "rgb(2, 48, 71)" }}>+ Add Beneficiary</button>
                    </div>
                    <div className="container bene">
                        <table>
                            <thead>
                                <tr>
                                    <th>ACCOUNT NUMBER</th>
                                    <th>ACCOUNT NAME</th>
                                    <th>SHORT NAME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>No Data Found</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Beneficiaries
