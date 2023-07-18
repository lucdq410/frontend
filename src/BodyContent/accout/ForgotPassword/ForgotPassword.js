import React, { useState } from 'react';
import './ForgotPassword.scss';
import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://qqqq-v7b6.onrender.com/api/auth/forgetpassword', { email });
      if (response.status === 200) {
        alert('Vui lòng kiểm tra email để đặt lại mật khẩu.');
      } else {
        alert('Gửi yêu cầu đặt lại mật khẩu thất bại.');
      }
    } catch (error) {
      console.error('Error sending reset password request:', error);
      alert('Gửi yêu cầu đặt lại mật khẩu thất bại.');
    }
  };

  return (
    <div id="ForgotPassword" className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Quên mật khẩu</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit" name="action" value="reset">
          Đặt lại mật khẩu
        </button>
        <div className="back-to-login">
          <a href="/login" className="register-link">
            Quay lại đăng nhập
          </a>
        </div>
      </form>
    </div>
  );
}