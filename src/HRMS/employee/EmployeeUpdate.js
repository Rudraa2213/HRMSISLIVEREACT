import React, { Fragment, useState } from 'react';
import axios from 'axios';
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';
import { toast, ToastContainer } from 'react-toastify';


const EmployeeUpdate = () => {

    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [motherName, setMotherName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [address, setAddress] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [location, setLocation] = useState("");
    const [bankName, setBankName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [dob, setDob] = useState("");
    const [workAs, setWorkAs] = useState("");
    const [someDate, setSomeDate] = useState("");
    const [branch, setBranch] = useState("");
    const [totalSalary, setTotalSalary] = useState("");
    const [under, setUnder] = useState("");
    const [pancardNumber, setPancardNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = {
            name,
            username,
            motherName,
            fatherName,
            email,
            contactNumber,
            bloodGroup,
            address,
            bankAccountNumber,
            location,
            bankName,
            employeeNumber,
            dateOfJoining,
            dob,
            workAs,
            someDate,
            branch,
            totalSalary,
            under,
            pancardNumber
        };

        try {
            const response = await axios.put(`${BASE_URL_9091}/hrms/emp/update/${""}`, formData);
            if (response.data.status) {
                console.log('Employee Updated successfully:', response.data);
                toast.success(`${response.data.message}`, {
                });
            }
        } catch (error) {
            console.error('There was an error adding the employee:', error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <Fragment>
            <div className="container-fluid pt-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Employee</li>
                        <li className="breadcrumb-item">Update Employee</li>
                    </ol>
                </nav>
            </div>
            <hr />
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Update Employee</h4>
                    </div>

                    <div className="CommonForm">
                        <div className="row">
                            <div className="col-sm-4">
                                <figure><img src="images/Avatar-1.png" alt="" /></figure>
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Name*</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>USERNAME*</label>
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>MOTHER NAME</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter mother name"
                                            value={motherName}
                                            onChange={(e) => setMotherName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>FATHER NAME*</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter father name"
                                            value={fatherName}
                                            onChange={(e) => setFatherName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>EMAIL*</label>
                                        <input
                                            disabled
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>CONTACT NUMBER*</label>
                                        <input

                                            type="number"
                                            className="form-control"
                                            placeholder="Enter contact number"
                                            value={contactNumber}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BLOOD GROUP</label>
                                        <select
                                            className="form-control"
                                            value={bloodGroup}
                                            onChange={(e) => setBloodGroup(e.target.value)}
                                        >
                                            <option value="">Select blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>ADDRESS</label>
                                        <input
                                            className="form-control"
                                            placeholder="Enter address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>WORK LOCATION*</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BANK ACCOUNT NUMBER</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter bank account number"
                                            value={bankAccountNumber}
                                            onChange={(e) => setBankAccountNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BANK NAME</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter bank name"
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>EMPLOYEE NUMBER*</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter employee number"
                                            value={employeeNumber}
                                            onChange={(e) => setEmployeeNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>DATE OF JOINING*</label>
                                        <input

                                            type="date"
                                            className="form-control"
                                            value={dateOfJoining}
                                            onChange={(e) => setDateOfJoining(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>DATE OF BIRTH</label>
                                        <input
                                            required
                                            type="date"
                                            className="form-control"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>FUNCTION</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter function"
                                            value={workAs}
                                            onChange={(e) => setWorkAs(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>SOMEDATE</label>
                                        <input
                                            required
                                            type="date"
                                            className="form-control"
                                            value={someDate}
                                            onChange={(e) => setSomeDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BANK BRANCH*</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter branch"
                                            value={branch}
                                            onChange={(e) => setBranch(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>TOTAL SALARY*</label>
                                        <input

                                            type="number"
                                            className="form-control"
                                            placeholder="Enter total salary"
                                            value={totalSalary}
                                            onChange={(e) => setTotalSalary(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>UNDER*</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter under"
                                            value={under}
                                            onChange={(e) => setUnder(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>PANCARD NUMBER</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter pancard number"
                                            value={pancardNumber}
                                            onChange={(e) => setPancardNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <div className='loader_div'>
                                        <button type="submit" className="register-button mt-4 button_width">UPDATE EMPLOYEE</button>
                                        {loading && (
                                            <div className="spinner"></div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-sm-4"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
}

export default EmployeeUpdate;
