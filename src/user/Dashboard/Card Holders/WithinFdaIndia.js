import React from 'react'

import './Beneficiary.css'
import DashNavBanner from './DashNavBanner'
function WithinFdaIndia() {
  return (
    <div>
      <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Within FDA India</h1>
            <div className="container mt-5 pt-5"></div>
           <DashNavBanner/>

            <div className="container-fluid transferdashboard">
                <div className='mt-5'>
                    <div className="bene">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.N.</th>
                                    <th>ACCOUNT NO.</th>
                                    <th>ACCOUNT NAME</th>
                                    <th>SHORT NAME</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>No Data Found</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WithinFdaIndia
