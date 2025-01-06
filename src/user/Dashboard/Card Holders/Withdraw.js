import React, { Fragment } from 'react'

function Withdraw() {
    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Withdraw History</h1>
            <div className="container-fluid pt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-6 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex" style={{ height: "50px", justifyContent: "space-evenly" }}>
                        <div>
                            <button className='btn btn-primary fw-bold text-light' style={{ fontSize: "12px", height: "50px" }}>Withdraw Money</button>
                        </div>
                        <div className='d-flex'>
                            <input type='text' className='form-control' placeholder='TRX No..' style={{ width: "100%", boxShadow: "none", borderTopRightRadius: "0", borderBottomRightRadius: "0" }} />
                            <button className='btn btn-outline-info btn-success text-white' style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }} >Search</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: 'center', padding: "20px", margin: "0" }}>
                <div class="container table-container mt-5" style={{ width: "100%", maxWidth: "12000px" }}>
                    <div class="table-responsive">
                        <table class="table table-bordered border-2 depositable" >
                            <thead>
                                <tr>
                                    <th scope="col">Sno</th>
                                    <th scope="col">Trx No.</th>
                                    <th scope="col">Initiated</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Conversion</th>
                                    <th scope="col">Amount</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>TRX12345</td>
                                    <td>2024-05-25</td>
                                    <td>₹00.00</td>
                                    <td>₹00.00</td>
                                    <td>Pending</td>
                                    <td><a href="/">View</a></td>
                                </tr>
                                {/* <tr>
                                    <td>2</td>
                                    <td>TRX12346</td>
                                    <td>2024-05-26</td>
                                    <td>₹00.00</td>
                                    <td>₹00.00</td>
                                    <td>Pending</td>
                                    <td><a href="/">View</a></td>
                                </tr> */}
                                <tr>
                                    <th scope='col' colSpan={"5"} className='text-center'>Totle Amount</th>
                                    <th scope='col' colSpan={"3"}>₹00</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Withdraw