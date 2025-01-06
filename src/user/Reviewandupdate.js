import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './AllRounder/Url'; // Your API base URL
import "../../../Css/Kyc-form.css"; // Your CSS for KYC form styling
import { useNavigate } from 'react-router-dom';
import Qrcode from '../assets/images/QrCode.jpeg';


function Reviewandupdate() {

    const [image, setImage] = useState(null);
    const [showDiv, setShowDiv] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        adharNumber: '',
        pancardNumber: '',
        mobile: '',
        email: '',
        gender: '',
        fatherName: '',
        motherName: '',
        maritalStatus: '',
        spouseName: '',
        ownerAddress: '',
        addressLine1: '',
        addressLine2: '',
        kendrarea: '',
        state: '',
        district: '',
        block: '',
        village: '',
        pincode: '',
        bloodgroup: '',
        qualification: '',
        medicalHistory: '',
        transactionNumber: '',
        screenShotPath: null,
        adharCard: null,
        panCard: null,
        domicile: null,
        idProff: null,
        lpc: null
    });

    useEffect(() => {
        // Fetch data using formId (assuming you have a formId stored in localStorage)

        const email = localStorage.getItem('email'); // Get formId from localStorage
        const fetchData = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/api/kyckendra/getuser/${email}`); // Fetch data for formId
                setFormData(response.data); // Set form data received from backend
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error, e.g., show error message to user
            }
        };

        if (email) {
            fetchData(); // Call fetchData if formId is available in localStorage
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleDoubleChange = (e) => {
        handleFileChange(e);
        handleImageChange(e, setImage)
    }

    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formId = localStorage.getItem('formId'); // Get formId from localStorage

        const url = `${BASE_URL}/api/kyckendra/update/${formId}`; // Update endpoint with formId
        const head = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.put(url, formDataToSend, head); // Send update request
            alert(`KYC updated successfully with ID: ${response.data}`);
            console.log(response.data);
            Navigate("thankyou")
        } catch (error) {
            alert(`Update failed: ${error.message}`);
        }
    };

    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Review and Update KYC</h1>
            <br />
            <div className="container-fluid p-5 kyccontainer-fluid">
                <div className="container kyccontainer">
                    <form className='p-3' onSubmit={handleSubmit}>
                        {/* Render form inputs with current formData state */}
                        <div className="my-3">
                            <label className='kyclabel' htmlFor='name'>Name of Applicant / Owner*</label>
                            <input disabled value={formData.name} type="text" className="form-control kyctext" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="dob">Applicant / Owner Date of Birth*</label>
                            <input disabled value={formData.dob} type="date" className="form-control kyctext" id="dob" name="dob" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="adharnumber">Aadhaar Card</label>
                            <input disabled value={formData.adharNumber} type="text" className="form-control kyctext" id='adharNumber' name="adharNumber" required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="pancardnumber">Pan Card</label>
                            <input disabled value={formData.pancardNumber} type="text" className="form-control kyctext" name="pancardNumber" required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="mobile">Aadhaar Linked Mobile No.*</label>
                            <input disabled value={formData.mobile} type="text" className="form-control kyctext" id="mobile" name="mobile" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="email">Email Id*</label>
                            <input disabled value={formData.email} type="email" id="email" className="form-control kyctext" name="email" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel'>Gender</label>
                            <input disabled value={formData.gender} type="text" className='form-control kyctext' />

                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="father-name">Name of Father</label>
                            <input disabled value={formData.fatherName} type="text" className="form-control kyctext" id="father-name" name="fatherName" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="mother-name">Name of Mother</label>
                            <input disabled value={formData.motherName} type="text" className="form-control kyctext" id="mother-name" name="motherName" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="marital-status">Marital Status</label>
                            <input disabled value={formData.maritalStatus} type="text" className="form-control kyctext" />
                        </div>
                        <div className={`mb-3`} id='kycwife'>
                            <label className='kyclabel' htmlFor="spouse-name">Spouse Name</label>
                            <input disabled value={formData.spouseName} type="text" className="form-control kyctext" id="spouse-name" name="spouseName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="owneraddress" className='kyclabel'>Owner Address*</label>
                            <textarea disabled value={formData.ownerAddress} name="ownerAddress" id="owneraddress" className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <h1 className='h5'>Proposed location for opening "Swabhimaan Kendra"</h1>
                            <label htmlFor="addressline" className='kyclabel'>Address Line 1*</label>
                            <textarea value={formData.addressLine1} disabled name="addressLine1" id="addressline" className="form-control"></textarea>
                            <label htmlFor="addressline2" className='kyclabel'>Address Line 2</label>
                            <textarea disabled value={formData.addressLine2} name="addressLine2" id="addressline2" className="form-control"></textarea>
                        </div>
                        <div className={`mb-3`} id='kendraadress'>
                            <label className='kyclabel' htmlFor="kendrarea">Category of Area *</label>
                            <input type="text" disabled value={formData.kendrarea} className='form-control kyctext' />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="state">State</label>
                            <input disabled value={formData.state} type="text" className='form-control kyctext' />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="district">District</label>
                            <input disabled value={formData.district} type="text" className='form-control kyctext' />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="block">Block*</label>
                            <input disabled value={formData.block} type="text" className="form-control kyctext" name="block" required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="village">Village*</label>
                            <input disabled value={formData.village} type="text" className="form-control kyctext" name="village" required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="pin-code">Pin Code*</label>
                            <input disabled value={formData.pincode} type="text" className="form-control kyctext" name="pincode" required />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="blood-group">Blood Group</label>
                            <input disabled value={formData.bloodgroup} type="text" className="form-control kyctext" id="bloodgroup" name="bloodgroup" />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="qualification">Qualification</label>
                            <input disabled value={formData.qualification} type="text" className="form-control kyctext" id="qualification" name="qualification" />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="medical-history">Medical History</label>
                            <input disabled type="text" value={formData.medicalHistory} className="form-control kyctext" id="medical-history" name="medicalHistory" />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="declare">
                                <input
                                    type="checkbox"
                                    name='declare'
                                    checked={isChecked}
                                    onChange={(e) => {
                                        setIsChecked(e.target.checked);
                                        console.log(isChecked)
                                    }}
                                />
                                I hereby declare that the information provided above is true and accurate to the best of my knowledge.
                            </label>
                        </div>
                        <div className={`mb-3 ${isChecked ? "d-block" : "d-none"}`}>
                            <div className="container text-center">
                                <div className='btn btn-primary btn-lg' onClick={() => {
                                    setShowDiv(true);
                                }}>Click Here For Payment</div>
                            </div>
                            <div className={`form-group my-3 ${showDiv ? "d-block" : "d-none"}`}>
                                <div className="container text-center">
                                    <img className='w-50 rounded' src={Qrcode} alt="codeQr" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='text-start'>Screen Shot:</label>
                                    <input type="file" className="form-control-file form-control form-control-md" name="screenShotPath" required onChange={handleDoubleChange} />
                                    {image && <img src={image} alt=" 1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                                </div>
                                <div className="mb-3">
                                    <label className='kyclabel' htmlFor="transactionNumber">Transaction Number</label>
                                    <input type="text" className="form-control kyctext" id="transactionNumber" name="transactionNumber" value={formData.transactionNumber} required onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn w-100 text-light mt-2" style={{ backgroundColor: "#336699" }}>Final Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Reviewandupdate;


