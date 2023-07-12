import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navigation from './Home/header';
import Banner from './BodyContent/banner/banner.js';
import Login from './BodyContent/accout/login/LoginBar';
import Doctor from './BodyContent/Doctor';
import Register from './BodyContent/accout/Register/Register';
import ForgotPassword from './BodyContent/accout/ForgotPassword/ForgotPassword';
import Footer from './Footer/footer';
import DocDetail from './BodyContent/DocDetail';
import Worksheet from './BodyContent/Worksheet';
import ViewTreatmentProfile from './BodyContent/Doctor/ViewTreatmentProfile/ViewTreatmentProfile';
import ViewTreatementList from './BodyContent/Doctor/ViewTreatmentList/ViewTreatementList';
import CreateTreatementIn from './BodyContent/Doctor/CreateTreatementIn/CreateTreatmentIn';
import Doctorviewbooking from './BodyContent/Doctor/Doctorviewbooking/viewBooking';
import DoctorViewPatientProfile from './BodyContent/Doctor/ViewPatientProfile/PatientProfile';
import DoctorTimeSlotPages from './BodyContent/Doctor/TimeSlotsPage/TimeSlotsPage';

import CreateDoctor from './BodyContent/Admin/CreateDoctor/CreateDoctor';
import CreateSlot from './BodyContent/Admin/CreateSlot/AdminCreateSlot';
import DoctorList from './BodyContent/Admin/ViewDoctorList/DoctorList';
import DoctorDetail from './BodyContent/Admin/ViewDocDetail/DoctorDetail';
import DoctorUpdate from './BodyContent/Admin/UpdateDoctor/UpdateDoctor';
import ChangePass from './BodyContent/Admin/ChangePass/ChangePass';
import Cancellation from './BodyContent/Admin/CancellationRequests/CancellationRequests';
import CustomerViewBooking from './BodyContent/customer/CustomerViewBooking/CustomerViewBooking';
import CustomerViewDoctor from './BodyContent/customer/CustomerViewDoctor/CustomerViewDoctor';
import ViewDocDetail from './BodyContent/customer/ViewDocDetail/ViewDocDetail';
import CustomerProfile from './BodyContent/customer/ViewProfile/UserProfile';
import CustomerEditProfile from './BodyContent/customer/EditProfile/EditProfile';
import CustomerViewTreatmentIn from './BodyContent/customer/ViewTreatmentIn/TreatmentProcess';
import CustomerViewProfileTreatment from './BodyContent/customer/ViewProFileTreatment/MedicalRecord';
import CustomerWriteAppointment from './BodyContent/customer/WriteAppointment/AppointmentForm';

import DoctorViewprofile from './BodyContent/Doctor/Viewprofile/Viewprofile';
import DoctorUpdateprofile from './BodyContent/Doctor/UpdateProfile/UpdateProfile';

// import testthu from './BodyContent/Admin/test/test';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Thực hiện các hành động cần thiết khi logout
  };

  return (

    <div>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/doctor' exact element={<Doctor />} />
        {/* customer/doctor */}
        <Route path='/doctor/:id' element={<DocDetail />} />
        {/* trang detail bs sẽ xem đc bằng cả guest và cust, id ko nên đc hiện trên đường dẫn*/}

        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/' exact element={<Banner />} />
        <Route path='/Worksheet' element={<Worksheet />} />

        {/* admin */}
        <Route path='/admin/createdoctor' element={<CreateDoctor />} />
        <Route path='/admin/createslot' element={<CreateSlot />} />
        <Route path='/admin/doctorlist' element={<DoctorList />} />
        <Route path='/admin/doctordetail/:doctorId' element={<DoctorDetail />} />
        <Route path='/admin/doctor/update' element={<DoctorUpdate />} />
        <Route path='/admin/changepass' element={<ChangePass />} />
        <Route path='/admin/cancellation' element={<Cancellation />} />


        {/* custormer */}
        <Route path='/customer/profile' element={<CustomerProfile />} />
        <Route path='/customer/profile/edit' element={<CustomerEditProfile />} />
        <Route path='/customer/treatmentprofile/treatment' element={<CustomerViewTreatmentIn />} />
        <Route path='/customer/treatmentprofile' element={<CustomerViewProfileTreatment />} />
        <Route path='/customer/slot/appointment' element={<CustomerWriteAppointment />} />


        <Route path='/doctor/viewTreatmentProfile' element={<ViewTreatmentProfile />} />
        {/* doc/treatment/detail */}
        <Route path='/doctor/treatmentlist' element={<ViewTreatementList />} />
        <Route path='/doctor/writetreatmentin' element={<CreateTreatementIn />} />
        <Route path='/doctor/viewprofile' element={<DoctorViewprofile />} />
        <Route path='/doctor/updateProfile' element={<DoctorUpdateprofile />} />
        <Route path='/Doctorviewbooking' element={<Doctorviewbooking />} />
        <Route path='/Doctor/viewpatientprofile' element={<DoctorViewPatientProfile />} />
        <Route path='/Doctor/doctorbook' element={<DoctorTimeSlotPages />} />


        {/* customer */}
        <Route path='/5' element={<CustomerViewBooking />} />
        <Route path='/6' element={<CustomerViewDoctor />} />
        <Route path='/7' element={<ViewDocDetail />} />


      </Routes>
      <Footer />
    </div>

  );
}

export default App;
