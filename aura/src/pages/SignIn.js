import React, { useState, useEffect } from "react";
import './styles/signIn-style.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Trim and normalize inputs
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
    
        // Check if any user matches the entered email and password
        const user = users.find(user => 
            user.email.toLowerCase() === trimmedEmail.toLowerCase() && user.password === trimmedPassword
        );
    
        if (user) {
            // Successful login
            alert("Sign In successful!");
            localStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            // Display error message if no match is found
            setError("Invalid email or password. Please try again.");
        }
    };
    

    useEffect(() => {
        // Add the class to body
        document.body.classList.add("signin-container-body");

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("signin-container-body");
        };
    }, []);

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" className="checkboxes" />
                        Remember Me
                    </label>
                    <Link to="/forgot-pass">Forgot Password?</Link>
                    
                </div>
                <br/>
                {error && <p className="error-msg">{error}</p>}
                <button type="submit"><Link to="/home"> Sign In</Link></button>

                <br/>
                <h2>Or sign in with</h2>
                <br/>
                <div className="social-buttons">
                    <a
                        href="https://www.facebook.com/login"
                        className="social-btn fb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com/login"
                        className="social-btn twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                        href="https://accounts.google.com/ServiceLogin"
                        className="social-btn google"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-google"></i>
                    </a>
                </div>
     
            <div className="createAccount">
                <span>Don't have an account? <Link to="/sign-up">Sign Up</Link></span>
            </div>
            </form>
        </div>
    );
};

export default SignIn;
