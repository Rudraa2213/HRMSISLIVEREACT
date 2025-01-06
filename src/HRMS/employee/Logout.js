import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
const navigate=useNavigate();
    const HandleLogout = () => {
        alert("Log Out")
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    }

    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Logout</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="WrapperArea">
                    <div className="WrapperBox">
                        <div className="TitleBox">
                            <h4 className="Title">Employee Logout</h4>
                        </div>
                        <div className="container text-center p-5">
                            <button className='btn btn-danger btn-lg' onClick={HandleLogout}>LOG OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Logout
