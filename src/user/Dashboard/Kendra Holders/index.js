import "./Css/Style.css";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle';
import React, { Suspense, lazy } from 'react';
import Fallbackdata from './Component/All Rounder/Fallbackdata'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Fdapage from './Component/Tabs/HOME/Fdapage';
import LandingPage from "./Component/Tabs/HOME/LandingPage";
import Hrmslogin from "./Component/crm/HRMS/HRMSLogin/Hrmslogin";
import AdminDash from "./Component/crm/HRMS/AdminDash";
import Dash from './Component/crm/HRMS/Dash'
import SingleUser from './Component/crm/HRMS/Singleuser';
import Applyfor from "./Component/crm/user/ApplyFor/Applyfor";
import ApplyForKendra from "./Component/crm/user/Registration Forms/Kendra Holders/ApplyForKendra";
import Reviewandupdate from "./Component/crm/user/Reviewandupdate";
import ThankYouPage from "./Component/crm/user/ThankYou";
import EmailVerification from "./Component/EmailVerification";
import KendraKycform from "./Component/crm/user/Dashboard/Kendra Holders/KendraKycform";


const About = lazy(() => import('./Component/Tabs/ABOUT US/About'));
const Swabhimaan = lazy(() => import('./Component/Tabs/Swabhimaan Card/Swabhimaan'));
const Swabhimaankendra = lazy(() => import('./Component/Tabs/Swabhimaan Kendra/Swabhimaankendra'));
const Career = lazy(() => import('./Component/Tabs/Career/Career'));
const Bloogerpage = lazy(() => import('./Component/Tabs/Blog Page/Bloogerpage'));
const Blogpage = lazy(() => import('./Component/Tabs/Blog Page/Blogpage'));
const Blogs1 = lazy(() => import('./Component/Tabs/Blog Page/Blogs1'));
const Product = lazy(() => import('./Component/All Rounder/Product'));
const User = lazy(() => import('./Component/crm/user/User'));
const Dashboard = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Dashboard'));
const Userdashboard = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Userdashboard'));
const CardKycForm = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/CardKycform'));
const Deposit = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Deposit'));
const Withdraw = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Withdraw'));
const LoanPage = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/LoanPage'));
const LoanPlans = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/LoanPlans'));
const LoanList = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/LoanList'));
const Transfer = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Transfer'));
const Beneficiaries = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/Beneficiaries'));
const WithinFdaIndia = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/WithinFdaIndia'));
const OtherBank = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/OtherBank'));
const Wiretransfer = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/WireTransfer'));
const History = lazy(() => import('./Component/crm/user/Dashboard/Card Holders/History'));
const More = lazy(() => import("./Component/crm/user/Dashboard/Card Holders/More"));
const ApplyForCard = lazy(() => import("./Component/crm/user/Registration Forms/Card Holders/ApplyForCard"))
const Dashboardforkendra = lazy(() => import('./Component/crm/user/Dashboard/Kendra Holders/Dashboardforkendra'));
const Kendradashboard = lazy(() => import("./Component/crm/user/Dashboard/Kendra Holders/Kendradashboard"));
const KendraReviewandupdate=lazy(()=>import("./Component/crm/user/Dashboard/Kendra Holders/KendraReviewandupdate"));


