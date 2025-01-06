import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
    const [shake, setShake] = useState(true);
    const [countdown, setCountdown] = useState(30);
    const navigate = useNavigate();

    useEffect(() => {
        const shakeTimer = setTimeout(() => {
            setShake(false);
        }, 3000);

        const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            navigate('/crm/user/dashboard');
        }, 30000);

        return () => {
            clearTimeout(shakeTimer);
            clearInterval(countdownInterval);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div className="thank-you-page">
            <div className="stars"></div>
            <div className="content">
                <h1 className={shake ? 'shake' : ''}>Thank You!</h1>
                <p>We appreciate your effort in completing the KYC form.</p>
                <p>Your KYC verification is currently under process. You will be notified soon.</p>
                <p>If you have any questions, please don't hesitate to contact our support team.</p>
                <p className='text-dark'>Redirecting to your dashboard in {countdown} seconds...</p>
            </div>
        </div>
    );
};

export default ThankYouPage;
