import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from '../assets/images/logo.svg';
import './Signup.css'; // You can rename this file to Login.css if desired
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLogin = () => {
        // Simple validation logic
        if (!email || !password) {
            setErrorMessage('Please fill in all fields.'); // Set error message
            return;
        }
        setErrorMessage(''); // Clear error message if validation passes

        console.log('Logging in:', { email, password });

        // Navigate to the homepage (or another page) after successful login
        navigate('/'); // Change to your desired redirect route
    };

    return (
        <section className="userProfileSection">
            <section
                className="contentBoxSection"
                style={{ '--src': `url(/assets/Rectangle 240.png)` }}>
                <div className="contentBox">
                    <div className="flexColumn">
                        <div className="flexRow">
                            <img className="profileImage" src={image} alt="Profile" />
                        </div>

                        <div className="actionButtonsRow">
                            <button className="googleSignUpButton">
                                <FcGoogle className="googleIcon" size={20} />
                                <div className="googleSignUpText">Log in with Google</div>
                            </button>
                            <button className="githubSignUpButton">
                                <FaGithub className="githubIcon" color="black" size={20} />
                                <div className="githubSignUpText">Log in with GitHub</div>
                            </button>
                        </div>

                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-email-input"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: 'gray',
                                        '&.Mui-focused': {
                                            color: 'gray',
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '&:before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:after': {
                                            borderBottomColor: 'rgb(97, 0, 194)',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                variant="standard"
                                autoComplete="current-password"
                                InputLabelProps={{
                                    sx: {
                                        color: 'gray',
                                        '&.Mui-focused': {
                                            color: 'gray',
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '&:before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:after': {
                                            borderBottomColor: 'rgb(97, 0, 194)',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        {/* Error message for invalid information */}
                        {errorMessage && (
                            <div style={{ color: 'red', marginTop: '8px' }}>
                                {errorMessage}
                            </div>
                        )}

                        <div className="signupButtonRow2">
                            <button
                                className="generalSignUpButton"
                                onClick={handleLogin}
                                style={{
                                    backgroundColor: 'rgb(97, 0, 194)', // Default button color
                                    cursor: 'pointer',
                                }}
                            >
                                LOGIN
                            </button>
                        </div>

                        <div className="infoBox_box">
                            <span className="infoBox">
                                Don't have an Account? <Link to="/signup" className="infoBox_link">Sign up here</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Login;
