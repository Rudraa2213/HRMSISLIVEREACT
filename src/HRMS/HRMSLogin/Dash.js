import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BASE_URL from '../../user/AllRounder/Url';

const icons = [
    { name: 'Dashboard', icon: 'bi bi-speedometer2', color: 'primary' },
    { name: 'Announcements', icon: 'bi bi-megaphone', color: 'warning' },
    { name: 'Recruitment', icon: 'bi bi-search', color: 'secondary' },
    { name: 'Discuss', icon: 'bi bi-chat-dots', color: 'danger' },
    { name: 'Timesheets', icon: 'bi bi-clock', color: 'dark' },
    { name: 'Attendances', icon: 'bi bi-people', color: 'info' },
    { name: 'Reminders', icon: 'bi bi-alarm', color: 'warning' },
    { name: 'Calendar', icon: 'bi bi-calendar', color: 'success' },
    { name: 'Transfers', icon: 'bi bi-arrows-move', color: 'danger' },
    { name: 'Overtime Request', icon: 'bi bi-hourglass-split', color: 'info' },
    { name: 'Payroll', icon: 'bi bi-currency-dollar', color: 'primary' },
    { name: 'Expenses', icon: 'bi bi-wallet', color: 'secondary' },
    { name: 'Custody', icon: 'bi bi-file-earmark', color: 'warning' },
    { name: 'Resignation', icon: 'bi bi-door-closed', color: 'info' },
    { name: 'Invoicing', icon: 'bi bi-receipt', color: 'warning' },
    { name: 'Project', icon: 'bi bi-briefcase', color: 'dark' },
    { name: 'Events', icon: 'bi bi-calendar-event', color: 'success' },
    { name: 'Employees', icon: 'bi bi-people-fill', color: 'success' },
    { name: 'Leaves', icon: 'bi bi-tree', color: 'success' },
    { name: 'Link Tracker', icon: 'bi bi-link-45deg', color: 'secondary' },
    { name: 'Apps', icon: 'bi bi-grid', color: 'danger' },
    { name: 'Settings', icon: 'bi bi-gear', color: 'success' }
];


function Dash() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.post(`${BASE_URL}/user/getAllUsers`)
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch(error => {

            });
    }, []);

    return (
        <Fragment>
            <div className="d-flex bg-secondary text-warning justify-content-evenly flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>
            <div className="container">

                <h2 className='text-center'>Employees List</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope='col'>sno</th>
                                <th scope="col">UserID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">State</th>
                                <th scope="col">Token</th>
                                <th scope="col">TotalAmount</th>
                                <th scope="col">WithdrwalAmount</th>
                                <th scope="col">Transaction</th>
                                <th scope="col">Deposit</th>
                                <th scope="col">BorrowMoney</th>
                                <th scope='col' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{++key}</td>
                                        <td>{user.userId}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.state}</td>
                                        <td>{user.token}</td>
                                        <td>₹ {user.totalAmount}</td>
                                        <td>₹ {user.withdrwalAmount}</td>
                                        <td> {user.transaction}</td>
                                        <td>₹ {user.deposit}</td>
                                        <td>₹ {user.borrowMoney}</td>
                                        <td><Link to={`singleuser/` + user.token} className='btn btn-success btn-outline-primary text-light'>Edit</Link></td>
                                        <td><Link to={`singleuser/` + user.token} className='btn btn-secondary btn-outline-danger text-light'>Delete</Link></td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {icons.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className={`card text-white bg-${item.color} h-100`}>
                                <div className="card-body d-flex align-items-center justify-content-center">
                                    <i className={`${item.icon} me-2`} style={{ fontSize: '1.5rem' }}></i>
                                    <h5 className="card-title">{item.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </Fragment>
    )
}

export default Dash
