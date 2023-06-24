import React from 'react';
import './ForgotPassword.css';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý gửi email đặt lại mật khẩu với địa chỉ email đã nhập
    };

    return (
        <div className="forgot-password-container">

            <div className='background'>
                <div className='shape'></div>
                <div className='shape'></div>

                <form onSubmit={handleSubmit}>
                    <h2>Forgot Password</h2>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                    <button type="submit" name="action" value="reset">Reset Password</button>
                </form>

            </div>
        </div>
    );
}
