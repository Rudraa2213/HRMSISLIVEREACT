import Axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import BASE_URL from '../src/user/AllRounder/Url';
import data from '../src/JsonFile/Db.json';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const dataFile = data.Sheet;

  const handleVerifyEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setVerificationError('Please enter a valid email address.');
      return;
    }

    // Simulate sending OTP (in a real application, this would be done via backend)
    setShowOTPInput(true);
    setVerificationError('');

    console.log(email);
    Axios.post(`${BASE_URL}/api/email/send`, { email }).then(res => {
      console.log(res.data);
    }).then(err => console.log(err));
  };

  const handleVerifyOTP = async () => {
    const res = await Axios.post(`${BASE_URL}/api/email/verify`, { email, otp });
    console.log(res.data);
  };

  return (
    <div className="container mt-5">
      <h2>Email Verification</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleVerifyEmail}>
          Verify Email
        </Button>

        {verificationError && <Alert variant="danger" className="mt-3">{verificationError}</Alert>}

        {showOTPInput && (
          <Form.Group className="mt-3" controlId="formOTP">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <Button variant="primary" className="mt-3" onClick={handleVerifyOTP}>
              Verify OTP
            </Button>
            {verificationError && <Alert variant="danger" className="mt-3">{verificationError}</Alert>}
          </Form.Group>
        )}
      </Form>

      {/* <div>
        INSERT INTO fda_kendra (email, mobile, name, password, state, token, username, total_amount) VALUES {dataFile.map((d) => {
          return (
            <div>
              <br />
              ('{d['Email ID']}','{d['Mobile No']}','{d.Name}','{d.Name.split(' ')[0]}#1234','bihar',{d.Token},CONCAT('{d.Name.split(' ')[0]}_',LPAD(FLOOR(RAND()*1000),3,'0')),2370),
            </div>
          )
        })}

      </div> */}

<div>
        INSERT INTO transaction_kendra(borrow_money, deposit_amount, discount, local_date, receipt_number, special_allowance, total_amount,transaction_id,withdraw,user_id) VALUES {dataFile.map((d) => {
          return (
            <Fragment>
              <br />
              ('{d.borrow_amouny}','{d['deposit_amount']}',{d.discount},'{d.local_date}','{d.receipt_number}','{d.special_allowance}','{d.total_amount}',),
            </Fragment>
          )
        })}

      </div>
    </div>
  );
};

export default EmailVerification;
