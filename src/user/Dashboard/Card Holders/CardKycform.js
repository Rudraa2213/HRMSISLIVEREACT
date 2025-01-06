import React, { Fragment, useState } from 'react';
import "../../../../../Css/Kyc-form.css";
import data from '../../../../JsonFile/Stateanddistrict.json';
import axios from 'axios';
import BASE_URL from '../../AllRounder/Url';
import { useNavigate } from 'react-router-dom';


function CardKycForm() {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    // const [image5, setImage5] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const Navigate = useNavigate();
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
        // screenShotPath: null,
        adharCard: null,
        panCard: null,
        domicile: null,
        idProff: null,
        // lpc: null
    });

    const [show, setShow] = useState("d-block");
    const india = data.states;
    const [stateDistrict, setStateDistrict] = useState([" "]);

    const handleSelectChange = (event) => {
        const stateName = event.target.value;
        setFormData({
            ...formData,
            state: stateName
        });

        setStateDistrict(india.find(e => e.state === stateName).districts);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${BASE_URL}/api/cardkyc/create`;
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        if (isChecked) {
            try {
                const response = await axios.post(url, formDataToSend, config);
                console.log(response.data.object);
                alert(`${response.data}`);
                // Handle success (e.g., clear form fields)
                const user = response.data;
                console.log(user);

                localStorage.setItem("email", user.email);
                localStorage.setItem("formId", user.userId);
                Navigate("/crm/user/card-kyc-form/thankyou")
            } catch (error) {
                console.log(`${error.message}`);
            }
        }
        else {
            alert("Please Check the Declaration!")
        }
    };

    const handleDoubleChange1 = (e) => {
        handleFileChange(e);
        handleImageChange(e, setImage1)
    }
    const handleDoubleChange2 = (e) => {
        handleFileChange(e);
        handleImageChange(e, setImage2)

    }
    const handleDoubleChange3 = (e) => {
        handleFileChange(e);
        handleImageChange(e, setImage3)
    }
    const handleDoubleChange4 = (e) => {
        handleFileChange(e);
        handleImageChange(e, setImage4)
    }
    // const handleDoubleChange5 = (e) => {
    //     handleFileChange(e);
    //     handleImageChange(e, setImage5)
    // }


    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>KYC FORM</h1>
            <br />
            <div className="container-fluid p-5 kyccontainer-fluid">
                <div className="container kyccontainer">
                    <form className='p-3' method='post' onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label className='kyclabel' htmlFor='name'>Name of Applicant*</label>
                            <input type="text" className="form-control kyctext" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="dob">Applicant Date of Birth*</label>
                            <input type="date" className="form-control kyctext" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="adharnumber">Aadhaar Card</label>
                            <input type="text" className="form-control kyctext" id='adharNumber' name="adharNumber" value={formData.adharNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="pancardnumber">Pan Card</label>
                            <input type="text" className="form-control kyctext" name="pancardNumber" value={formData.pancardNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="mobile">Aadhaar Linked Mobile No.*</label>
                            <input type="text" className="form-control kyctext" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="email">Email Id*</label>
                            <input type="email" id="email" className="form-control kyctext" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel'>Gender</label>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-male">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-female">Female</label>
                            </div>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-other" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-other">Other</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="father-name">Name of Father</label>
                            <input type="text" className="form-control kyctext" id="father-name" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                        </div>
                        {/* <div className="mb-3">
                            <label className='kyclabel' htmlFor="mother-name">Name of Mother</label>
                            <input type="text" className="form-control kyctext" id="mother-name" name="motherName" value={formData.motherName} onChange={handleChange} />
                        </div> */}
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="marital-status">Marital Status</label>
                            <select className="form-control marital" id="marital-status" name="maritalStatus" value={formData.maritalStatus} onChange={(e) => {
                                handleChange(e);
                                setShow(e.target.value === "married" ? "d-block" : "d-none");
                            }}>
                                <option value="married">Married</option>
                                <option value="unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className={`mb-3 ${show}`} id='kycwife'>
                            <label className='kyclabel' htmlFor="spouse-name">Spouse Name</label>
                            <input type="text" className="form-control kyctext" id="spouse-name" name="spouseName" value={formData.spouseName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="owneraddress" className='kyclabel'>Owner Address*</label>
                            <textarea name="ownerAddress" id="owneraddress" value={formData.ownerAddress} onChange={handleChange} className="form-control"></textarea>
                        </div>
                        {/* <div className="mb-3">
                            <h1 className='h5'>Proposed location for opening "Swabhimaan Kendra"</h1>
                            <label htmlFor="addressline" className='kyclabel'>Address Line 1*</label>
                            <textarea name="addressLine1" id="addressline" value={formData.addressLine1} onChange={handleChange} className="form-control"></textarea>
                            <label htmlFor="addressline2" className='kyclabel'>Address Line 2</label>
                            <textarea name="addressLine2" id="addressline2" value={formData.addressLine2} onChange={handleChange} className="form-control"></textarea>
                        </div> */}
                        <div className={`mb-3`} id='kendraadress'>
                            <label className='kyclabel' htmlFor="kendrarea">Category of Area *</label>
                            <select className="form-control kyctext" id="kendrarea" name="kendrarea" value={formData.kendrarea} onChange={handleChange}>
                                <option hidden>Select</option>
                                <option value="Rural">Rural</option>
                                <option value="Urban">Urban</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="state">State</label>
                            <select className="form-select marital" aria-label="Default select example" id="state" name="state" value={formData.state} onChange={handleSelectChange}>
                                <option hidden>Select State</option>
                                {india.map((item, index) => (
                                    <option key={index} value={item.state}>{item.state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="district">District</label>
                            <select className="form-select marital" id="district" name="district" aria-label="Default select example" value={formData.district} onChange={handleChange}>
                                <option hidden>Select district</option>
                                {stateDistrict.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="block">Block*</label>
                            <input type="text" className="form-control kyctext" name="block" value={formData.block} onChange={handleChange} required />

                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="village">Village*</label>
                            <input type="text" className="form-control kyctext" name="village" value={formData.village} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="pin-code">Pin Code*</label>
                            <input type="text" className="form-control kyctext" name="pincode" value={formData.pincode} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="blood-group">Blood Group</label>
                            <input type="text" className="form-control kyctext" id="bloodgroup" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="qualification">Qualification</label>
                            <input type="text" className="form-control kyctext" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} />
                        </div>
                        {/* <div className="mb-3">
                            <label className='kyclabel' htmlFor="medical-history">Medical History</label>
                            <input type="text" className="form-control kyctext" id="medical-history" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
                        </div> */}
                        <div className="form-group">
                            <label>Aadhaar Card:</label>
                            <input type="file" className="form-control-file form-control form-control-md" name="adharCard" onChange={handleDoubleChange1} required />
                            {image1 && <img src={image1} alt="1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        </div>

                        <div className="form-group">
                            <label>Pan Card:</label>
                            <input type="file" className="form-control-file form-control form-control-md" name="panCard" onChange={handleDoubleChange2} required />
                            {image2 && <img src={image2} alt=" 1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        </div>

                        <div className="form-group">
                            <label>Domicile:</label>
                            <input type="file" className="form-control-file form-control form-control-md" name="domicile" onChange={handleDoubleChange3} required />
                            {image3 && <img src={image3} alt=" 1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        </div>

                        <div className="form-group">
                            <label>ID Proof:</label>
                            <input type="file" className="form-control-file form-control form-control-md" name="idProff" onChange={handleDoubleChange4} required />
                            {image4 && <img src={image4} alt=" 1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        </div>

                        {/*
                        <div className="form-group">
                            <label>Other Document:</label>
                            <input type="file" className="form-control-file form-control form-control-md" name="lpc" onChange={handleDoubleChange5} required />
                            {image5 && <img src={image5} alt=" 1 Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        </div> */}

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="declare">
                                <input
                                    type="checkbox"
                                    name='declare'
                                    checked={isChecked}
                                    onChange={(e) => {
                                        setIsChecked(e.target.checked);
                                    }}
                                />
                                I hereby declare that the information provided above is true and accurate to the best of my knowledge.
                            </label>
                        </div>
                        <button type="submit" className="btn w-100 text-light mt-2" style={{ backgroundColor: "#336699" }}>Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CardKycForm;