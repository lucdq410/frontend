// File: Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.scss';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterSuccess = (response) => {
    console.log(response.data);
    // Xử lý thành công sau khi đăng ký (nếu cần)
  };

  const handleRegisterFailure = (error) => {
    if (error.response) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu phải ít nhất 8 kí tự
    if (password.length < 8) {
      setErrorMessage('Mật khẩu phải ít nhất 8 kí tự');
      return;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu phải giống nhau
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp');
      return;
    }

    const data = {
      email: email,
      password: password,
      fullname: fullname,
      address: address,
      phone: phone,
      gender: gender,
      confirmPassword: confirmPassword,
    };

    axios
      .post('https://qqqq-v7b6.onrender.com/api/auth/register', data)
      .then(handleRegisterSuccess)
      .catch(handleRegisterFailure);
  };

  return (
    <div className="register-container">
        <form className="card shadow-2-strong" style={{ borderRadius: '1rem' }} onSubmit={handleSubmit}>
          <h3 className="register-heading">Đăng ký tài khoản</h3>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Nhập email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullname">Họ và tên</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Nhập họ và tên"
              value={fullname}
              onChange={handleFullnameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Nhập địa chỉ"
              value={address}
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Nhập số điện thoại"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="form-group">
            <label>Giới tính</label>
            <div className="d-flex">
              <div className="form-check mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender-male"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="gender-male">
                  Nam
                </label>
              </div>
              <div className="form-check mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender-female"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="gender-female">
                  Nữ
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender-other"
                  value="Other"
                  checked={gender === 'Other'}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="gender-other">
                  Khác
                </label>
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
              <button className="close-button" onClick={() => setErrorMessage('')}>
                Đóng
              </button>
            </div>
          )}

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Đăng ký
            </button>
          </div>

          <div className="login-links mt-3">
            <Link to="/login">Đăng nhập</Link>
            <Link to="/forgot-password">Quên mật khẩu</Link>
          </div>
        </form>
      </div>
    
  );
}
