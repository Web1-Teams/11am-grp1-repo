import React, { useEffect } from "react";
import './styles/resetPassword-style.css';
import { Link } from 'react-router-dom';
const ResetPassword = () => {

    useEffect(() => {
                // Add the class to body
                document.body.classList.add("reset-container-body");
        
                // Clean up by removing the class when the component unmounts
                return () => {
                    document.body.classList.remove("reset-container-body");
                };
            }, []);
    return (
        <div className="reset-box">
            <h1>Reset Password</h1>
            <form>
                <label>Enter new Password:</label>
                <input type="password" placeholder="Enter your password" />

                <label>Confirm Password:</label>
                <input type="password" placeholder="Confirm your password" />

                <button type="submit" className="reset-btn">
                    <Link to="/sign-in">Confirm</Link>
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
