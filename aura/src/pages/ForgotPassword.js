import React, { useEffect } from "react";
import './styles/forgotPassword-style.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    useEffect(() => {
                    // Add the class to body
                    document.body.classList.add("forgot-container-body");
            
                    // Clean up by removing the class when the component unmounts
                    return () => {
                        document.body.classList.remove("forgot-container-body");
                    };
                }, []);
    return (
        <div className="forgot-password-box">
            <h1>Forgot Password</h1>
            <p>Remember your password? <Link to="/sign-in">Sign in</Link></p>
            <form>
                <label>Email Address:</label>
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="reset-btn">
                    <Link to="/verification">Reset Password</Link>
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
