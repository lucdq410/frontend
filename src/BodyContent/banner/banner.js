import './banner.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React , { useState, useEffect }from 'react';
import AppointmentForm from '../customer/WriteAppointment/AppointmentForm';
export default function Banner() {
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
          .get('https://qqqq-v7b6.onrender.com/api/amount/get')
          .then((response) => {
            setAmount(response.data.amount);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      }, []);
    return (
        <div className="ct"   >
            <nav className="box">
                <button className="appointment-btn" onClick={() => <AppointmentForm/>}>Appointment {amount} vnd</button>
            </nav>
        </div>
    );
}