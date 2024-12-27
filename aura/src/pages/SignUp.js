import React, { useState, useEffect } from "react";
import './styles/signUp-style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format. Please use a valid email like example@example.com.");
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        const minLength = 8;
        if (password.length < minLength) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        if (validateEmail() && validatePassword()) {
            setError(""); // Clear errors if all validations pass

            // Check if email already exists
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.find(user => user.email === email);

            if (userExists) {
                setError("User with this email already exists. Please Sign In.");
            } else {
                // Save new user data to localStorage
                const newUser = { firstName, lastName, email, password };
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));

                alert("Account created successfully!");
                setFirstName(""); setLastName(""); setEmail(""); setPassword(""); setConfirmPassword(""); // Clear the form
            }
        }
    };

    useEffect(() => {
            // Add the class to body
            document.body.classList.add("signup-container-body");

            // Clean up by removing the class when the component unmounts
            return () => {
                document.body.classList.remove("signup-container-body");
            };
        }, []);

    return (
        <div className="signUp-container">
            <h1>Sign up</h1>
            <h4>Join us - it's quick, easy, and totally free!</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {error && <p className="error-msg">{error}</p>}
                <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
        </div>
    );
};

export default SignUp;
