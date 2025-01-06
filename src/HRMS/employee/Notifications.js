import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const note = [
    {
        "date": "2023-01-05",
        "employeeId": "VM234",
        "leaveDate": "2023-04-12",
        "detailsUrl": "/"
    },
    {
        "date": "2023-01-06",
        "employeeId": "VM235",
        "leaveDate": "2023-04-13",
        "detailsUrl": "/"
    },
    {
        "date": "2023-01-07",
        "employeeId": "VM236",
        "leaveDate": "2023-04-14",
        "detailsUrl": "/"
    }
]



function Notifications() {
    // const [notifications, setNotifications] = useState([]);
    const setNotifications="";
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('/api/notifications'); // Replace with your API endpoint
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const handleApply = async () => {
        try {
            const response = await axios.get('/api/notifications', {
                params: {
                    fromDate,
                    toDate
                }
            });
            setNotifications(response.data);
        } catch (error) {
            console.error('Error applying date filter:', error);
        }
    };

    const handleRefresh = () => {
        setFromDate('');
        setToDate('');
        fetchNotifications();
    };

    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"></li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Notification</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Notifications</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-group">
                            <label>From Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <label>To Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <label>&nbsp;</label>
                            <button className="Button mt-4" onClick={handleApply}>Apply</button>
                            <button className="Button Cancel" onClick={handleRefresh}><i className="fa fa-refresh"></i></button>
                        </div>
                    </div>
                    <div className="notification my-4">
                        <ul>
                            {note.map((notification, index) => (
                                <li key={index}>
                                    <hr />
                                    <h6>{notification.date}</h6>
                                    <p>Employee <b>{notification.employeeId}</b> applied for casual leave for {notification.leaveDate}.</p>
                                    <a href={notification.detailsUrl} className="text-success">View Details</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Notifications;
