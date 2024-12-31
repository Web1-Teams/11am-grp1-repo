import React,{useEffect} from "react";
import './styles/verification-style.css';
import { Link } from 'react-router-dom';
const Verification = () => {
      useEffect(() => {
            // Add the class to body
            document.body.classList.add("ver-container-body");
    
            // Clean up by removing the class when the component unmounts
            return () => {
                document.body.classList.remove("ver-container-body");
            };
        }, []);
    return (

        <div className="verification-box">
            <h1>Verify Your Account</h1>
            <br/>
            <p>We've sent a verification code to your email.     <br/> Please enter it below to continue.</p>
            <form>
                <label>Verification Code:</label>
                <input type="text" placeholder="Enter the verification code" required />

                <button type="submit" className="verify-btn">
                    <Link to="/reset-pass">Verify</Link>
                </button>
            </form>
            <p>If you did not receive the code, check your spam folder or <Link a="/verification">try again</Link>.</p>
        </div>

    );
};

export default Verification;
