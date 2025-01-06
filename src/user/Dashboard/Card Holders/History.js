import React from 'react'
import DashNavBanner from './DashNavBanner'

function History() {
    return (
        <div>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>History</h1>
            <div className="container mt-5 pt-5"></div>
            <DashNavBanner/>

            <div className="container-fluid transferdashboard">
                <div className='mt-5'>
                    <div className="bene">
                        <table>
                            <thead>
                                <tr>
                                    <th>TRX</th>
                                    <th>ACCOUNT</th>
                                    <th>BANK</th>
                                    <th>AMOUNT</th>
                                    <th>CHARGE</th>
                                    <th>PAID AMOUNT</th>
                                    <th>STATUS</th>    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>No Data Found</td>
                                    <td></td>
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

export default History
