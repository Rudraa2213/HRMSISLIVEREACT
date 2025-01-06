import "../src/Css/Style.css";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle';
import React, { Suspense, lazy } from 'react';
import Fallbackdata from '../src/All Rounder/Fallbackdata'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "./HRMS/Home";
import EmployeeDash from "./HRMS/employee/EmployeeDash";
// import Dash from '../src/HRMS/HRMSLogin/Dash'

import SingleUser from '../src/HRMS/Singleuser';

import EmailVerification from "../src/EmailVerification";
import Hrmsdashboard from "./HRMS/HRMSLogin/Hrmsdashboard";
import EmployeeManage from "../src/HRMS/EmployeeManage";
import LeaveManagement from "../src/HRMS/LeaveManagement";
import AttendanceTable from "./HRMS/HRMSLogin/AttendanceTable";
import PayrollEarning from "../src/HRMS/PayrollEarning";
import Notifications from "../src/HRMS/Notifications";
import HRProfile from "../src/HRMS/HrProfile";
import SettingManagement from "../src/HRMS/SettingManagement";
import LoginEmployee from "./HRMS/employee/LoginEmployee";
import EmployeeUpdate from "./HRMS/employee/EmployeeUpdate";
import Adminlogin from "./HRMS/HRMSLogin/Adminlogin";
import AddEmployee from "./HRMS/HRMSLogin/AddEmployee";
import EmployeeDashboard from "./HRMS/employee/EmployeeDashboard";
import EmployeeLeave from "./HRMS/employee/EmployeeLeave";
import EmployeeAttendance from "./HRMS/employee/EmployeeAttendance";
import Logout from "./HRMS/employee/Logout";
import AdminDash from './HRMS/HRMSLogin/AdminDash'
import Department from './HRMS/HRMSLogin/Department'
import AdminLogout from "./HRMS/HRMSLogin/AdminLogout";


const Product = lazy(() => import('../src/All Rounder/Product'));


// const Websiteisonworking = lazy(() => import('../src/user/Websiteisonworking'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='products' element={<Suspense fallback={<Fallbackdata />}><Product /></Suspense>} />
        {/*FOR HRMS */}
        <Route path='' element={<Home />} />
        <Route path='/' element={<Home />} />

        {/* For Employee */}
        <Route path='/employeelogin' element={<LoginEmployee />} />
        <Route path="employeedash" element={<EmployeeDash />}>
          <Route path="dash" element={<EmployeeDashboard />}></Route>
          <Route path='employeeupdate' element={<EmployeeUpdate />} ></Route>
          <Route path="leavemanage" element={<EmployeeLeave />}></Route>
          <Route path="attandance" element={<EmployeeAttendance />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
        {/* For Admin */}
        <Route path='/adminlogin' element={<Suspense fallback={<Fallbackdata />}><Adminlogin /></Suspense>} />
        <Route path="admindash" element={<AdminDash />}>
          <Route path="dash" element={<Hrmsdashboard />}/>
          <Route path="department" element={<Department />}></Route>
          <Route path="leavemanage" element={<LeaveManagement />}/>
          <Route path="attandance" element={<AttendanceTable />}></Route>
          <Route path="empmanage" element={<EmployeeManage />} />
          <Route path="empadd" element={<AddEmployee />}></Route>
          <Route path="payroll" element={<PayrollEarning />}></Route>
          <Route path="notification" element={<Notifications />}></Route>
          <Route path="hrprofile" element={<HRProfile />}></Route>
          <Route path="settings" element={<SettingManagement />}></Route>
          <Route path="logout" element={<AdminLogout />}></Route>
        </Route>
        <Route path='admindash/dash/singleuser/:token' element={<SingleUser />}></Route>
        <Route path="emailverify" element={<EmailVerification />}></Route>


      </Routes>

    </BrowserRouter >
  </React.StrictMode >
);