const Websiteisonworking = lazy(() => import('./Component/crm/user/Websiteisonworking'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fdapage />}>
          {/* For Tab */}
          <Route path='' element={<LandingPage />} />
          <Route path='*' element={<LandingPage />} />
          <Route path="About-us" element={<Suspense fallback={<Fallbackdata />}><About /></Suspense>} />
          <Route path='Swabhimaan-card' element={<Suspense fallback={<Fallbackdata />}><Swabhimaan /></Suspense>} />
          <Route path='Swabhimaan-Kendra' element={<Suspense fallback={<Fallbackdata />}><Swabhimaankendra /></Suspense>} />
          <Route path='Career' element={<Suspense fallback={<Fallbackdata />}><Career /></Suspense>} />
          <Route path='Our-blogs' element={<Suspense fallback={<Fallbackdata />}><Blogpage /></Suspense>} />
          <Route path="Blogger-page" element={<Suspense fallback={<Fallbackdata />}><Bloogerpage /></Suspense>} >
            <Route path="blog1-data" element={<Suspense fallback={<Fallbackdata />}><Blogs1 /></Suspense>} />
          </Route>
        </Route>

        <Route path='crm' element={<Suspense fallback={<Fallbackdata />}><User /></Suspense>}>
          {/* for Kendra */}
          <Route path="kendrauser" element={<Suspense fallback={<Fallbackdata />}><Dashboardforkendra/></Suspense>}>
            <Route path='dashboard' element={<Suspense fallback={<Fallbackdata />}><Kendradashboard /></Suspense>} />
            <Route path='kendra-kyc-form' element={<Suspense fallback={<Fallbackdata />}><KendraKycform /></Suspense>} />
            <Route path="kendra-kyc-form/preview-form" element={<Suspense fallback={<Fallbackdata />}><KendraReviewandupdate /></Suspense>} />
          </Route>
          {/* for Card */}
          <Route path='user' element={<Suspense fallback={<Fallbackdata />}><Dashboard /></Suspense>}>
            <Route path='dashboard' element={<Suspense fallback={<Fallbackdata />}><Userdashboard /></Suspense>} />
            <Route path='deposit' element={<Suspense fallback={<Fallbackdata />}><Deposit /></Suspense>} />
            <Route path='card-kyc-form' element={<Suspense fallback={<Fallbackdata />}><CardKycForm /></Suspense>} />
            <Route path="kyc-form/preview-form" element={<Reviewandupdate />} />
            <Route path="kyc-form/preview-form/thankyou" element={<ThankYouPage />} />
            <Route path='withdraw' element={<Suspense fallback={<Fallbackdata />}><Withdraw /></Suspense>} />
            <Route path="loan" element={<Suspense fallback={<Fallbackdata />}><LoanPage /></Suspense>}>
              <Route path="plans" element={<Suspense fallback={<Fallbackdata />}><LoanPlans /></Suspense>} />
              <Route path="list" element={<Suspense fallback={<Fallbackdata />}><LoanList /></Suspense>} />
            </Route>
            <Route path="transfer/own-bank" element={<Suspense fallback={<Fallbackdata />}><Transfer /></Suspense>}>
              <Route path="beneficiaries" element={<Suspense fallback={<Fallbackdata />}><Beneficiaries /></Suspense>} />
              <Route path="within" element={<Suspense fallback={<Fallbackdata />}><WithinFdaIndia /></Suspense>} />
              <Route path="otherbank" element={<Suspense fallback={<Fallbackdata />}><OtherBank /></Suspense>} />
              <Route path="wiretransfer" element={<Suspense fallback={<Fallbackdata />}><Wiretransfer /></Suspense>} />
              <Route path="history" element={<Suspense fallback={<Fallbackdata />}><History /></Suspense>} />
            </Route>
            <Route path="more/*" element={<Suspense fallback={<Fallbackdata />}><More /></Suspense>} />
            <Route path="" element={<Suspense fallback={<Fallbackdata />}><More /></Suspense>} />
            <Route path='*' element={<Suspense fallback={<Fallbackdata />}><Websiteisonworking /></Suspense>} />
          </Route>
          <Route path='user/applyfor' element={<Suspense fallback={<Fallbackdata />}><Applyfor /></Suspense>} />
          <Route path='user/forcard' element={<Suspense fallback={<Fallbackdata />}><ApplyForCard /></Suspense>} />
          <Route path='user/forkendra' element={<Suspense fallback={<Fallbackdata />}><ApplyForKendra /></Suspense>} />
        </Route>

        <Route path='products' element={<Suspense fallback={<Fallbackdata />}><Product /></Suspense>} />
        <Route path='hrmslogin' element={<Suspense fallback={<Fallbackdata />}><Hrmslogin /></Suspense>} />
        <Route path="admindash" element={<AdminDash />}>
          <Route path="dash" element={<Dash />}></Route>
        </Route>
        <Route path='admindash/dash/singleuser/:token' element={<SingleUser />}></Route>
        <Route path="emailverify" element={<EmailVerification />}></Route>


      </Routes>

    </BrowserRouter >
  </React.StrictMode >
);

