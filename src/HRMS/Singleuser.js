import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from '../user/AllRounder/Url';



const Singleuser = () => {
    const { token } = useParams();
    useEffect(() => {
       const fetchToken=()=>{
        axios.post(`${BASE_URL}/user/token/${token}`).then((res) => {
            console.log(res);
            setFormData(res.data);
        });
       }
       fetchToken();
    }, [token]);


    const [formData, setFormData] = useState({
        userId: '',
        name: '',
        username: '',
        email: '',
        mobile: '',
        state: '',
        token: '',
        totalAmount: '',
        withdrawalAmount: '',
        transaction: '',
        deposit: '',
        borrowMoney: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleupdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${BASE_URL}/user/update/${formData.userId}`, formData);
            console.log(response.data);
            if(response.data.status){
                toast.success(response.data.message+"!",{
                    position:"top-right"
                })
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Fragment>
            <div className="singlefirstdiv">
                <div className="container singleseconddiv">
                    <div className="container rounded p-4" id='singlethirddiv'>
                        <form onSubmit={handleupdate}>
                            <h1 className='h1 text-center text-light singleh'>User Form</h1>
                            <div className="row g-2 d-flex">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="userId" className="form-label">UserId</label>
                                    <input type="text" className="form-control" id="userId" name="userId" disabled value={formData.userId} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" disabled value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" disabled value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" disabled value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" name="mobile" disabled value={formData.mobile} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="token" className="form-label">Token</label>
                                    <input type="text" className="form-control" id="token" name="token" disabled value={formData.token} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="totalAmount" className="form-label">Total Amount</label>
                                    <input type="text" className="form-control" id="totalAmount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="withdrawalAmount" className="form-label">Withdrawal Amount</label>
                                    <input type="text" className="form-control" id="withdrawalAmount" name="withdrawalAmount" value={formData.withdrawalAmount} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="transaction" className="form-label">Transaction</label>
                                    <input type="text" className="form-control" id="transaction" name="transaction" value={formData.transaction} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="deposit" className="form-label">Deposit</label>
                                    <input type="text" className="form-control" id="deposit" name="deposit" value={formData.deposit} onChange={handleChange} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <label htmlFor="borrowMoney" className="form-label">Borrow Money</label>
                                    <input type="text" className="form-control" id="borrowMoney" name="borrowMoney" value={formData.borrowMoney} onChange={handleChange} />
                                </div>

                            </div>
                            <h2 className='text-center'><button type="submit" className="btn btn-primary btn-lg mt-3 ps-5 pe-5">Submit</button></h2>
                        </form>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </Fragment>
    );
};

export default Singleuser;
