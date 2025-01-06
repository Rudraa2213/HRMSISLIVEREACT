import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL_9091 from '../../user/AllRounder/HRMSUrl';

const AddEmployee = () => {
    const [dep, setDep] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL_9091}/department/list`).then(res => {
            console.log(res.data.Data)
            setDep(res.data.Data);
        });
    }, [])


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [address, setAddress] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [designationId, setDesignationId] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [location, setLocation] = useState('');
    const [bankName, setBankName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');
    const [dob, setDob] = useState('');
    const [workAs, setWorkAs] = useState('');
    const [someDate, setSomeDate] = useState('');
    const [branch, setBranch] = useState('');
    const [totalSalary, setTotalSalary] = useState('');
    const [under, setUnder] = useState('');
    const [pancardNumber, setPancardNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            username,
            password,
            motherName,
            fatherName,
            email,
            contactNumber,
            bloodGroup,
            address,
            departmentId,
            designationId,
            bankAccountNumber,
            location,
            bankName,
            employeeNumber,
            dateOfJoining,
            dob,
            under,
            workAs,
            branch,
            someDate,
            totalSalary,
            pancardNumber
        };

        try {
            const response = await axios.post(`${BASE_URL_9091}/hrms/emp/registration`, formData);
            console.log('Employee added successfully:', response.data);
            setName('');
            setUsername('');
            setPassword('');
            setMotherName('');
            setFatherName('');   
            setEmail('');
            setContactNumber('');
            setBloodGroup('');
            setAddress('');
            setDepartmentId('');
            setDesignationId('');
            setBankAccountNumber('');
            setLocation('');
            setBankName('');
            setEmployeeNumber('');
            setDateOfJoining('');
            setDob('');
            setWorkAs('');
            setSomeDate('');
            setBranch('');
            setTotalSalary('');
            setUnder('');
            setPancardNumber('');
        } catch (error) {
            console.error('There was an error adding the employee:', error);
        }
    };

    return (
        <Fragment>
            <div className="container-fluid pt-4">
                <nav style={{ fontSize: "14px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                        <li className="breadcrumb-item">Admin</li>
                        <li className="breadcrumb-item">Management</li>
                        <li className="breadcrumb-item">Add Employee</li>
                    </ol>
                </nav>
            </div>
            <hr />
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="TitleBox">
                        <h4 className="Title">Add Employee</h4>
                    </div>

                    <div className="CommonForm">
                        <div className="row">
                            <div className="col-sm-4">
                                <figure><img src="images/Avatar-1.png" alt="" /></figure>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
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
                                        <label>Password*</label>
                                        <input
                                            
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                        <label>DEPARTMENT ID</label>
                                        <select
                                            className="form-control"
                                            value={departmentId}
                                            onChange={(e) => setDepartmentId(e.target.value)}
                                        >
                                            <option value="">Select department</option>
                                            {dep.map((d, key) => {
                                                return (
                                                    <option value={d.id}>{d.id}. {d.department} ({d.shortName})</option>
                                                )
                                            })}
                                            <option value={1}>IT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>DESIGNATION ID</label>
                                        <select
                                            className="form-control"
                                            value={designationId}
                                            onChange={(e) => setDesignationId(e.target.value)}
                                        >
                                            <option value="">Select designation</option>
                                            <option value="Frontend developer">Frontend developer</option>
                                            <option value="Backend Developer">Backend Developer</option>
                                            <option value="Full Stack Developer">Full Stack Developer</option>
                                            <option value="IT Manager">IT Manager</option>
                                            <option value="Database Analyst">Database Analyst</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BANK ACCOUNT NUMBER</label>
                                        <input
                                            
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
                                        <label>LOCATION*</label>
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
                                        <label>BANK NAME</label>
                                        <input
                                            
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
                                            
                                            type="date"
                                            className="form-control"
                                            value={someDate}
                                            onChange={(e) => setSomeDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>BRANCH*</label>
                                        <input
                                            
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
                                            
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter pancard number"
                                            value={pancardNumber}
                                            onChange={(e) => setPancardNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <button type="submit" className="Button my-3 me-2">ADD EMPLOYEE</button>
                                    <button type="reset" className="Button my-3">Reset</button>
                                </div>


                                <div className="col-sm-4"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AddEmployee;
