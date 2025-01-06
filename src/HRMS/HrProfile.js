import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import avatar from '../assets/images/himanshu1.jpg'
import { Link } from 'react-router-dom';

// hrProfile.json
const hr = {
    "image": `${avatar}`,
    "email": "hr.himanshu@fdaindia.org",
    "name": "Himanshu",
    "jobTitle": "HR MANAGER",
    "reportingManager": "Saurav Gupta"
}



function HRProfile() {
    const [profile, setProfile] = useState(hr);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('/hr'); // Update this path to your actual JSON file location
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    return (
        <Fragment>
            <div className="container-fluid py-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Payroll Earning</li>
                    </ol>
                </nav>
                <hr />
            </div>
            <div className="container-fluid">
                <div className="WrapperArea">
                    <div className="WrapperBox">
                        <div className="TitleBox">
                            <h4 className="Title">HR Profile</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xxl-4 col-xl-4 col-lg-6" >
                                <div class="card">
                                    <img src={profile.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{profile.name}</h5>
                                        <p class="card-text">
                                            <span className='fw-bold'>Email: <br /> <Link className='text-wrap'>{profile.email}</Link></span>
                                        </p>
                                        <p class="card-text">
                                            <span className='fw-bold'>JOB TITLE: <br /> {profile.jobTitle}</span>
                                        </p>
                                        <p className="card-text">
                                            <span className='fw-bold'>Reporting Manager: <br />{profile.reportingManager}</span>
                                        </p>
                                        {/* 
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HRProfile;
